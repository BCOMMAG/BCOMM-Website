import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const KNOWN_PATHS = [
  "/",
  "/servicos",
  "/servicos/websites",
  "/servicos/ecommerce",
  "/servicos/automacao",
  "/cases",
  "/blog",
  "/sobre",
  "/contato",
  "/politica-privacidade",
  "/about",
  "/contact",
  "/privacy",
  "/links",
];

const NOT_FOUND_MD = `# Page not found

This URL does not exist on the BCOMM website.

## Available pages

- [Home](https://agent-bcomm.space)
- [Services](https://agent-bcomm.space/servicos)
- [Websites & Landing Pages](https://agent-bcomm.space/servicos/websites)
- [E-commerce](https://agent-bcomm.space/servicos/ecommerce)
- [AI Automation](https://agent-bcomm.space/servicos/automacao)
- [Cases](https://agent-bcomm.space/cases)
- [Blog](https://agent-bcomm.space/blog)
- [About](https://agent-bcomm.space/about)
- [Contact](https://agent-bcomm.space/contact)
- [Link Bio Instagram](https://agent-bcomm.space/links)

## Machine-readable files

- [Sitemap](https://agent-bcomm.space/sitemap.xml)
- [robots.txt](https://agent-bcomm.space/robots.txt)
- [llms.txt](https://agent-bcomm.space/llms.txt)

## Contact

- Email: contato@agent-bcomm.space
- WhatsApp: https://wa.me/554196398023
`;

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("Vary", "Accept, Accept-Encoding");

  const accept = request.headers.get("accept") || "";
  const path = request.nextUrl.pathname;

  const isMarkdownRequest = accept.includes("text/markdown");
  const isKnownPath = KNOWN_PATHS.includes(path) || path.startsWith("/blog/");

  if (isMarkdownRequest && !isKnownPath) {
    return new NextResponse(NOT_FOUND_MD, {
      status: 404,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Vary": "Accept, Accept-Encoding",
      },
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|llms-full.txt|404.md|logo.png|logo.jpeg|og-image.png|hero-ai.png|hero-desktop.jpg|hero-mobile.jpg|favicon.svg|favicon-16x16.png|favicon-32x32.png|favicon-48x48.png|favicon-96x96.png|apple-touch-icon.png|android-chrome-192x192.png|android-chrome-512x512.png|site.webmanifest).*)"],
};
