import { cn } from "@/lib/utils";

type SlotTag = "div" | "h1" | "h2" | "h3" | "p" | "span" | "blockquote";

export function CopySlot({
  label,
  as: Tag = "div",
  className,
  tone = "light",
}: {
  label: string;
  as?: SlotTag;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Tag
      className={cn(
        "border border-dashed px-3 py-2",
        tone === "dark"
          ? "border-ivory/30 text-ivory/45"
          : "border-mink/25 text-mink/45",
        className,
      )}
    >
      {label}
    </Tag>
  );
}
