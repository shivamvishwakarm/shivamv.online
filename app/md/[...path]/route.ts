import { createDualmarkRouteHandler } from "@dualmark/nextjs";

const handler = createDualmarkRouteHandler({
  siteUrl: "https://shivamv.online",
  staticPages: [
    {
      pattern: "/",
      render: () => `# Shivam | Full Stack Developer

I'm a full stack web developer specializing in React, Node.js, and Next.js. I build scalable web applications and help others learn full-stack development.

## Skills & Expertise

- **Frontend:** React, Next.js, TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express, RESTful APIs, GraphQL
- **Databases:** SQL, MongoDB, Firebase
- **Tools & Platforms:** Git, Docker, AWS, Vercel

## What I Do

I create fast, responsive, and accessible web applications that users love. Whether you need a portfolio site, a web app, or help modernizing your stack, I'm here to help.

## Get In Touch

- **Portfolio:** https://shivamv.online
- **GitHub:** github.com/shivamv
- **Email:** contact@shivamv.online

---

*Last updated May 2026. Built with Next.js and optimized for AI readability via AEO Spec v1.0.*`,
    },
    {
      pattern: "/blog",
      render: () => `# Blog

Thoughts, tutorials, and insights on web development, React, Next.js, and full-stack engineering.

[Return to home](/)`,
    },
    {
      pattern: "/bookshelf",
      render: () => `# Bookshelf

A curated collection of books I'm reading and recommend for developers interested in web development, system design, and software engineering.

[Return to home](/)`,
    },
  ],
});

export const dynamic = "force-dynamic";
export const GET = handler.GET;
export const generateStaticParams = handler.generateStaticParams;
