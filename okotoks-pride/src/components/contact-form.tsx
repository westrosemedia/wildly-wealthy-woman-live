"use client";

import { FormEvent, useState } from "react";
import { org } from "@/lib/copy";

type Errors = {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
};

const topics = ["Hello", "Events", "Resources", "Something else"];

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const topic = String(data.get("topic") || "").trim();
    const message = String(data.get("message") || "").trim();
    const nextErrors: Errors = {};

    if (name.length < 2) nextErrors.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please add a real email address.";
    }
    if (!topics.includes(topic)) nextErrors.topic = "Please choose a topic.";
    if (message.length < 10) {
      nextErrors.message = "Please write at least a short note.";
    }

    setErrors(nextErrors);
    setSent(false);
    if (Object.keys(nextErrors).length > 0) return;

    const href = `mailto:${org.email}?subject=${encodeURIComponent(
      `Okotoks Pride website: ${topic}`,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name}\n${email}`)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label>
        Name
        <input name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} />
        {errors.name ? <span className="error">{errors.name}</span> : null}
      </label>
      <label>
        Email
        <input
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? <span className="error">{errors.email}</span> : null}
      </label>
      <label>
        Topic
        <select name="topic" defaultValue="" aria-invalid={Boolean(errors.topic)}>
          <option value="" disabled>
            Choose one
          </option>
          {topics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
        {errors.topic ? <span className="error">{errors.topic}</span> : null}
      </label>
      <label>
        Message
        <textarea name="message" aria-invalid={Boolean(errors.message)} />
        {errors.message ? <span className="error">{errors.message}</span> : null}
      </label>
      <button className="button" type="submit">
        Email {org.email}
      </button>
      {sent ? (
        <p className="success" role="status">
          Your email app should open with this note addressed to {org.email}.
          This page does not store messages. If nothing opens, send it there
          yourself.
        </p>
      ) : (
        <p>
          The form checks your note, then opens an email to {org.email}. Nothing
          is saved on the website.
        </p>
      )}
    </form>
  );
}
