'use client';

import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import CustomCursor from "@/components/Global/CustomerCursor";
import { AuthProvider } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminPanel = pathname?.startsWith('/admin-panel');
  const isAdminLogin = pathname === '/admin-login';

  return (
    <AuthProvider>
      {!isAdminPanel && !isAdminLogin && <CustomCursor />}
      {!isAdminPanel && !isAdminLogin && <Header />}
      {children}
      {!isAdminPanel && !isAdminLogin && <Footer />}
    </AuthProvider>
  );
}