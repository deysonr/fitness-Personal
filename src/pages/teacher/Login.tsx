
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Layout from '@/components/layout/Layout';

const TeacherLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real application, we would authenticate with a backend
    // For now, we'll just simulate a login
    setTimeout(() => {
      setIsLoading(false);
      
      if (email === 'professor@exemplo.com' && password === 'senha') {
        toast({
          title: "Login bem-sucedido",
          description: "Bem-vindo de volta, Professor!"
        });
        navigate('/teacher/dashboard');
      } else {
        toast({
          title: "Falha no login",
          description: "E-mail ou senha incorretos. Tente 'professor@exemplo.com' com senha 'senha'.",
          variant: "destructive"
        });
      }
    }, 1000);
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-[80vh]">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Login do Professor</CardTitle>
            <CardDescription className="text-center">
              Entre com seus dados para gerenciar exercícios e alunos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu.email@exemplo.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <a href="#" className="text-sm text-fitness-primary hover:underline">
                    Esqueceu a senha?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-fitness-primary hover:bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? 'Entrando...' : 'Entrar'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-center text-sm">
              <Link to="/login" className="text-gray-600 hover:underline">
                Entrar como aluno
              </Link>
            </div>
          </CardFooter>
          
          <div className="px-6 pb-4 text-center">
            <p className="text-xs text-gray-500">
              Dica: use email "professor@exemplo.com" e senha "senha" para testar
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default TeacherLogin;
