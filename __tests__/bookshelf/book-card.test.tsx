import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as fc from 'fast-check';
import BookCard from '@/components/book-card';

// ---------------------------------------------------------------------------
// Task 2.2 – Property 1: BookCard always renders the title
// Feature: bookshelf, Property 1: BookCard always renders the title
// Validates: Requirements 3.1
// ---------------------------------------------------------------------------
describe('Property 1: BookCard always renders the title', () => {
  it('renders any non-empty title string', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        (title) => {
          const { container, unmount } = render(
            <BookCard title={title} status="to-read" />,
          );
          const h3 = container.querySelector('h3');
          expect(h3?.textContent?.trim()).toBe(title.trim());
          unmount();
        },
      ),
    );
  });
});

// ---------------------------------------------------------------------------
// Task 2.3 – Property 2: BookCard renders author when provided
// Feature: bookshelf, Property 2: BookCard renders author when provided
// Validates: Requirements 3.2
// ---------------------------------------------------------------------------
describe('Property 2: BookCard renders author when provided', () => {
  it('renders any non-empty author string', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        (author) => {
          const { container, unmount } = render(
            <BookCard title="Test Book" author={author} status="to-read" />,
          );
          const p = container.querySelector('p');
          expect(p?.textContent?.trim()).toBe(author.trim());
          unmount();
        },
      ),
    );
  });
});

// ---------------------------------------------------------------------------
// Task 3.2 – Property 3: Status badge reflects the ReadingStatus
// Feature: bookshelf, Property 3: Status badge reflects the ReadingStatus for any valid status
// Validates: Requirements 2.3, 3.3
// ---------------------------------------------------------------------------
const statusLabelMap: Record<string, string> = {
  reading: 'Reading',
  'to-read': 'To Read',
  completed: 'Completed',
};

describe('Property 3: Status badge reflects the ReadingStatus for any valid status', () => {
  it('renders the correct display label for each status', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('reading', 'to-read', 'completed') as fc.Arbitrary<
          'reading' | 'to-read' | 'completed'
        >,
        (status) => {
          const { unmount } = render(
            <BookCard title="Test Book" status={status} />,
          );
          const expectedLabel = statusLabelMap[status];
          expect(screen.getByText(expectedLabel)).toBeInTheDocument();
          unmount();
        },
      ),
    );
  });
});

// ---------------------------------------------------------------------------
// Task 3.3 – Property 7: All three ReadingStatus values produce distinct badge styles
// Feature: bookshelf, Property 7: All three ReadingStatus values produce distinct badge styles
// Validates: Requirements 4.1, 4.2, 4.3
// ---------------------------------------------------------------------------
describe('Property 7: All three ReadingStatus values produce distinct badge styles', () => {
  it('reading, to-read, and completed badges have distinct className strings', () => {
    // Import the statusBadge mapping indirectly by rendering each status and
    // checking the badge element's class list differs between statuses.
    const getClasses = (status: 'reading' | 'to-read' | 'completed') => {
      const { container, unmount } = render(
        <BookCard title="Test Book" status={status} />,
      );
      // The badge is a <span> with the label text
      const badge = container.querySelector('span');
      const classes = badge?.className ?? '';
      unmount();
      return classes;
    };

    const readingClasses = getClasses('reading');
    const completedClasses = getClasses('completed');
    const toReadClasses = getClasses('to-read');

    expect(readingClasses).not.toBe(completedClasses);
    expect(readingClasses).not.toBe(toReadClasses);
    expect(completedClasses).not.toBe(toReadClasses);
  });
});

// ---------------------------------------------------------------------------
// Task 4.4 – Property 4: Link anchor has correct href and opens in new tab
// Feature: bookshelf, Property 4: Link anchor has correct href and opens in new tab
// Validates: Requirements 3.4
// ---------------------------------------------------------------------------
describe('Property 4: Link anchor has correct href and opens in new tab', () => {
  it('renders anchor with matching href and target="_blank" for any URL', () => {
    fc.assert(
      fc.property(fc.webUrl(), (link) => {
        const { unmount } = render(
          <BookCard title="Test Book" status="to-read" link={link} />,
        );
        const anchor = screen.getByRole('link', { name: /open link for/i });
        expect(anchor).toHaveAttribute('href', link);
        expect(anchor).toHaveAttribute('target', '_blank');
        unmount();
      }),
    );
  });
});

// ---------------------------------------------------------------------------
// Task 4.5 – Property 5: PDF anchor has correct href and opens in new tab
// Feature: bookshelf, Property 5: PDF anchor has correct href and opens in new tab
// Validates: Requirements 3.5, 5.1
// ---------------------------------------------------------------------------
describe('Property 5: PDF anchor has correct href and opens in new tab', () => {
  it('renders anchor with matching href and target="_blank" for any pdf path', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (pdf) => {
        const { unmount } = render(
          <BookCard title="Test Book" status="to-read" pdf={pdf} />,
        );
        const anchor = screen.getByRole('link', { name: /open pdf for/i });
        expect(anchor).toHaveAttribute('href', pdf);
        expect(anchor).toHaveAttribute('target', '_blank');
        unmount();
      }),
    );
  });
});

// ---------------------------------------------------------------------------
// Task 4.6 – Property 6: Both link and pdf render as separate anchors
// Feature: bookshelf, Property 6: Both link and pdf render as separate anchors
// Validates: Requirements 3.6
// ---------------------------------------------------------------------------
describe('Property 6: Both link and pdf render as separate anchors', () => {
  it('renders two distinct anchors when both link and pdf are provided', () => {
    fc.assert(
      fc.property(fc.webUrl(), fc.string({ minLength: 1 }), (link, pdf) => {
        const { unmount } = render(
          <BookCard title="Test Book" status="to-read" link={link} pdf={pdf} />,
        );
        const anchors = screen.getAllByRole('link');
        expect(anchors.length).toBeGreaterThanOrEqual(2);

        const hrefs = anchors.map((a) => a.getAttribute('href'));
        expect(hrefs).toContain(link);
        expect(hrefs).toContain(pdf);
        unmount();
      }),
    );
  });
});

// ---------------------------------------------------------------------------
// Task 4.7 – Property 9: Rendering with any pdf path does not throw
// Feature: bookshelf, Property 9: Rendering with any pdf path does not throw
// Validates: Requirements 5.3
// ---------------------------------------------------------------------------
describe('Property 9: Rendering with any pdf path does not throw', () => {
  it('does not throw for any string pdf value', () => {
    fc.assert(
      fc.property(fc.string(), (pdf) => {
        expect(() => {
          const { unmount } = render(
            <BookCard title="Test Book" status="to-read" pdf={pdf} />,
          );
          unmount();
        }).not.toThrow();
      }),
    );
  });
});

// ---------------------------------------------------------------------------
// Task 7.3 – Property 8: Interactive elements carry aria-labels containing the title
// Feature: bookshelf, Property 8: Interactive elements carry aria-labels containing the title
// Validates: Requirements 6.1
// ---------------------------------------------------------------------------
describe('Property 8: Interactive elements carry aria-labels containing the title', () => {
  it('link anchor aria-label contains the book title', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }), fc.webUrl(), (title, link) => {
        const { unmount } = render(
          <BookCard title={title} status="to-read" link={link} />,
        );
        const anchor = screen.getByRole('link');
        const ariaLabel = anchor.getAttribute('aria-label') ?? '';
        expect(ariaLabel).toContain(title);
        unmount();
      }),
    );
  });
});

// ---------------------------------------------------------------------------
// Task 7.4 – Unit test: focus indicators present on interactive elements
// Validates: Requirements 6.3
// ---------------------------------------------------------------------------
describe('Unit: focus indicators present on interactive elements', () => {
  it('link anchor has focus-visible CSS classes', () => {
    render(
      <BookCard
        title="Test Book"
        status="to-read"
        link="https://example.com"
      />,
    );
    const anchor = screen.getByRole('link', { name: /open link for/i });
    expect(anchor.className).toMatch(/focus-visible/);
  });
});
