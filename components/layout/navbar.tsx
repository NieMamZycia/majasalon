"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

const links = [
  { href: "/", label: "Start" },
  { href: "/#o-nas", label: "O nas" },
  { href: "/#uslugi", label: "Usługi" },
  { href: "/galeria", label: "Galeria" },
  { href: "/cennik", label: "Cennik" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-xl font-semibold tracking-tight text-foreground"
        >
          BASE STUDIO
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="gradient-btn-shift hidden items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-[var(--studio-text)] shadow-md shadow-[var(--coral)]/20 transition-shadow hover:shadow-lg sm:inline-flex"
          >
            <Phone className="size-3.5" />
            Zadzwoń
          </a>
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <div
        className={`border-t border-border md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="gradient-btn-shift mt-2 flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-[var(--studio-text)] shadow-md"
          >
            <Phone className="size-4" />
            {SITE.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
