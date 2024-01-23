import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scroll Style Generator",
  description: "Scroll Style Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
      <div className="bg-black w-full h-screen p-12">
          {children}
      </div>
      </body>
    </html>
  );
}