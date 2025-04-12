
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  userType: 'teacher' | 'student' | null;
}

const Navbar: React.FC<NavbarProps> = ({ userType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleLogout = () => {
    // Add actual logout functionality later
    console.log('Logging out');
    window.location.href = '/';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-fitness-primary">O-Fitness</h1>
            </Link>
          </div>

          {/* Desktop menu */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              {userType === 'teacher' && (
                <>
                  <Link to="/teacher/dashboard" className="text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                    Dashboard
                  </Link>
                  <Link to="/teacher/exercises" className="text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                    Exercícios
                  </Link>
                  <Link to="/teacher/students" className="text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                    Alunos
                  </Link>
                </>
              )}
              {userType === 'student' && (
                <>
                  <Link to="/student/dashboard" className="text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                    Dashboard
                  </Link>
                  <Link to="/student/exercises" className="text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                    Meus Exercícios
                  </Link>
                  <Link to="/student/progress" className="text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                    Progresso
                  </Link>
                </>
              )}
              {userType && (
                <Button 
                  variant="ghost" 
                  onClick={handleLogout} 
                  className="flex items-center text-gray-700 hover:text-fitness-primary"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </Button>
              )}
              {!userType && (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                    Login
                  </Link>
                  <Link to="/register">
                    <Button className="bg-fitness-primary hover:bg-blue-600">
                      Registrar
                    </Button>
                  </Link>
                </>
              )}
            </div>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <div className="flex items-center">
              <button
                className="text-gray-700 hover:text-fitness-primary focus:outline-none"
                aria-label="Toggle menu"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="bg-white p-4 shadow-lg animate-fade-in">
          {userType === 'teacher' && (
            <>
              <Link to="/teacher/dashboard" onClick={closeMenu} className="block text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                Dashboard
              </Link>
              <Link to="/teacher/exercises" onClick={closeMenu} className="block text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                Exercícios
              </Link>
              <Link to="/teacher/students" onClick={closeMenu} className="block text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                Alunos
              </Link>
            </>
          )}
          {userType === 'student' && (
            <>
              <Link to="/student/dashboard" onClick={closeMenu} className="block text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                Dashboard
              </Link>
              <Link to="/student/exercises" onClick={closeMenu} className="block text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                Meus Exercícios
              </Link>
              <Link to="/student/progress" onClick={closeMenu} className="block text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                Progresso
              </Link>
            </>
          )}
          {userType && (
            <Button 
              variant="ghost" 
              onClick={handleLogout} 
              className="w-full justify-start text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          )}
          {!userType && (
            <>
              <Link to="/login" onClick={closeMenu} className="block text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                Login
              </Link>
              <Link to="/register" onClick={closeMenu} className="block text-gray-700 hover:text-fitness-primary px-3 py-2 rounded-md font-medium">
                Registrar
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
