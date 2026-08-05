import Envelope from "@/components/icons/envelope";
import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";
import Twitter from "@/components/icons/twitter";



export const USER = {
    firstName: "Shivam",
    lastName: "Vishwakarma",
    email: "admin@shivam09.tech",
    phoneNumber: "8797107072",
    address: "Bihar, India",
    currentLocation: "Bengaluru, India",
    socialUserName: {
        Github: "shivamvishwakarm",
        Linkedin: "shivamvisss",
        Twitter: "shivam_visss"
    },
    website: "https://shivamv.online",
    socialLinks: [
        {

            name: "Github",
            url: "https://github.com/shivamvishwakarm",
            icon: Github
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/shivamvisss/",
            icon: Linkedin
        },
        {
            name: "Twitter",
            url: "https://x.com/shivam_visss",
            icon: Twitter

        },
        {
            name: "Mail",
            url: "mailto:admin@shivam09.tech",
            icon: Envelope
        }

    ],
    jobTitle: "Full Stack Web Developer",
    job: [
        {
            company: "Advayu",
            position: "Full Stack Developer",
            description: [
                "Shape the entire frontend using Next.js, TypeScript, Redux, Tailwind CSS, Framer motion and TanStack Query.",
                "Integrated APIs and added real-time features for a fast and responsive site.",
                "Wrote unit, integration, and end-to-end tests using Jest, Cypress, and Storybook.",
                "Collaborated with backend and design teams to deliver maintainable and high-quality systems."
            ],
            start: "SEP 2024",
            end: "OCT 2025",
            location: "Bengalore, India (remote)",

            website: "https://www.advayu.club",
            logo: "/logo/company/advayu.png"
        },
        {
            company: "Freelance",
            position: "Full Stack Developer",
            description: [
                "Completed 4 full-stack projects for clients on time using React, Next.js, Node.js, and MongoDB.",
                "Built custom features, APIs, and user interfaces with a focus on clean, maintainable code.",
                "Ensured all projects were mobile-friendly and responsive.",
                "Handled both frontend and backend development to deliver complete solutions."
            ],
            start: "DEC 2022",
            end: "SEP 2024",
            location: "Bihar, India (remote)",


        }
    ],
    about: `I build things that excite me — usually by chasing ideas that spark curiosity or help me learn something new.

Most of the time, I recreate things that already exist — not to copy, but to understand how and why they work. It’s my way of learning deeply and sharpening how I think.

I don’t just code — I explore. I talk to builders, dive into their perspectives, and try to see problems from all angles. Whether I’m building solo or with a team, I care about why we’re doing something just as much as how.

I say: “Curiosity can make you great.”
And I try to prove that with every project I take on.`,
    shortBio: `Build fast, Break fast, Learn fast`,
    keywords: "shivam vishwakarma, shivamvisss, shivam09, 09shivam, shivam_visss ",
    projects: [

        {
            name: "Groww - Trading platform",
            description: "A mock Payment Gateway for testing purposes",
            url: "https://groww.shivam09.tech",
            github: "https://github.com/shivamvishwakarm/mini-groww-be",

            techStack: ["Node.js", "Express", "MongoDB", "Socket.io", "React", "Vite"]
        },
        {
            name: "Mock Payment Gateway",
            description: "A mock Payment Gateway for testing purposes",
            url: "https://github.com/shivamvishwakarm/payment-gateway",
            github: "https://github.com/shivamvishwakarm/payment-gateway",
            techStack: ["Node.js", "Express", "MongoDB", "React", "Monorepo"]
        },


        {
            name: "Snake and Ladder",
            description: "A websocket package for snake and ladder game",
            url: "https://www.npmjs.com/package/snake-ladder-ws",
            github: "https://github.com/shivamvishwakarm/snake_ladder_ws",
            techStack: ["Node.js", "WebSocket", "TypeScript"]
        }
    ],

    PR: [
        {
            title: "Blog Schedule with DLQ (backend)",
            link: "https://github.com/the-monkeys/monkeys_engine/pull/354"
        },
        {
            title: "Blog Schedule with timezone, date and time (frontend)",
            link: "https://github.com/the-monkeys/the_monkeys/pull/507",
        },


        {
            title: "Docker setup + GitHub Actions to push Image to GHCR ",
            link: "https://github.com/the-monkeys/the_monkeys/pull/482"
        },
        {
            title: "Fix: blog author permission via ip validation",
            link: "https://github.com/the-monkeys/monkeys_engine/pull/333"
        },
        {
            title: "Custom code block plugin of editor.js",
            link: "https://github.com/the-monkeys/the_monkeys/pull/455"
        },
        {
            title: "Custom embed block for editor.js",
            link: "https://github.com/the-monkeys/the_monkeys/pull/463"
        },
    ]

}