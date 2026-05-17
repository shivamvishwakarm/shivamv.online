import { createLlmsTxtHandler } from "@dualmark/nextjs";

const handler = createLlmsTxtHandler({
  brandName: "Shivam",
  description: "Full Stack Developer Portfolio - React, Node.js, Next.js, TypeScript",
  sections: [
    {
      title: "Main Pages",
      links: [
        { title: "Home", href: "https://shivamv.online/" },
        { title: "Blog", href: "https://shivamv.online/blog" },
        { title: "Bookshelf", href: "https://shivamv.online/bookshelf" },
      ],
    },
    {
      title: "Projects & Work",
      links: [
        { title: "View all projects", href: "https://shivamv.online/" },
      ],
    },
    {
      title: "Connect",
      links: [
        { title: "GitHub", href: "https://github.com/shivamv" },
        { title: "Twitter/X", href: "https://twitter.com/shivamv" },
        { title: "LinkedIn", href: "https://linkedin.com/in/shivamv" },
      ],
    },
  ],
});

export const dynamic = "force-static";
export const GET = handler.GET;
