import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-xl font-semibold">
              BASE STUDIO
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {SITE.tagline}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Kontakt</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--coral)]" />
                <span>
                  {SITE.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0 text-[var(--coral)]" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.mailtoHref}
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <Mail className="size-4 shrink-0 text-[var(--coral)]" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Social media</p>
            <SocialLinks size="lg" className="mt-6 justify-start" />
            <ul className="mt-8 space-y-1 text-sm">
              <li>
                <Link href="/cennik" className="text-muted-foreground hover:text-foreground">
                  Cennik
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-muted-foreground hover:text-foreground">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-foreground">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} BASE STUDIO. Wszystkie prawa zastrzeżone.
        </p>
        <p className="footer-credit">
          Designed by{" "}
          <a
            href="https://mmn-agency.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            MMN Agency
          </a>
        </p>
      </div>
    </footer>
  );
}
