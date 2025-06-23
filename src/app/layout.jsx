import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";


export const metadata = {
  title: "Urban Chanayak",
  description: "We Create The Impact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
    
      >
        <Header/>
        {children}
          <Footer/>
      </body>
    </html>
  );
}
