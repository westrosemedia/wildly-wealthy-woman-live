"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
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
      <p className="text-sm tracking-[0.2em] text-cream/70 uppercase">✓</p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
    >
      <Input
        required
        type="email"
        name="email"
        aria-label="Email"
        className="h-12 flex-1 rounded-none border-cream/25 bg-cream/5 px-4 text-cream placeholder:text-cream/30"
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-12 rounded-none bg-lip px-8 text-[11px] tracking-[0.28em] text-cream uppercase hover:bg-rose"
      >
        →
      </Button>
      {status === "error" ? (
        <p className="text-sm text-cream/80 sm:hidden">{message}</p>
      ) : null}
    </form>
  );
}
