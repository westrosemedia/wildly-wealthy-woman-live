import { permanentRedirect } from "next/navigation";

const wixEventPage = "https://www.jackiemcdonald.ca/wildly-wealthy-woman-live";

export default function Page() {
  permanentRedirect(wixEventPage);
}
