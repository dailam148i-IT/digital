import { products } from "./products";
import type { Product, ProductCategory } from "./schema";

export const categoryLabels: Record<ProductCategory, string> = {
  bundle: "Bundle",
  plugin: "Plugin",
  source: "Source",
  template: "Template",
};

export function getProducts() {
  return [...products].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export function getFeaturedProducts() {
  return getProducts().slice(0, 4);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product) {
  return products
    .filter((candidate) => candidate.slug !== product.slug)
    .filter((candidate) => candidate.category === product.category)
    .slice(0, 3);
}

export function getCatalogStats() {
  const categoryCount = new Set(products.map((product) => product.category)).size;

  return {
    categoryCount,
    productCount: products.length,
    updateMonths: 12,
  };
}
