"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";

const fieldFocus =
  "focus-visible:border-[#9BAA94] focus-visible:ring-[#9BAA94]/35";

const interestOptions = [
  { id: "manicure", label: "Manicure" },
  { id: "stylizacja", label: "Stylizacja paznokci" },
  { id: "przedluzanie", label: "Przedłużanie paznokci" },
  { id: "pakiet", label: "Pakiet wizyt" },
  { id: "voucher", label: "Voucher prezentowy" },
] as const;

type ContactFormProps = {
  idPrefix?: string;
  className?: string;
  title?: string;
};

export function ContactForm({
  idPrefix = "contact",
  className,
  title = "Umów wizytę",
}: ContactFormProps) {
  const [banner, setBanner] = useState<
    { type: "ok" | "err"; text: string } | null
  >(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interests: [],
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setBanner(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setBanner({
          type: "err",
          text:
            payload.error ??
            "Nie udało się wysłać formularza. Spróbuj ponownie.",
        });
        return;
      }
      reset();
      setBanner({
        type: "ok",
        text: "Dziękujemy! Wiadomość została wysłana — wkrótce się odezwiemy.",
      });
    } catch {
      setBanner({
        type: "err",
        text: "Brak połączenia z serwerem. Sprawdź internet i spróbuj ponownie.",
      });
    }
  }

  const id = (field: string) => `${idPrefix}-${field}`;

  return (
    <div
      className={`rounded-[20px] bg-[#FDFCFA] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] sm:p-10 ${className ?? ""}`}
    >
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#3D3D3D]">
        {title}
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6"
        noValidate
        onChange={() => {
          if (banner?.type === "ok") setBanner(null);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor={id("name")} className="text-[#4A4A4A]">
              Imię
            </Label>
            <Input
              id={id("name")}
              placeholder="Twoje imię"
              aria-invalid={!!errors.name}
              className={fieldFocus}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor={id("phone")} className="text-[#4A4A4A]">
              Telefon
            </Label>
            <Input
              id={id("phone")}
              type="tel"
              placeholder="+48..."
              aria-invalid={!!errors.phone}
              className={fieldFocus}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <Label htmlFor={id("email")} className="text-[#4A4A4A]">
            E-mail
          </Label>
          <Input
            id={id("email")}
            type="email"
            placeholder="twoj@email.pl"
            aria-invalid={!!errors.email}
            className={fieldFocus}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        <fieldset className="mt-6 space-y-3">
          <legend className="text-sm font-medium text-[#4A4A4A]">
            Czym jesteś zainteresowana?
          </legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {interestOptions.map((opt) => (
              <label
                key={opt.id}
                className="flex cursor-pointer items-center gap-3 rounded-lg py-1"
              >
                <input
                  type="checkbox"
                  value={opt.id}
                  className="peer sr-only"
                  {...register("interests")}
                />
                <span
                  className="flex size-5 shrink-0 items-center justify-center rounded border-2 border-[#9BAA94] bg-white transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#9BAA94]/40 peer-checked:border-[#7D8E74] peer-checked:bg-[#9BAA94] peer-checked:[&_svg]:opacity-100"
                  aria-hidden
                >
                  <Check
                    strokeWidth={3}
                    className="size-3 text-white opacity-0 transition-opacity"
                  />
                </span>
                <span className="text-sm text-[#4A4A4A]">{opt.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-4 space-y-2">
          <Label htmlFor={id("message")} className="text-[#4A4A4A]">
            Wiadomość
          </Label>
          <Textarea
            id={id("message")}
            rows={4}
            placeholder="Dodatkowe informacje, preferowany termin..."
            aria-invalid={!!errors.message}
            className={fieldFocus}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-xs text-destructive">{errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-8 w-full rounded-[25px] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-[filter] duration-200 hover:brightness-[0.95] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          style={{
            background: "linear-gradient(to right, #C9A99A, #9BAA94)",
          }}
        >
          {isSubmitting ? "Wysyłanie…" : "Wyślij zapytanie"}
        </button>
        {banner && (
          <p
            className={
              banner.type === "ok"
                ? "mt-3 text-sm text-[#7D8E74]"
                : "mt-3 text-sm text-destructive"
            }
            role="status"
          >
            {banner.text}
          </p>
        )}
      </form>
    </div>
  );
}

export type { ContactFormValues };
