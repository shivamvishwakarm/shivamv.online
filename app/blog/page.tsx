export const metadata = {
  title: "Blog | Shivam",
  description: "Thoughts, articles, and writing.",
};

export default function BlogPage() {
  return (
    <div className="max-w-auto mx-auto px-4 md:max-w-3xl py-10 ">
      <h2 className="text-xl font-semibold text-neutral-500 md:text-2xl">Blog</h2>
      <div className="flex space-y-2">

        <h6 className="mt-6 text-neutral-400 dark:text-neutral-500 text-sm ">
         {" You caught me 😮‍💨. I'm too lazy to write blogs."}
          <p className="text-amber-200/30 text-[0.8rem] text-right">I promise. My stories are coming...</p>
        </h6>
      </div>
    </div>
  );
}
