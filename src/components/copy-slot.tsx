import { cn } from "@/lib/utils";

type SlotTag = "div" | "h1" | "h2" | "h3" | "p" | "span" | "blockquote";

export function CopySlot({
  label,
  as: Tag = "div",
  className,
  tone = "dark",
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
          ? "border-cream/30 text-cream/50"
          : "border-cream/20 text-cream/40",
        className,
      )}
    >
      {label}
    </Tag>
  );
}
