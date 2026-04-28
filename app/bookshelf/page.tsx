import Bookshelf from "@/components/bookshelf";

export const metadata = {
  title: "Bookshelf | Shivam",
  description: "Books and articles I'm reading, have read, or plan to read.",
};

export default function BookshelfPage() {
  return (
    <div className="max-w-auto mx-auto px-4 md:max-w-3xl py-10">
      <Bookshelf />
    </div>
  );
}
