"use client";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { products, categories } from "@/data/products";
import { ProductCard } from "./ProductCard";
export function ProductBrowser() {
  const [category, setCategory] = useState("All"),
    [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          `${p.name} ${p.category} ${p.description} ${p.keywords.join(" ")}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [category, query],
  );
  return (
    <>
      <label className="search-box">
        <Search size={17} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products, finishes and more"
          aria-label="Search products"
        />
        {query && (
          <button onClick={() => setQuery("")} aria-label="Clear search">
            ×
          </button>
        )}
      </label>
      <div className="filter-row" role="group" aria-label="Filter by category">
        {categories.map((c) => (
          <button
            key={c}
            className={category === c ? "active" : ""}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {filtered.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="no-results">
          No products match that search. Try a different term.
        </p>
      )}
    </>
  );
}
