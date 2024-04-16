import { z } from "zod";

export const Document = z.object({
  id: z.string(),
  expedient: z.string(),
  type: z.union([z.literal("PROFESSIONAL"), z.literal("PATIENT")]),
  url: z.string(),
});
export type Document = z.infer<typeof Document>;

export const ActiveIngredient = z.object({
  id: z.string(),
  name: z.string(),
});
export type ActiveIngredient = z.infer<typeof ActiveIngredient>;

export const Medication = z.object({
  id: z.string(),
  name: z.string(),
  published_at: z.string(),
  company: z.string(),
  documents: z.array(Document),
  active_principles: z.array(ActiveIngredient),
});
export type Medication = z.infer<typeof Medication>;
