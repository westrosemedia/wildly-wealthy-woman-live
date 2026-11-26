import Image from "next/image";
import Link from "next/link";
import { nav, org } from "@/lib/copy";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Image
            className="footer-logo"
            src="/brand/logo-dark.png"
            alt="Okotoks Pride"
            width={1200}
            height={492}
          />
          <p>
            {org.legalName}
            <br />
            Corporate access number {org.corporateAccessNumber}
          </p>
          <p className="fine">
            <a href={`mailto:${org.email}`}>{org.email}</a>
          </p>
        </div>
        <nav aria-label="Footer">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="fine">
          Okotoks Pride Collective acknowledges the original stewards of this
          land, Treaty 7 Territory.{" "}
          <Link href="/#acknowledgement">Read the full acknowledgement</Link>.
        </p>
      </div>
    </footer>
  );
}
