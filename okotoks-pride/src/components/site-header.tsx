"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/copy";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="stripes" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="wrap header-bar">
        <Link href="/" className="brand">
          <Image
            src="/brand/logo-light.png"
            alt="Okotoks Pride, since 2024"
            width={1200}
            height={503}
            priority
            style={{ width: "auto", height: "58px" }}
          />
        </Link>
        <nav className="nav-desktop" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button header-cta">
          Contact us
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <div className="wrap">
        <nav
          id="mobile-nav"
          className="nav-mobile"
          aria-label="Primary"
          hidden={!open}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
