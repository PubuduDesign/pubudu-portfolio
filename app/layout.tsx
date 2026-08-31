import type { Metadata } from "next";
import { Anton, Poppins } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pubudu Shyamal | Graphic Designer",
  description: "Professional YouTube Thumbnail Designer & Graphic Designer. Explore my portfolio and creative work",
   keywords: [
    "YouTube Thumbnail Designer",
    "Graphic Designer",
    "Photoshop",
    "Thumbnail Design",
    "Social Media Design",
    "Sri Lanka",
  ],
   authors: [{ name: "Pubudu Shyamal" }],
   creator: "Pubudu Shyamal",
   icons: {
    icon: "/favicon.ico",
   }

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}