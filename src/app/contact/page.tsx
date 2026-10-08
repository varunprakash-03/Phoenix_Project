import type { Metadata } from "next";
import { Mail, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { email } from "@/lib/site";
export const metadata: Metadata = {
  title: "Contact & Enquiries",
  description:
    "Share a product, label or custom printing requirement with Phoenix.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Phoenix",
    description: "Start an enquiry with Phoenix.",
  },
};
export default function ContactPage() {
  return (
    <div className="contact-page page-wrap">
      <div className="contact-heading">
        <span className="eyebrow">LET’S START A CONVERSATION</span>
        <h1>
          Have an idea
          <br />
          for <em>your brand?</em>
        </h1>
        <p>
          Have a product, label or custom printing requirement? Tell us what you
          have in mind.
        </p>
        <a className="contact-email" href={`mailto:${email}`}>
          <Mail size={17} />
          {email}
          <ArrowUpRight size={15} />
        </a>
        <section className="contact-location" aria-labelledby="location-heading">
          <div className="location-copy">
            <span className="eyebrow">FIND PHOENIX</span>
            <h2 id="location-heading">Tiruppur, <em>India.</em></h2>
            <p>Tamil Nadu · The location map in Phoenix’s catalogue points to the Tiruppur area.</p>
            <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Tiruppur%2C%20Tamil%20Nadu%2C%20India" target="_blank" rel="noreferrer">Open Tiruppur in Maps <ArrowUpRight size={15}/></a>
          </div>
          <div className="contact-map">
            <iframe
              title="Map showing Phoenix Fashion Accessories Store in Tiruppur"
              src="https://maps.google.com/maps?q=Phoenix%20Fashion%20Accessories%20Store%2C%20Tiruppur%2C%20Tamil%20Nadu&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </div>
      <div className="contact-form-wrap">
        <ContactForm />
      </div>
    </div>
  );
}
