import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--poppins",
});

export const metadata = {
  title: "Rethink Systems",
  description: "Step into the next generation of product leadership. In a world where AI is transforming how products are built, this program equips you with clarity of thought, first-principle frameworks, and hands-on AI execution skills. Learn to ship winning products faster, think like a founder, and future-proof your career.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
