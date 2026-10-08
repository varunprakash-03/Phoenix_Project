"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(pathname !== "/"),
    [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(pathname !== "/" || window.scrollY > 30);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, [pathname]);
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Products", "/products"],
    ["Contact", "/contact"],
  ];
  const isCurrent = (href: string) =>
    pathname === href || (href === "/products" && pathname.startsWith("/products/"));
  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <Link className="brand" href="/" aria-label="Phoenix home">
        <span>PHOENIX</span>
        <small>LABELS · STICKERS · PRINTING</small>
      </Link>
      <nav className="desktop-nav">
        {links.map(([n, h]) => (
          <Link key={n} href={h} aria-current={isCurrent(h) ? "page" : undefined}>
            {n}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" href="/contact">
        Let’s Talk <ArrowUpRight size={15} />
      </Link>
      <button
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav className="mobile-nav">
          {links.map(([n, h]) => (
            <Link key={n} href={h} aria-current={isCurrent(h) ? "page" : undefined} onClick={() => setOpen(false)}>
              {n}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            Let’s Talk ↗
          </Link>
        </nav>
      )}
    </header>
  );
}
