import type { Metadata } from "next";
import { Inter, Playfair_Display, UnifrakturMaguntia, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const blackletter = UnifrakturMaguntia({
  variable: "--font-blackletter",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CONVICTION — The relentless belief in yourself.",
  description:
    "Conviction is apparel for those who act on belief. The relentless belief in yourself, the courage to act, the discipline to see it through.",
  metadataBase: new URL("https://conviction.example"),
  openGraph: {
    title: "CONVICTION",
    description:
      "The relentless belief in yourself, the courage to act, the discipline to see it through.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${blackletter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
