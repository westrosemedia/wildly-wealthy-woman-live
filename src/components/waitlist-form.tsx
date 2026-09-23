"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const onDark = tone === "dark";

  useEffect(() => {
    if (window.location.hash !== "#waitlist") return;
    document.getElementById("waitlist-email")?.focus();
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
        }),
      });
      const payload = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Error");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Error");
    }
  }

  if (status === "success") {
    return (
      <p
        className={cn(
          "text-sm tracking-[0.18em] uppercase",
          onDark ? "text-cream/70" : "text-burgundy",
        )}
      >
        ✓
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-xl flex-col items-stretch gap-8"
    >
      <Input
        required
        type="email"
        name="email"
        id="waitlist-email"
        aria-label="Email"
        className={cn(
          "field-line h-12 w-full rounded-none px-0 text-base shadow-none focus-visible:ring-0",
          onDark
            ? "border-cream/40 text-cream placeholder:text-cream/30"
            : "border-burgundy/35 text-chocolate placeholder:text-burgundy/40",
        )}
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "quiet-link h-auto w-fit rounded-none bg-transparent px-0 py-0 text-[13px] font-normal shadow-none hover:bg-transparent",
          onDark
            ? "text-cream hover:text-cream"
            : "text-chocolate hover:text-chocolate",
        )}
      >
        {copy.waitlist.cta}
      </Button>
      {status === "error" ? (
        <p className={cn("text-sm", onDark ? "text-cream/80" : "text-burgundy")}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
