import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  const categories = [
    {
      label: "Woven Labels",
      img: "/assest/premium black cotton woven clothing label white background.jpg",
      href: "/products",
    },
    {
      label: "3D Prints",
      img: "/assest/3D High-Density Print.jpg",
      href: "/products",
    },
    {
      label: "Embroidery",
      img: "/assest/black tuft embroidery patch white background macro.jpg",
      href: "/products",
    },
    {
      label: "Garment Patches",
      img: "/assest/black flock velvet garment patch white background.jpg",
      href: "/products",
    },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="ph-hero">
        <Image
          className="ph-hero-img"
          src="/images/catalogue/hero page.png"
          alt="Phoenix – Garment Identities"
          fill
          priority
          sizes="100vw"
        />
        <div className="ph-hero-overlay" />
        <div className="ph-hero-body">
          <small className="ph-hero-eyebrow">NEW COLLECTION</small>
          <h1 className="ph-hero-title">
            The Phoenix<br />Collection
          </h1>
          <div className="ph-hero-actions">
            <Link className="ph-btn ph-btn-light" href="/products">
              DISCOVER
            </Link>
            <Link className="ph-btn-ghost" href="/contact">
              Start a Custom Project <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div className="ph-hero-bar">
          <span>PHOENIX · LABELS · STICKERS · PRINTING</span>
          <span>GARMENT IDENTITIES</span>
        </div>
      </section>

      {/* ── SHOP BY CATEGORY ── */}
      <section className="ph-sec">
        <div className="ph-sec-head">
          <span className="ph-eyebrow">01 / THE COLLECTION</span>
          <h2 className="ph-sec-title">Shop by Category</h2>
        </div>
        <div className="ph-cat-grid">
          {categories.map((c) => (
            <Link key={c.label} href={c.href} className="ph-cat-tile">
              <div className="ph-cat-img">
                <Image src={c.img} alt={c.label} fill sizes="25vw" className="ph-cat-photo" />
              </div>
              <h3 className="ph-cat-label">{c.label}</h3>
              <p className="ph-cat-cta">Shop now</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SPLIT — CRAFTSMANSHIP ── */}
      <section className="ph-split">
        <div className="ph-split-pic">
          <Image
            src="/assest/black silicone 3D garment print white background.jpg"
            alt="Phoenix craftsmanship – silicone 3D garment print"
            fill
            sizes="50vw"
            className="ph-split-photo"
          />
        </div>
        <div className="ph-split-txt">
          <small className="ph-eyebrow">02 / THE PHOENIX APPROACH</small>
          <h2 className="ph-split-heading">
            Made to carry<br />a <em>brand</em> forward.
          </h2>
          <p>
            From labels and patches to printing and garment accessories,
            Phoenix brings identity into the details people can see and feel.
          </p>
          <Link className="ph-btn ph-btn-dark" href="/about">
            EXPLORE
          </Link>
        </div>
      </section>

      {/* ── SPLIT — CUSTOM (dark) ── */}
      <section className="ph-split ph-split-rev">
        <div className="ph-split-txt ph-split-txt-dk">
          <small className="ph-eyebrow ph-eyebrow-lt">03 / MADE PERSONAL</small>
          <h2 className="ph-split-heading">
            You create<br />the <em>identity.</em>
          </h2>
          <p>
            Phoenix offers fully customizable design options. Bring an idea,
            a reference or a direction — and start a conversation about a
            print that represents you.
          </p>
          <Link className="ph-btn ph-btn-outline" href="/contact">
            START YOUR CUSTOM PROJECT <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="ph-split-pic ph-split-pic-dk">
          <Image
            src="/assest/cracked texture garment print black white background.jpg"
            alt="Phoenix – cracked texture garment print custom"
            fill
            sizes="50vw"
            className="ph-split-photo ph-split-photo-dk"
          />
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="ph-products ph-sec">
        <div className="ph-sec-head">
          <span className="ph-eyebrow">04 / FEATURED</span>
          <h2 className="ph-sec-title">Details that <em>define.</em></h2>
        </div>
        <div className="ph-prod-grid">
          {featured.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="ph-prod-card">
              <div className="ph-prod-img">
                <Image
                  src={p.image}
                  alt={`${p.name} – Phoenix`}
                  fill
                  sizes="(max-width:700px) 100vw, 25vw"
                  className="ph-prod-photo"
                />
                <span className="ph-prod-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <div className="ph-prod-meta">
                <span>{p.category.toUpperCase()}</span>
                <span>PHOENIX</span>
              </div>
              <div className="ph-prod-title">
                <h3>{p.name}</h3>
                <span>Explore <ArrowUpRight size={13} /></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="ph-products-cta">
          <Link className="ph-btn ph-btn-dark" href="/products">
            VIEW ALL PRODUCTS <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section className="ph-services">
        <div className="ph-serv-item">
          <h4>CUSTOM LABELS</h4>
          <p>Woven, printed or embossed — designed around your brand.</p>
        </div>
        <div className="ph-serv-item">
          <h4>PERSONALISATION</h4>
          <p>Add your logo, colorway, or a custom detail to any piece.</p>
        </div>
        <div className="ph-serv-item">
          <h4>CLIENT SERVICES</h4>
          <p>Our team is available to discuss your exact requirement.</p>
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <section className="ph-closing">
        <span className="ph-eyebrow">A NOTE FROM PHOENIX</span>
        <p className="ph-closing-quote">
          "You create the brand.<br />
          <em>We print everything."</em>
        </p>
        <Link className="ph-text-link" href="/contact">
          Tell us what you have in mind <ArrowRight size={15} />
        </Link>
      </section>
    </>
  );
}
