import { Provider } from '@/app/provider'
import type { Metadata } from "next";
import { Inter, Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import {ChildProps} from "@/types";
// import { SpeedInsights } from '@vercel/speed-insights/next';
// import {Analytics} from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });
const creteRound = Crete_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creteRound",
})
const workSans = Work_Sans({
  weight: ["500","600"],
  subsets: ["latin"],
  variable: "--font-workSans",
})

export const metadata: Metadata = {
  title: "EduPress",
  description: "Generated by ASK250",
};

function RootLayout({children}:ChildProps) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Provider>
      {children}
      {/* <SpeedInsights /> */}
      {/* <Analytics/> */}
    </Provider>
    </body>
    </html>
  );
}

export default RootLayout







