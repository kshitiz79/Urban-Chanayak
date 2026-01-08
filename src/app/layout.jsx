import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import { telegraph } from "./font";
export const metadata = {
  title: "Urban Chanayak",
  description: "We Create The Impact",
  icons: {
    icon: "/hirse.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={telegraph.className}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
