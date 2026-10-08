import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export const metadata: Metadata = {
  title: "About Phoenix",
  description:
    "Learn about Phoenix, its customer-focused mission, vision and product collection.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Phoenix",
    description: "Phoenix labels, printing and garment accessories.",
  },
};
const values = [
  [
    "01",
    "Customer satisfaction",
    "A customer-oriented approach, with attention to individual requirements.",
  ],
  [
    "02",
    "Innovation",
    "Continuous development of ideas and printing techniques.",
  ],
  [
    "03",
    "Price",
    "Value is one of the principles Phoenix identifies in its catalogue.",
  ],
  [
    "04",
    "Service",
    "A service-minded approach to understanding and responding to requirements.",
  ],
];
export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero page-wrap">
        <span className="eyebrow">THE PHOENIX STORY</span>
        <h1>
          Identity, made
          <br />
          <em>tangible.</em>
        </h1>
        <p>
          Phoenix is a garment accessories manufacturer presenting labels,
          stickers, printing and related products for brands looking to make
          their identity felt.
        </p>
      </section>
      <section className="about-split section-pad">
        <div className="about-photo">
          <Image
            src="/images/catalogue/p18-3.webp"
            alt="A garment label example shown in the Phoenix catalogue"
            fill
            sizes="50vw"
          />
        </div>
        <div className="about-statement">
          <span className="eyebrow">OUR PURPOSE</span>
          <h2>
            For the details
            <br />
            that make a brand
            <br />
            <em>recognizable.</em>
          </h2>
          <p>
            The Phoenix catalogue describes a focus on becoming a
            quality-conscious, technically sound name in textile printing — and
            on earning trust through customer satisfaction and quality products.
          </p>
        </div>
      </section>
      <section className="mission-vision">
        <article>
          <span className="eyebrow">OUR VISION</span>
          <h2>
            A trusted name in
            <br />
            <em>textile printing.</em>
          </h2>
          <p>
            Phoenix’s stated vision is to become a quality and technically sound
            brand in the textile printing industry.
          </p>
        </article>
        <article>
          <span className="eyebrow">OUR MISSION</span>
          <h2>
            Quality with
            <br />
            <em>customer focus.</em>
          </h2>
          <p>
            The catalogue’s mission centers on building a trusted brand and
            satisfying customers through quality products.
          </p>
        </article>
      </section>
      <section className="values-section section-pad">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE PRINCIPLES</span>
            <h2>
              What guides <em>us.</em>
            </h2>
          </div>
          <p>Four ideas Phoenix identifies as values in its catalogue.</p>
        </div>
        <div className="values-list">
          {values.map(([n, title, desc]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="process-section">
        <span className="eyebrow">A CUSTOM REQUIREMENT</span>
        <h2>
          From idea to <em>identity.</em>
        </h2>
        <p className="process-intro">
          A simple way to begin a conversation with Phoenix.
        </p>
        <div className="process-steps">
          {[
            [
              "01",
              "Share the brief",
              "Tell us about your brand, reference and requirement.",
            ],
            [
              "02",
              "Discuss the direction",
              "Describe the visual treatment you have in mind.",
            ],
            [
              "03",
              "Shape the design",
              "Explore a personalized design direction with Phoenix.",
            ],
            [
              "04",
              "Ready for your brand",
              "A finished label, print or accessory to carry your identity.",
            ],
          ].map(([n, t, d]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
        <Link href="/contact" className="button button-light">
          Start a conversation <ArrowRight size={15} />
        </Link>
      </section>
    </div>
  );
}
