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
      <div className="border border-mink/25 bg-snow px-6 py-8">
        <p className="text-sm text-mink">✓</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-2"}>
        <Input
          required
          name="name"
          aria-label="Name"
          className="h-12 rounded-none border-mink/25 bg-ivory px-4 text-chocolate"
        />
        <Input
          required
          type="email"
          name="email"
          aria-label="Email"
          className="h-12 rounded-none border-mink/25 bg-ivory px-4 text-chocolate"
        />
      </div>
      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-12 rounded-none bg-lip px-10 text-[11px] tracking-[0.28em] text-ivory uppercase hover:bg-chocolate"
      >
        →
      </Button>
      {status === "error" ? (
        <p className="text-sm text-lip">{message}</p>
      ) : null}
    </form>
  );
}
