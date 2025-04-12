
import React from 'react';
import Navbar from './Navbar';
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
  userType?: 'teacher' | 'student' | null;
}

const Layout: React.FC<LayoutProps> = ({ children, userType = null }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar userType={userType} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-white shadow-inner py-6">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© {new Date().getFullYear()} O-Fitness. Todos os direitos reservados.</p>
        </div>
      </footer>
      <Toaster />
    </div>
  );
};

export default Layout;
