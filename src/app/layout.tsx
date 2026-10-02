import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsApp } from '@/components/WhatsApp';
import { siteUrl } from '@/lib/site';

export const metadata:Metadata={metadataBase:siteUrl?new URL(siteUrl):undefined,title:{default:'Phoenix — Labels, Stickers & Printing',template:'%s | Phoenix'},description:'Labels, stickers, printing and garment accessories from Phoenix. Explore the collection or discuss a customized design requirement.',alternates:{canonical:'/'},openGraph:{title:'Phoenix — Labels, Stickers & Printing',description:'A product collection of labels, stickers, printing and garment accessories.',siteName:'Phoenix',type:'website'},twitter:{card:'summary_large_image',title:'Phoenix — Labels, Stickers & Printing',description:'Labels, stickers, printing and garment accessories from Phoenix.'}};
export default function RootLayout({children}:{children:React.ReactNode}){const organization={'@context':'https://schema.org','@type':'Organization',name:'Phoenix Labels, Stickers & Printing',email:'phoenixlabels1@gmail.com'};return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}}/><Navbar/><main>{children}</main><Footer/><WhatsApp/></body></html>}




