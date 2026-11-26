export function MediaSlot({
  kind,
  label,
}: {
  kind: "photo" | "video";
  label: string;
}) {
  return (
    <div className={kind === "video" ? "media-slot is-video" : "media-slot"}>
      <p>
        <strong>{kind === "video" ? "Video coming" : "Photo coming"}</strong>
        <span>{label}</span>
      </p>
    </div>
  );
}
