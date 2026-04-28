import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Bookshelf from '@/components/bookshelf';

// ---------------------------------------------------------------------------
// Task 6.2 – Unit test: empty bookshelf placeholder
// Validates: Requirements 1.3
// ---------------------------------------------------------------------------
jest.mock('@/data/bookshelf', () => ({
  BOOKSHELF: [],
}));

describe('Unit: empty bookshelf placeholder', () => {
  it('renders placeholder message when BOOKSHELF is empty', () => {
    render(<Bookshelf />);
    expect(screen.getByText('No books added yet.')).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// Task 6.3 – Unit test: semantic HTML structure
// Validates: Requirements 6.2
// ---------------------------------------------------------------------------
describe('Unit: semantic HTML structure', () => {
  beforeAll(() => {
    // Re-mock with a non-empty array for this suite
    jest.resetModules();
    jest.doMock('@/data/bookshelf', () => ({
      BOOKSHELF: [
        { title: 'Test Book', author: 'Author', status: 'reading' },
      ],
    }));
  });

  it('renders section, ul, and li elements when BOOKSHELF has items', async () => {
    // Dynamically require after re-mocking
    const { default: BookshelfFresh } = await import('@/components/bookshelf');
    const { container } = render(<BookshelfFresh />);

    expect(container.querySelector('section')).toBeInTheDocument();
    expect(container.querySelector('ul')).toBeInTheDocument();
    expect(container.querySelector('li')).toBeInTheDocument();
  });
});
