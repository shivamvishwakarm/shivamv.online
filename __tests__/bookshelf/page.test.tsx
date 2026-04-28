import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// ---------------------------------------------------------------------------
// Task 8.2 – Unit test: page integration
// Verify BookshelfSection appears after Projects in DOM order
// Validates: Requirements 1.1
// ---------------------------------------------------------------------------

// Mock heavy dependencies to avoid complex setup

jest.mock('@/data/user', () => ({
  USER: {
    firstName: 'Test',
    lastName: 'User',
    jobTitle: 'Developer',
    socialLinks: [],
    PR: [],
    projects: [
      {
        name: 'Test Project',
        description: 'A test project',
        url: 'https://example.com',
        github: 'https://github.com/test',
        techStack: ['React'],
      },
    ],
  },
}));

jest.mock('@/data/bookshelf', () => ({
  BOOKSHELF: [{ title: 'Test Book', author: 'Author', status: 'reading' }],
}));

// Mock components that use next/image or next/link internally
jest.mock('@/components/Profile', () => ({
  __esModule: true,
  default: () => <div data-testid="profile" />,
}));

jest.mock('@/components/socials', () => ({
  __esModule: true,
  default: () => <div data-testid="socials" />,
}));

jest.mock('@/components/cards/pr-card', () => ({
  __esModule: true,
  default: () => <div data-testid="pr-card" />,
}));

jest.mock('@/components/ui/contribution-graph/contribute', () => ({
  GitHubContributions: () => <div data-testid="github-contributions" />,
}));

jest.mock('@/components/dark-light-mode', () => ({
  __esModule: true,
  default: () => <div data-testid="dark-light-mode" />,
}));

jest.mock('@/components/experience', () => ({
  __esModule: true,
  default: () => <div data-testid="experience" />,
}));

jest.mock('@/components/project-card', () => ({
  __esModule: true,
  default: ({ name }: { name: string }) => (
    <div data-testid="project-card">{name}</div>
  ),
}));

jest.mock('@/components/ui/tooltip', () => ({
  SimpleTooltip: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
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

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt ?? ''} />
  ),
}));

import Home from '@/app/page';

describe('Unit: page integration – BookshelfSection DOM order', () => {
  it('renders BookshelfSection after Projects section in DOM order', () => {
    const { container } = render(<Home />);

    // Find the Projects section by its heading text
    const projectsHeading = Array.from(
      container.querySelectorAll('h2')
    ).find((el) => el.textContent?.trim().startsWith('Projects'));

    // Find the Bookshelf section by aria-label or heading
    const bookshelfSection = container.querySelector(
      'section[aria-label="Bookshelf"]'
    );

    expect(projectsHeading).toBeTruthy();
    expect(bookshelfSection).toBeTruthy();

    // compareDocumentPosition returns a bitmask:
    // Node.DOCUMENT_POSITION_FOLLOWING (4) means bookshelfSection comes AFTER projectsHeading
    const position = projectsHeading!.compareDocumentPosition(bookshelfSection!);
    const bookshelfIsAfterProjects =
      (position & Node.DOCUMENT_POSITION_FOLLOWING) !== 0;

    expect(bookshelfIsAfterProjects).toBe(true);
  });
});
