import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/contact-schema";
import { SITE } from "@/lib/constants";

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe żądanie" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Sprawdź poprawność pól formularza." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO?.trim() || SITE.email;
  const from = process.env.CONTACT_FROM?.trim() || SITE.email;

  if (!apiKey) {
    console.error("contact API: brak RESEND_API_KEY");
    return NextResponse.json(
      { error: "Formularz chwilowo niedostępny. Zadzwoń lub napisz bezpośrednio" },
      { status: 503 },
    );
  }

  const { name, email, phone, interests, message } = parsed.data;
  const interestsText =
    interests && interests.length > 0 ? interests.join(", ") : "—";

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    interests: escapeHtml(interestsText),
    message: escapeHtml(message).replace(/\n/g, "<br/>"),
  };

  const html = `
    <p><strong>Imię:</strong> ${safe.name}</p>
    <p><strong>E-mail:</strong> ${safe.email}</p>
    <p><strong>Telefon:</strong> ${safe.phone}</p>
    <p><strong>Zainteresowania:</strong> ${safe.interests}</p>
    <p><strong>Wiadomość:</strong><br/>${safe.message}</p>
  `;

  const text = [
    `Imię: ${name}`,
    `E-mail: ${email}`,
    `Telefon: ${phone}`,
    `Zainteresowania: ${interestsText}`,
    "",
    message,
  ].join("\n");

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[BASE STUDIO] Zapytanie od ${name}`,
    html,
    text,
  });

  if (error) {
    console.error("Resend:", error);
    return NextResponse.json(
      { error: "Nie udało się wysłać wiadomości. Spróbuj za chwilę lub zadzwoń." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
