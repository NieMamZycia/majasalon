"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Podaj imię"),
  email: z.string().email("Podaj poprawny e-mail"),
  phone: z.string().min(9, "Podaj numer telefonu"),
  message: z.string().min(10, "Wiadomość jest za krótka"),
});

export type ContactFormValues = z.infer<typeof schema>;

type ContactFormProps = {
  idPrefix?: string;
  className?: string;
};

export function ContactForm({ idPrefix = "contact", className }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit() {
    reset();
  }

  const id = (field: string) => `${idPrefix}-${field}`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={className}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={id("name")}>Imię</Label>
          <Input
            id={id("name")}
            placeholder="Twoje imię"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor={id("phone")}>Telefon</Label>
          <Input
            id={id("phone")}
            type="tel"
            placeholder="+48 ..."
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <Label htmlFor={id("email")}>E-mail</Label>
        <Input
          id={id("email")}
          type="email"
          placeholder="twoj@email.pl"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>
      <div className="mt-4 space-y-2">
        <Label htmlFor={id("message")}>Wiadomość</Label>
        <Textarea
          id={id("message")}
          rows={4}
          placeholder="Czego dotyczy wizyta?"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>
      <Button type="submit" className="mt-6 w-full sm:w-auto">
        Wyślij wiadomość
      </Button>
      {isSubmitSuccessful && (
        <p className="mt-3 text-sm text-[var(--sage)]" role="status">
          Dziękujemy! Wkrótce się odezwiemy. (Demo — formularz bez backendu)
        </p>
      )}
    </form>
  );
}
