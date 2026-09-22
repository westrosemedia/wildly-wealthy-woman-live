"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

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
          name: data.get("name"),
          email: data.get("email"),
          city: data.get("city"),
        }),
      });
      const payload = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold/40 bg-burgundy/30 px-6 py-8 text-center">
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
          You are on the list
        </p>
        <p className="font-heading mt-3 text-3xl text-cream">
          The next city will find you first.
        </p>
        <p className="mt-3 text-sm text-cream/70">
          Watch your inbox for dates, ticket links, and the private venue note.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-3"}>
        <label className="block">
          <span className="mb-2 block text-[10px] tracking-[0.24em] text-champagne uppercase">
            Name
          </span>
          <Input
            required
            name="name"
            placeholder="Your name"
            className="h-12 rounded-none border-gold/30 bg-transparent px-4 text-cream placeholder:text-cream/35"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-[10px] tracking-[0.24em] text-champagne uppercase">
            Email
          </span>
          <Input
            required
            type="email"
            name="email"
            placeholder="you@email.com"
            className="h-12 rounded-none border-gold/30 bg-transparent px-4 text-cream placeholder:text-cream/35"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-[10px] tracking-[0.24em] text-champagne uppercase">
            City you want
          </span>
          <Input
            name="city"
            placeholder="Phoenix, Vancouver…"
            className="h-12 rounded-none border-gold/30 bg-transparent px-4 text-cream placeholder:text-cream/35"
          />
        </label>
      </div>
      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-12 w-full rounded-none bg-gold text-[11px] tracking-[0.28em] text-ink uppercase hover:bg-champagne md:w-auto md:px-10"
      >
        {status === "loading" ? "Holding your seat…" : "Join the waitlist"}
      </Button>
      {status === "error" ? (
        <p className="text-sm text-rose">{message}</p>
      ) : (
        <p className="text-xs leading-relaxed text-cream/50">
          No spam. Cities, dates, and ticket links only.
        </p>
      )}
    </form>
  );
}
