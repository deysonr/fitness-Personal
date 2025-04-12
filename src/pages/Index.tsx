
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Layout from '@/components/layout/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="py-12 md:py-20 space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Sistema de Treinamento <span className="text-fitness-primary">O-Fitness</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conectando professores e alunos para o melhor acompanhamento de exercícios e evolução física.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/login">
              <Button size="lg" className="bg-fitness-primary hover:bg-blue-600">
                Acessar como Aluno
              </Button>
            </Link>
            <Link to="/teacher/login">
              <Button size="lg" variant="outline">
                Acessar como Professor
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white text-center">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fitness-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m0 0l-4.553 2.276A1 1 0 019 15.382V8.618a1 1 0 011.447-.894L15 10m0 0V3m0 18V10" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Demonstrações em Vídeo</h2>
            <p className="text-gray-600">
              Acesse vídeos explicativos para cada exercício e execute com a técnica correta.
            </p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white text-center">
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fitness-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Acompanhamento de Progresso</h2>
            <p className="text-gray-600">
              Visualize sua evolução com gráficos detalhados e histórico de atividades.
            </p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white text-center">
            <div className="h-12 w-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fitness-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Registro de Localização</h2>
            <p className="text-gray-600">
              Registre os locais onde realizou seus treinos para melhor organização.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
