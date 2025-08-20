'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adminEmail, setAdminEmail] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('adminAuth');
      const email = localStorage.getItem('adminEmail');
      
      if (authStatus === 'true' && email) {
        setIsAuthenticated(true);
        setAdminEmail(email);
      } else {
        setIsAuthenticated(false);
        setAdminEmail('');
      }
      
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  // Protect admin routes
  useEffect(() => {
    if (!isLoading) {
      const isAdminRoute = pathname?.startsWith('/admin-panel');
      
      if (isAdminRoute && !isAuthenticated) {
        router.push('/admin-login');
      }
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  const login = (email) => {
    localStorage.setItem('adminAuth', 'true');
    localStorage.setItem('adminEmail', email);
    setIsAuthenticated(true);
    setAdminEmail(email);
  };

  const logout = () => {
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminEmail');
    setIsAuthenticated(false);
    setAdminEmail('');
    router.push('/admin-login');
  };

  const value = {
    isAuthenticated,
    isLoading,
    adminEmail,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
