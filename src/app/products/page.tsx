import type { Metadata } from "next";
import { ProductBrowser } from "@/components/ProductBrowser";
export const metadata: Metadata = {
  title: "Product Collection",
  description:
    "Explore Phoenix labels, stickers, printing and garment accessories.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Phoenix Product Collection",
    description: "Explore labels, stickers, printing and garment accessories.",
  },
};
export default function ProductsPage() {
  return (
    <div className="page-wrap products-page">
      <div className="page-heading">
        <span className="eyebrow">THE PHOENIX COLLECTION · 22 OFFERINGS</span>
        <h1>
          Made for <em>identity.</em>
        </h1>
        <p>
          A considered selection of labels, prints and garment accessories from
          the Phoenix catalogue.
        </p>
      </div>
      <ProductBrowser />
    </div>
  );
}
