import "./globals.css";
import { Raleway, Open_Sans } from "next/font/google";

const raleway = Raleway({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--rale",
});

const sans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--sans",
});

export const metadata = {
  title: "Mentorship App",
  description:
    " One-on-One Guidance to Help You Study Abroad with Confidence. Navigate international education with a trusted advisor. Get personalized counseling tailored to your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${sans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
