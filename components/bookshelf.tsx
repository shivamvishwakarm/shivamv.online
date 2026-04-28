import React from "react";
import { BOOKSHELF } from "@/data/bookshelf";
import BookCard from "@/components/book-card";

const Bookshelf = () => {
  return (
    <section aria-label="Bookshelf">
      <h2 className="text-xl font-semibold text-neutral-500 md:text-2xl">
        Bookshelf
      </h2>
      {BOOKSHELF.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <ul className="flex flex-col gap-4 mt-4">
          {BOOKSHELF.map((item, i) => (
            <li key={i}>
              <BookCard {...item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Bookshelf;
