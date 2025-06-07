import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RickTree - Never Gonna Give you Tree",
  description: "Never Gonna Give you link, Never Gonna Give you tree",
  keywords: "Rick Trie,rick tree,rick rolled".split(","),
  openGraph: {
    title: 'RickTree - Where Rick Climbs the link tree',
    description: 'Checkout Risk Actuly climb a tree',
    images: [
      {
        url: `https://i.gadgets360cdn.com/large/rick_astley_youtube_1627540038486.jpg?downsize=950:*`,
        width: 950,
        height: 534,
        alt: 'Risk Axctuly',
        type: 'image/jpeg',
      },
    ],
    siteName: 'Ricktree ',
  },


};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
