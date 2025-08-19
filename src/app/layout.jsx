import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";

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
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
