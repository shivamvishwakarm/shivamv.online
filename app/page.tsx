import ProfileImage from "@/components/Profile";
import Socials from "@/components/socials";
import { USER } from "@/data/user";
import PRCard from "@/components/cards/pr-card";
import { GitHubContributions } from "@/components/ui/contribution-graph/contribute";
import Link from "next/link";
import { FileText } from "lucide-react";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import { SimpleTooltip } from "@/components/ui/tooltip";
import PortfolioGallery from "@/components/portfolio-gallery";

export default function Home() {
  return (
    <div className="w-full">
      <div className="">
        <div className="grid w-full grid-cols-[auto_1fr] gap-4 pt-10 sm:pt-12 md:pt-16 md:items-center">
          <ProfileImage />
          <div className="min-w-0 text-right">
            <h1 className="text-[clamp(1.45rem,6vw,3.4rem)] font-bold leading-tight dark:text-white">
              {USER.firstName} {USER.lastName}
            </h1>
            <p
              style={{ fontFamily: "var(--font-caveat)" }}
              className="mt-1 text-[clamp(1.35rem,4.6vw,3rem)] leading-none text-neutral-500"
            >
              - {USER.jobTitle}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 md:w-full">
          <Socials />
          <SimpleTooltip key={"Resume-btn"} content={"Resume"} side="bottom" >
            <Link
              target="_blank"
              href={"/2yr_shivam.pdf"}
              className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-background btn-inner-shadow hover:bg-accent dark:border-input dark:hover:bg-input/50 inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md border-black bg-[#737373] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 dark:bg-[#737373] dark:text-black [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            >
              <FileText className="size-4 md:size-5" />
              Resume
            </Link>
          </SimpleTooltip>
        </div>

        {/* <div className="mt-8 flex flex-col  ">
          <h3 className="mb-3 text-xl font-semibold text-neutral-500 ">
            Open source
          </h3>
          <div className="flex flex-col gap-2">
            {USER.PR.map((pr, index) => (
              <PRCard key={index} {...pr} />
            ))}
          </div>
          <div className="mx-auto -mt-2">
            <Link
              target="_blank"
              className="rounded-lg bg-neutral-100 px-3 py-1 text-neutral-500 shadow-neutral-800 dark:bg-[#1d1d1d] dark:text-neutral-100 dark:shadow-md"
              href="https://github.com/pulls?q=is%3Apr+author%3Ashivamvishwakarm+archived%3Afalse+is%3Aclosed"
            >
              see more
            </Link>
          </div>
        </div> */}


        <Experience />
        <Projects />
        <PortfolioGallery />
        <div className="mt-8">
          <GitHubContributions />
        </div>
      </div>
    </div>
  );
}
