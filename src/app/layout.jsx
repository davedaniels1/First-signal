import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  icons: {
    icon: "/logo.webp",
  },
  openGraph: {
    title: "First Signal Global Services",
    description: "An ICT company that transforms your business by Improving Communication, Connecting Networks, Simplifying Work, and Driving Growth",
    url: "https://chief-martins-dafe.netlify.app/",
    siteName: "First Signal Global Services",
    images: [
      {
        url: "https://res.cloudinary.com/dsngkhlct/image/upload/v1736859322/first-signal.png",
        width: 1200,
        height: 630,
        alt: "First Signal Global Services",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f3f3f3]`}>{children}</body>
    </html>
  );
}
