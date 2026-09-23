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
  const onWine = tone === "dark";

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
          onWine ? "text-cream/80" : "text-burgundy",
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
          onWine
            ? "border-cream/45 text-cream placeholder:text-cream/35"
            : "border-burgundy/40 text-burgundy placeholder:text-burgundy/40",
        )}
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className={cn("wine-fill h-auto w-fit", onWine && "wine-fill-on-wine")}
      >
        {copy.waitlist.cta}
      </Button>
      {status === "error" ? (
        <p className={cn("text-sm", onWine ? "text-cream/80" : "text-burgundy")}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
