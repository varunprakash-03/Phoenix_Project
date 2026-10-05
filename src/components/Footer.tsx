import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { email } from "@/lib/site";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="footer-logo">
            PHOENIX
          </Link>
          <p>Labels, Stickers & Printing</p>
        </div>
        <div>
          <span className="eyebrow">Explore</span>
          <Link href="/about">About Phoenix</Link>
          <Link href="/products">Product collection</Link>
          <Link href="/contact">Custom solutions</Link>
        </div>
        <div>
          <span className="eyebrow">Get in touch</span>
          <a href={`mailto:${email}`}>{email}</a>
          <Link href="/contact">
            Send an enquiry <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Phoenix. All rights reserved.</span>
        <span>Designed around your identity.</span>
      </div>
    </footer>
  );
}
