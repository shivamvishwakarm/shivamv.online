import { NextResponse } from "next/server";
import { USER } from "@/data/user";

export async function GET() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${USER.firstName} ${USER.lastName}`,
    `N:${USER.lastName};${USER.firstName};;;`,
    `TEL;TYPE=CELL:+91${USER.phoneNumber}`,
    `EMAIL:${USER.email}`,
    `ADR;TYPE=HOME:;;${USER.address};;;;`,
    `TITLE:${USER.jobTitle}`,
    `URL:${USER.website}`,
    `NOTE:Full Stack Web Developer. Find me at ${USER.website}`,
    "END:VCARD",
  ].join("\r\n");

  return new NextResponse(vcard, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${USER.firstName}-${USER.lastName}.vcf"`,
    },
  });
}
