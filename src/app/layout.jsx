import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohit's Portfolio",
  description: "A showcase of creativity, vision, and storytelling through photography.",
  keywords: "photography, portfolio, visual storytelling, creative photography, Mohit, mohit portfolio, photographer portfolio, react, next.js",
  author: "Mohit",
};


export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body
          className={`${roboto.variable} ${robotoMono.className} antialiased`}
        >
          {children}
        </body>
      </html>
  );
}
