export const designConfig = {
  cardRadiusPx: 8,
  catalogColumns: {
    desktop: 3,
    mobile: 1,
    tablet: 2,
  },
  colors: {
    amber: "#b45309",
    background: "#f6f8fb",
    blue: "#2563eb",
    foreground: "#111827",
    ink: "#0b1020",
    line: "#d8e0ea",
    surface: "#ffffff",
    surfaceStrong: "#eef2f7",
    teal: "#0f766e",
  },
  iconPolicy: {
    decorative: "aria-hidden",
    library: "lucide-react",
    noEmoji: true,
  },
  productCard: {
    requiredFields: [
      "category",
      "price",
      "stack",
      "license",
      "support",
      "update",
      "demo",
      "mockNotice",
    ],
    visualPreview: true,
  },
} as const;
