export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  gallery: string[];
  keywords: string[];
  featured?: boolean;
};
export const categories = [
  "All",
  "Stickers & Prints",
  "Labels",
  "Garment Branding",
  "Embroidery",
  "Accessories",
];
export const products: Product[] = [
  {
    slug: "tpu-stickers",
    name: "TPU Stickers",
    category: "Stickers & Prints",
    summary: "A dimensional identity detail from the Phoenix collection.",
    description:
      "TPU Stickers are featured in the Phoenix catalogue as one of its garment branding and print offerings. Share your artwork and intended application with Phoenix to discuss a customized requirement.",
    image: "/images/catalogue/p04-1.webp",
    gallery: [
      "/images/catalogue/p04-2.webp",
      "/images/catalogue/p04-3.webp",
      "/images/catalogue/p04-4.webp",
    ],
    keywords: ["transfer", "sticker", "branding"],
    featured: true,
  },
  {
    slug: "hd-stickers",
    name: "HD Stickers",
    category: "Stickers & Prints",
    summary: "A distinct graphic treatment for garment identity.",
    description:
      "HD Stickers appear in the Phoenix product catalogue. Contact Phoenix with your design reference and application to discuss a tailored version.",
    image: "/images/catalogue/p05-1.webp",
    gallery: ["/images/catalogue/p05-2.webp"],
    keywords: ["high definition", "sticker", "print"],
    featured: true,
  },
  {
    slug: "3d-hd-stickers",
    name: "3D HD Stickers",
    category: "Stickers & Prints",
    summary: "A dimensional sticker treatment shown in the collection.",
    description:
      "The catalogue features 3D HD Stickers among Phoenix’s print and branding products. Share your concept with Phoenix to discuss customization.",
    image: "/images/catalogue/p15-2.webp",
    gallery: ["/images/catalogue/p15-3.webp"],
    keywords: ["3d", "sticker", "print"],
    featured: true,
  },
  {
    slug: "silicone-print",
    name: "Silicone Print",
    category: "Stickers & Prints",
    summary: "A tactile print treatment from the Phoenix catalogue.",
    description:
      "Silicone Print is presented in the Phoenix catalogue. Contact the team with a visual reference to discuss your requirement.",
    image: "/images/catalogue/p06-1.webp",
    gallery: ["/images/catalogue/p06-2.webp", "/images/catalogue/p06-3.webp"],
    keywords: ["silicone", "print"],
    featured: true,
  },
  {
    slug: "vinyl-prints",
    name: "Vinyl Prints",
    category: "Stickers & Prints",
    summary: "A printed finish for expressive garment graphics.",
    description:
      "Vinyl Prints are included in the supplied product brief and Phoenix catalogue range. Phoenix invites customized design enquiries; share your artwork and intended application.",
    image: "/images/catalogue/p08-1.webp",
    gallery: ["/images/catalogue/p08-2.webp"],
    keywords: ["vinyl", "print"],
  },
  {
    slug: "dtf-digital-print",
    name: "D.T.F. Digital Print",
    category: "Stickers & Prints",
    summary: "Digital print options for your brand identity.",
    description:
      "D.T.F. Digital Print is named in the Phoenix product brief. Discuss your design and requirements directly with Phoenix.",
    image: "/images/catalogue/p12-1.webp",
    gallery: ["/images/catalogue/p12-2.webp", "/images/catalogue/p12-3.webp"],
    keywords: ["dtf", "digital", "print"],
  },
  {
    slug: "crack-prints",
    name: "Crack Prints",
    category: "Stickers & Prints",
    summary: "A graphic print treatment in the Phoenix range.",
    description:
      "Crack Prints are listed among Phoenix’s print options. For a product enquiry, share a reference and your intended use.",
    image: "/images/catalogue/p23-2.webp",
    gallery: ["/images/catalogue/p23-3.webp"],
    keywords: ["crack", "print"],
  },
  {
    slug: "flock-print",
    name: "Flock Print",
    category: "Stickers & Prints",
    summary: "A textured print presentation from the collection.",
    description:
      "Flock Print is featured by name in Phoenix’s catalogue. Contact Phoenix to discuss a personalized design requirement.",
    image: "/images/catalogue/p24-1.webp",
    gallery: ["/images/catalogue/p24-2.webp"],
    keywords: ["flock", "print"],
    featured: true,
  },
  {
    slug: "puff-prints",
    name: "Puff Prints",
    category: "Stickers & Prints",
    summary: "A raised print look shown in the product catalogue.",
    description:
      "Puff Prints are presented in the Phoenix catalogue. The team can discuss your design reference and customization requirement.",
    image: "/images/catalogue/p21-1.webp",
    gallery: ["/images/catalogue/p21-2.webp", "/images/catalogue/p21-3.webp"],
    keywords: ["puff", "print"],
  },
  {
    slug: "tooth-pick",
    name: "Tooth Pick",
    category: "Accessories",
    summary: "A garment accessory listed in the Phoenix range.",
    description:
      "Tooth Pick is listed among the garment accessories in Phoenix’s product brief. Contact Phoenix to discuss the item and your requirement.",
    image: "/images/catalogue/p22-2.webp",
    gallery: ["/images/catalogue/p22-3.webp", "/images/catalogue/p22-4.webp"],
    keywords: ["tooth pick", "accessory"],
  },
  {
    slug: "tuft-embroidery-sticker",
    name: "Tuft Embroidery Sticker",
    category: "Embroidery",
    summary: "An embroidered identity detail from the catalogue.",
    description:
      "Tuft Embroidery Sticker is featured in the Phoenix catalogue. Share your design and intended application to discuss customization.",
    image: "/images/catalogue/p07-3.webp",
    gallery: ["/images/catalogue/p07-4.webp"],
    keywords: ["tuft", "embroidery", "sticker"],
    featured: true,
  },
  {
    slug: "lenticular-patches",
    name: "Lenticular Patches",
    category: "Garment Branding",
    summary: "An eye-catching patch treatment in the Phoenix range.",
    description:
      "Lenticular Patches are included in the Phoenix product brief. Contact Phoenix to discuss your concept and desired application.",
    image: "/images/catalogue/p14-3.webp",
    gallery: ["/images/catalogue/p14-4.webp"],
    keywords: ["lenticular", "patch"],
  },
  {
    slug: "mesh-reflecting-prints",
    name: "Mesh Print & Reflecting Multi Reflecting Prints",
    category: "Stickers & Prints",
    summary: "Mesh and reflective print options from the brief.",
    description:
      "Mesh Print and Reflecting Multi Reflecting Prints are named in the Phoenix product brief. Ask Phoenix about your design and application.",
    image: "/images/catalogue/p13-4.webp",
    gallery: ["/images/catalogue/p13-5.webp"],
    keywords: ["mesh", "reflecting", "reflective", "print"],
  },
  {
    slug: "cotton-main-label",
    name: "Cotton Main Label",
    category: "Labels",
    summary: "A woven identity detail shown in the Phoenix catalogue.",
    description:
      "Cotton Main Label is featured in the Phoenix catalogue. Share your artwork and garment context to discuss a personalized label.",
    image: "/images/catalogue/p26-2.webp",
    gallery: [
      "/images/catalogue/p26-3.webp",
      "/images/catalogue/p26-4.webp",
      "/images/catalogue/p26-5.webp",
    ],
    keywords: ["cotton", "main label", "woven"],
    featured: true,
  },
  {
    slug: "leather-labels",
    name: "Leather Labels",
    category: "Labels",
    summary: "A distinctive label detail for garment branding.",
    description:
      "Leather Labels are included in the Phoenix product brief. Contact Phoenix with your reference to discuss customization.",
    image: "/images/catalogue/p18-1.webp",
    gallery: ["/images/catalogue/p18-2.webp", "/images/catalogue/p18-3.webp"],
    keywords: ["leather", "label"],
  },
  {
    slug: "rubber-labels",
    name: "Rubber Labels",
    category: "Labels",
    summary: "A defined label treatment within the Phoenix range.",
    description:
      "Rubber Labels are listed in the Phoenix product brief. Phoenix welcomes customized design requirements; contact the team to discuss yours.",
    image: "/images/catalogue/p19-1.webp",
    gallery: ["/images/catalogue/p19-2.webp", "/images/catalogue/p19-3.webp"],
    keywords: ["rubber", "label"],
  },
  {
    slug: "garment-embossing",
    name: "Garment Embossing",
    category: "Garment Branding",
    summary: "A garment branding treatment featured in the brief.",
    description:
      "Garment Embossing is listed among Phoenix’s product offerings. Discuss your chosen design and garment application with Phoenix.",
    image: "/images/catalogue/p19-3.webp",
    gallery: ["/images/catalogue/p19-1.webp"],
    keywords: ["embossing", "garment"],
  },
  {
    slug: "weld-print",
    name: "Weld Print",
    category: "Stickers & Prints",
    summary: "A print treatment named in the Phoenix product brief.",
    description:
      "Weld Print is included in the Phoenix catalogue brief. Share your requirement with Phoenix to explore a customized design.",
    image: "/images/catalogue/p15-1.webp",
    gallery: ["/images/catalogue/p15-2.webp"],
    keywords: ["weld", "print"],
  },
  {
    slug: "printed-emboss-deboss-tapes",
    name: "Printed, Emboss & Deboss Tapes",
    category: "Garment Branding",
    summary: "Tape branding options included in the Phoenix range.",
    description:
      "Printed, Emboss & Deboss Tapes are named in the Phoenix product brief. Contact Phoenix with your design reference and application.",
    image: "/images/catalogue/p23-4.webp",
    gallery: ["/images/catalogue/p23-4.webp"],
    keywords: ["tapes", "printed", "emboss", "deboss"],
  },
  {
    slug: "tipping",
    name: "Tipping",
    category: "Accessories",
    summary: "A garment accessory included in the Phoenix product brief.",
    description:
      "Tipping is listed in the Phoenix product brief. Contact Phoenix to discuss the detail and your customized requirement.",
    image: "/images/catalogue/p22-1.webp",
    gallery: ["/images/catalogue/p22-3.webp"],
    keywords: ["tipping", "accessory"],
  },
  {
    slug: "pullers",
    name: "Pullers",
    category: "Accessories",
    summary: "Garment pullers from the Phoenix accessories range.",
    description:
      "Pullers appear in the Phoenix catalogue’s garment accessories. Share your reference and requirements with Phoenix to begin an enquiry.",
    image: "/images/catalogue/p17-2.webp",
    gallery: [
      "/images/catalogue/p17-1.webp",
      "/images/catalogue/p17-3.webp",
      "/images/catalogue/p17-4.webp",
    ],
    keywords: ["pullers", "zipper", "accessories"],
    featured: true,
  },
  {
    slug: "gadgets",
    name: "Gadgets",
    category: "Accessories",
    summary: "A personalized product category shown in the catalogue.",
    description:
      "Gadgets are featured in the closing pages of the Phoenix catalogue alongside its customization message. Contact Phoenix to discuss a personalized design.",
    image: "/images/catalogue/p30-2.webp",
    gallery: ["/images/catalogue/p30-1.webp"],
    keywords: ["gadgets", "gifts", "custom"],
  },
];
