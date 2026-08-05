import { NextResponse } from "next/server";
import { USER } from "@/data/user";

/**
 * Sanitize a string for vCard format: strip control characters that could
 * cause injection, escape commas/semicolons/backslashes per RFC 6350.
 */
const sanitize = (value: string): string =>
  value
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // strip control chars
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");

export async function GET() {
  const lines: string[] = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${sanitize(USER.lastName)};${sanitize(USER.firstName)};;;`,
    `FN:${sanitize(USER.firstName)} ${sanitize(USER.lastName)}`,
    `TITLE:${sanitize(USER.jobTitle)}`,
    `TEL;TYPE=CELL:+91${sanitize(USER.phoneNumber)}`,
    `EMAIL;TYPE=INTERNET:${sanitize(USER.email)}`,
    `ADR;TYPE=HOME:;;${sanitize(USER.address)};;;;`,
    `URL:https://shivamv.online`,
  ];

  // Add each social link as X-SOCIALPROFILE
  for (const link of USER.socialLinks) {
    if (!link.url.startsWith("mailto:") && !link.url.startsWith("tel:")) {
      lines.push(`X-SOCIALPROFILE;TYPE=${sanitize(link.name)}:${sanitize(link.url)}`);
    }
  }

  lines.push("END:VCARD");

  const vcard = lines.join("\r\n");

  return new NextResponse(vcard, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${USER.firstName}-${USER.lastName}.vcf"`,
    },
  });
}
