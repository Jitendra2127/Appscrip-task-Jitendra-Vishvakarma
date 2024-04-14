import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "e-commerce website",
  description: "Experience seamless online shopping at our e-commerce platform. Browse, select, and purchase a wide range of products with secure transactions and convenient delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
          {children}
       

      </body>
    </html>
  );
}
