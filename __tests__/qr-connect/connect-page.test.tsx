import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as fc from 'fast-check';

// ---------------------------------------------------------------------------
// Mocks — must come before any component import
// ---------------------------------------------------------------------------

// Captured props from SocialCard mock so Property 4 can inspect delay values
const capturedDelays: number[] = [];

jest.mock('@/components/social-card', () => ({
  SocialCard: ({
    name,
    delay,
  }: {
    name: string;
    url: string;
    icon: React.ReactNode;
    delay: number;
  }) => {
    capturedDelays.push(delay);
    return <div data-testid="social-card" data-delay={delay}>{name}</div>;
  },
}));

jest.mock('lucide-react', () => ({
  Globe: () => <svg data-testid="globe-icon" />,
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

// USER mock — starts with real values, overridden per test via jest.doMock / module re-import
jest.mock('@/data/user', () => ({
  USER: {
    firstName: 'Default',
    lastName: 'User',
    jobTitle: 'Developer',
    socialLinks: [],
  },
}));

// ---------------------------------------------------------------------------
// Helper: render ConnectPage with an arbitrary USER injected via module mock
// ---------------------------------------------------------------------------

interface SocialLinkStub {
  name: string;
  url: string;
}

async function renderWithUser(user: {
  firstName: string;
  lastName: string;
  jobTitle: string;
  socialLinks: SocialLinkStub[];
}) {
  // Reset module registry so we can re-import with a fresh mock
  jest.resetModules();

  // Re-apply all the same mocks after resetModules
  jest.mock('@/components/social-card', () => ({
    SocialCard: ({
      name,
      delay,
    }: {
      name: string;
      url: string;
      icon: React.ReactNode;
      delay: number;
    }) => {
      capturedDelays.push(delay);
      return (
        <div data-testid="social-card" data-delay={delay}>
          {name}
        </div>
      );
    },
  }));

  jest.mock('lucide-react', () => ({
    Globe: () => <svg data-testid="globe-icon" />,
  }));

  jest.mock('next/link', () => ({
    __esModule: true,
    default: ({
      children,
      href,
    }: {
      children: React.ReactNode;
      href: string;
    }) => <a href={href}>{children}</a>,
  }));

  jest.mock('@/data/user', () => ({
    USER: {
      firstName: user.firstName,
      lastName: user.lastName,
      jobTitle: user.jobTitle,
      // Each socialLink needs an icon component for the real page; mock as a function
      socialLinks: user.socialLinks.map((l) => ({
        ...l,
        icon: () => <svg />,
      })),
    },
  }));

  const { default: ConnectPage } = await import('@/app/connect/page');
  return render(<ConnectPage />);
}

// ---------------------------------------------------------------------------
// Property 2: Connect page renders name and job title from user data
// Feature: qr-connect, Property 2: Connect page renders name and job title from user data
// Validates: Requirements 4.3, 4.4
// ---------------------------------------------------------------------------
describe('Property 2: Connect page renders name and job title from user data', () => {
  it('displays firstName + " " + lastName as heading and jobTitle as subtitle for any non-empty strings', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.string({ minLength: 1 }),
        fc.string({ minLength: 1 }),
        fc.string({ minLength: 1 }),
        async (firstName, lastName, jobTitle) => {
          capturedDelays.length = 0;

          const { container, unmount } = await renderWithUser({
            firstName,
            lastName,
            jobTitle,
            socialLinks: [],
          });

          const h1 = container.querySelector('h1');
          expect(h1).not.toBeNull();
          expect(h1!.textContent).toContain(`${firstName} ${lastName}`);

          const subtitle = container.querySelector('p');
          expect(subtitle).not.toBeNull();
          expect(subtitle!.textContent).toContain(jobTitle);

          unmount();
        },
      ),
      { numRuns: 100 },
    );
  });
});

// ---------------------------------------------------------------------------
// Property 3: Social card count matches socialLinks length
// Feature: qr-connect, Property 3: Social card count matches socialLinks length
// Validates: Requirements 4.5, 4.6
// ---------------------------------------------------------------------------
describe('Property 3: Social card count matches socialLinks length', () => {
  it('renders exactly N + 1 cards for any array of N social links', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.array(
          fc.record({
            name: fc.string({ minLength: 1 }),
            url: fc.webUrl(),
          }),
          { maxLength: 10 },
        ),
        async (socialLinks) => {
          capturedDelays.length = 0;

          const { container, unmount } = await renderWithUser({
            firstName: 'Test',
            lastName: 'User',
            jobTitle: 'Dev',
            socialLinks,
          });

          const cards = container.querySelectorAll('[data-testid="social-card"]');
          // N social links + 1 hardcoded Portfolio card
          expect(cards.length).toBe(socialLinks.length + 1);

          unmount();
        },
      ),
      { numRuns: 100 },
    );
  });
});

// ---------------------------------------------------------------------------
// Property 4: Staggered animation delay is monotonically increasing
// Feature: qr-connect, Property 4: Staggered animation delay is monotonically increasing
// Validates: Requirements 4.7
// ---------------------------------------------------------------------------
describe('Property 4: Staggered animation delay is monotonically increasing', () => {
  it('each card delay equals i * 0.08 and is strictly greater than the previous', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.array(
          fc.record({
            name: fc.string({ minLength: 1 }),
            url: fc.webUrl(),
          }),
          { maxLength: 10 },
        ),
        async (socialLinks) => {
          capturedDelays.length = 0;

          const { unmount } = await renderWithUser({
            firstName: 'Test',
            lastName: 'User',
            jobTitle: 'Dev',
            socialLinks,
          });

          const totalCards = socialLinks.length + 1; // +1 for Portfolio card
          expect(capturedDelays.length).toBe(totalCards);

          for (let i = 0; i < totalCards; i++) {
            // Each delay should equal i * 0.08 (within floating-point tolerance)
            expect(capturedDelays[i]).toBeCloseTo(i * 0.08, 10);
          }

          // Monotonically increasing: each delay is strictly greater than previous
          for (let i = 1; i < capturedDelays.length; i++) {
            expect(capturedDelays[i]).toBeGreaterThan(capturedDelays[i - 1]);
          }

          unmount();
        },
      ),
      { numRuns: 100 },
    );
  });
});
