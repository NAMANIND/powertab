import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Power Tab",
  description: "Save, Share and manage your tabs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white custom-cursor`}>
        {children}
      </body>
    </html>
  );
}
