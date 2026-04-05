import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Podaj imię"),
  email: z.string().email("Podaj poprawny e-mail"),
  phone: z.string().min(9, "Podaj numer telefonu"),
  interests: z.array(z.string()).optional(),
  message: z.string().min(10, "Wiadomość jest za krótka"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
