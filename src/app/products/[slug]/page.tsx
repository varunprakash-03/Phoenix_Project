import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { Gallery } from "@/components/Gallery";
import { whatsappUrl } from "@/lib/site";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.summary,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { title: `${p.name} | Phoenix`, description: p.summary },
    twitter: {
      card: "summary_large_image",
      title: `${p.name} | Phoenix`,
      description: p.summary,
    },
  };
}
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  const related = products
    .filter((p) => p.category === product.category && p.slug !== slug)
    .slice(0, 3);
  const gallery = [product.image, ...product.gallery];
  return (
    <div className="page-wrap detail-page">
      <Link href="/products" className="back-link">
        <ArrowLeft size={15} /> All products
      </Link>
      <div className="detail-hero">
        <div className="detail-main-image">
          <Image
            src={product.image}
            alt={`${product.name} from the Phoenix catalogue`}
            fill
            priority
            sizes="(max-width:800px) 100vw, 58vw"
          />
        </div>
        <div className="detail-copy">
          <span className="eyebrow">
            {product.category.toUpperCase()} · PHOENIX COLLECTION
          </span>
          <h1>{product.name}</h1>
          <p className="detail-lede">{product.summary}</p>
          <p>{product.description}</p>
          <a
            className="button button-dark"
            href={`/contact?product=${encodeURIComponent(product.name)}`}
          >
            Discuss this product <ArrowUpRight size={16} />
          </a>
          <a
            className="whatsapp-link"
            href={whatsappUrl(
              `Hello Phoenix, I am interested in ${product.name}. I would like to know more about customization and pricing.`,
            )}
            target="_blank"
            rel="noreferrer"
          >
            Ask about this product on WhatsApp <ArrowUpRight size={15} />
          </a>
          <div className="detail-index">
            <span>COLLECTION</span>
            <span>
              {String(products.indexOf(product) + 1).padStart(2, "0")} /{" "}
              {String(products.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
      <section className="detail-overview">
        <div>
          <span className="eyebrow">PRODUCT OVERVIEW</span>
          <h2>
            A detail with
            <br />
            <em>its own character.</em>
          </h2>
        </div>
        <div>
          <p>{product.description}</p>
          <p>
            Each requirement begins with a conversation. Share a design or
            visual reference and tell Phoenix what you are looking to create.
          </p>
        </div>
      </section>
      <section className="detail-gallery">
        <div className="detail-gallery-heading">
          <span className="eyebrow">IN THE CATALOGUE</span>
          <p>Selected Phoenix product imagery · Select an image to view</p>
        </div>
        <Gallery images={gallery} name={product.name} />
      </section>
      {related.length > 0 && (
        <section className="related-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPLORE FURTHER</span>
              <h2>
                From the same <em>collection.</em>
              </h2>
            </div>
            <Link className="text-link" href="/products">
              All products <ArrowRight size={15} />
            </Link>
          </div>
          <div className="product-grid">
            {related.map((p, i) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="related-card"
              >
                <div className="related-photo">
                  <Image
                    src={p.image}
                    alt={`${p.name} from the Phoenix catalogue`}
                    fill
                    sizes="33vw"
                  />
                </div>
                <span>{p.category.toUpperCase()}</span>
                <strong>
                  {p.name} <ArrowUpRight size={15} />
                </strong>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
