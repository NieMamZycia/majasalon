"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { MotionReveal } from "@/components/motion-reveal";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ServiceDetailProps = {
  title: string;
  intro: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
};

export function ServiceDetail({
  title,
  intro,
  paragraphs,
  image,
  imageAlt,
}: ServiceDetailProps) {
  return (
    <>
      <section className="relative min-h-[45vh]">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-4 pb-12 pt-32 sm:px-6 lg:px-8">
          <MotionReveal>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>
          </MotionReveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div>
          {paragraphs.map((p, i) => (
            <MotionReveal key={i} delay={i * 0.06}>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">{p}</p>
            </MotionReveal>
          ))}
        </div>
        <MotionReveal className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/kontakt" className={cn(buttonVariants({ size: "lg" }))}>
            Umów wizytę
          </Link>
          <a
            href={SITE.phoneHref}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            <Phone className="size-4" />
            {SITE.phone}
          </a>
          <Link
            href="/cennik"
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
          >
            Cennik
          </Link>
        </MotionReveal>
      </section>
    </>
  );
}
