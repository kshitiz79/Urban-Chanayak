'use client';

import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import CustomCursor from "@/components/Global/CustomerCursor";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminPanel = pathname?.startsWith('/admin-panel');

  return (
    <>
      {!isAdminPanel && <CustomCursor />}
      {!isAdminPanel && <Header />}
      {children}
      {!isAdminPanel && <Footer />}
    </>
  );
}