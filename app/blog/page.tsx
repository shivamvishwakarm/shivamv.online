import Socials from "@/components/socials";

export const metadata = {
  title: "Blog | Shivam",
  description: "Thoughts, articles, and writing.",
};

export default function BlogPage() {
  return (
    <div className="max-w-auto mx-auto px-4 md:max-w-3xl py-10">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-2xl">
        Blog
      </h2>

      <p className="mt-6 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
        I don't write enough.<br />
        But when I do, it'll be worth reading.
      </p>

      <div className="my-8 h-px bg-gradient-to-r from-neutral-300 to-transparent dark:from-neutral-700" />

      <div className="space-y-6">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          No posts yet
        </p>

        <div>
          <p className="text-neutral-500 dark:text-neutral-500 text-sm font-medium mb-4">
            Follow along
          </p>
          <Socials />
        </div>
      </div>
    </div>
  );
}
