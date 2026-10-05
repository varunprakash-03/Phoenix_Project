"use client";
import { useState } from "react";
import { MessageCircle, ArrowUpRight, X, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { whatsappUrl } from "@/lib/site";
export function WhatsApp({ product }: { product?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentProduct = product ?? products.find((item) => pathname === `/products/${item.slug}`)?.name;
  const message = currentProduct
    ? `Hello Phoenix, I am interested in ${currentProduct}. I would like to know more about customization and pricing.`
    : "Hello Phoenix, I would like to enquire about your products and custom printing solutions.";
  return (
    <div className="wa-wrap">
      {open && (
        <section className="wa-pop" role="dialog" aria-label="Phoenix product concierge">
          <div className="wa-pop-head">
            <div className="wa-avatar">P</div>
            <div><span>PHOENIX</span><small>PRODUCT CONCIERGE</small></div>
            <button className="wa-close" onClick={() => setOpen(false)} aria-label="Close chat"><X size={17} /></button>
          </div>
          <div className="wa-pop-body">
            <span className="eyebrow">A PERSONAL INTRODUCTION</span>
            <div className="wa-message"><Sparkles size={15} /><p>Hello there. Looking for labels, printing or custom garment accessories?</p></div>
            <span className="wa-prompt">How can we help?</span>
            <div className="wa-quick-links">
              <Link href="/products" onClick={() => setOpen(false)}>Explore products <ArrowUpRight size={14} /></Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Custom requirement <ArrowUpRight size={14} /></Link>
              <a href={whatsappUrl(message)} target="_blank" rel="noreferrer">Talk to Phoenix <MessageCircle size={14} /></a>
            </div>
          </div>
        </section>
      )}
      <button className={`wa-button ${open ? "is-open" : ""}`} aria-label={open ? "Close Phoenix chat" : "Open Phoenix chat"} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X /> : <MessageCircle />}
      </button>
    </div>
  );
}
