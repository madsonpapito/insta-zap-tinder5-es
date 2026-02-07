import type React from "react"
import { GoogleTagManager } from "@next/third-parties/google"
import Script from "next/script"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="GTM-PK6HB293" />
        <Script
          type="text/javascript"
          src="https://app.monetizze.com.br/upsell_incorporado.php"
          strategy="beforeInteractive"
        />
        <Script id="utmify-pixels-init" strategy="afterInteractive">
          {`
            window.pixelId = "692dffaa44e0d147a3883c6f";
            window.tikTokPixelId = "697249119845bf717d1cb094";
            window.googlePixelId = "69725247a061f2cfc7338f19";
          `}
        </Script>
        <Script
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.utmify.com.br/scripts/pixel/pixel-tiktok.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.utmify.com.br/scripts/pixel/pixel-google.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  generator: "v0.app",
}
