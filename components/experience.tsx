import React from "react";
import { USER } from "@/data/user";
import Image from "next/image";
import { ArrowUpRight, Dot } from "lucide-react";
import Link from "next/link";

const Experience = () => {
  return (
    <div className="mt-8 mb-4 py-1 md:mt-2">
      <h2 className="mb-3 text-xl font-semibold text-neutral-500 md:text-2xl">
        Work{" "}
      </h2>
      <div className="flex w-full flex-col gap-4">
        {USER.job.map((job, index) => (
          <div
            key={index}
            className="flex flex-col justify-between gap-2 md:flex-row"
          >
            <div>
              <div className="flex items-center gap-2">
                {job.logo ? (
                  <Image
                    src={job.logo || ""}
                    alt={job.company}
                    width={32}
                    height={32}
                    className="border-muted-foreground rounded-full border border-dashed p-0.5"
                  />
                ) : (
                  <Dot className="border-muted-foreground rounded-full border border-dashed dark:text-white" />
                )}

                <Link href={job.website || "#"} className="flex flex-row items-center">
                  <p className="text-2xl font-semibold dark:text-white">
                    {job.company}
                  </p>

                  <ArrowUpRight size={16} className="text-neutral-500" />
                </Link>
              </div>
              <div>
                <p className="text-muted-foreground ml-8 font-medium">
                  {job.position}
                </p>
              </div>
            </div>

            {/* time */}
            <div className="ml-8 flex flex-col-reverse items-start md:flex-col">
              <div className="text-muted-foreground flex flex-row items-center justify-end w-full gap-2 text-sm">
                <p>{job.start}</p>-<p>{job.end}</p>
              </div>
              <div className="dark:text-neutral-200">{job.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
