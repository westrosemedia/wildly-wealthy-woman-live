import type { Metadata } from "next";

import { CopySlot } from "@/components/copy-slot";
import { PageIntro } from "@/components/page-intro";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Connect",
};

export default function ConnectPage() {
  return (
    <>
      <PageIntro titleSlot="H1" />

      <section className="mx-auto max-w-[92rem] px-5 pt-6 pb-20 md:px-10">
        <div className="border border-mink/20 bg-snow px-6 py-10 md:max-w-2xl md:px-10">
          <CopySlot label="H2" as="h2" className="font-heading mb-8 text-4xl" />
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
