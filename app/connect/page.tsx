import { Metadata } from "next";
import Link from "next/link";
import { Globe, Phone, MapPin, UserPlus, User } from "lucide-react";
import { USER } from "@/data/user";
import { SocialCard } from "@/components/social-card";

export const metadata: Metadata = {
  title: "Connect | Shivam",
  description: "Connect with Shivam on GitHub, LinkedIn, Twitter, and more.",
};

export default function ConnectPage() {
  const allCards = [
    ...USER.socialLinks.map((link, i) => ({
      name: link.name,
      url: link.url,
      icon: <link.icon className="w-6 h-6" />,
      delay: i * 0.08,
    })),
    {
      name: "Save Contact",
      url: "/api/contact",
      icon: <UserPlus className="w-6 h-6" />,
      delay: USER.socialLinks.length * 0.08,
    },
    {
      name: "Phone",
      url: `tel:+91${USER.phoneNumber}`,
      icon: <Phone className="w-6 h-6" />,
      delay: (USER.socialLinks.length + 1) * 0.08,
    },
    {
      name: "Portfolio",
      url: USER.website,
      icon: <Globe className="w-6 h-6" />,
      delay: (USER.socialLinks.length + 2) * 0.08,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16">
      {/* Header */}
      <div className="max-w-sm w-full space-y-1">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          {USER.firstName} {USER.lastName}
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {USER.jobTitle}
        </p>
        <p className="flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500 pt-0.5">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          {USER.currentLocation}
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-sm w-full mt-6 space-y-3">
        {allCards.map((card) => (
          <SocialCard
            key={card.name}
            name={card.name}
            url={card.url}
            icon={card.icon}
            delay={card.delay}
          />
        ))}
      </div>

      <Link
        href={USER.website}
        className="mt-8 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-150"
      >
        Visit portfolio →
      </Link>
    </main>
  );
}
