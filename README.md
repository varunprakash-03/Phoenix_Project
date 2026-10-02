# Phoenix Labels, Stickers & Printing

A responsive Next.js product showcase built with TypeScript. Product names and product photography are sourced from the supplied August 2022–2023 Phoenix catalogue; centralized product content lives in `src/data/products.ts`.

## Run locally

```sh
npm install
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to the production origin at deployment time if absolute social metadata URLs are needed. The catalogue provides `phoenixlabels1@gmail.com`; no phone number or WhatsApp account could be verified from the supplied material, so WhatsApp links open a prefilled message for the visitor to direct to Phoenix.

The enquiry form validates in the browser and composes a prefilled email using the visitor's mail app. It does not send mail from a server. Reference uploads are not automatically attached; the form explains that limitation. Connect a verified phone/WhatsApp destination and an email provider to enable direct delivery before public launch.
