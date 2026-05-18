import { z } from "zod";

export const productCategorySchema = z.enum([
  "source",
  "plugin",
  "template",
  "bundle",
]);

export const productStatusSchema = z.enum(["active", "draft", "mock"]);

export const productSchema = z.object({
  slug: z.string().min(3),
  title: z.string().min(3),
  subtitle: z.string().min(8),
  category: productCategorySchema,
  status: productStatusSchema,
  priceVnd: z.number().int().positive(),
  stack: z.array(z.string()).min(1),
  useCase: z.string().min(8),
  demoUrl: z.string().url(),
  version: z.string().min(1),
  updatedAt: z.string().min(10),
  supportDays: z.number().int().positive(),
  updateMonths: z.number().int().positive(),
  license: z.string().min(8),
  mockNotice: z.string().min(8),
  highlights: z.array(z.string()).min(3),
  requirements: z.array(z.string()).min(2),
  deliverables: z.array(z.string()).min(2),
});

export type Product = z.infer<typeof productSchema>;
export type ProductCategory = z.infer<typeof productCategorySchema>;
