
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExerciseForm from '@/components/teacher/ExerciseForm';
import ExerciseList from '@/components/teacher/ExerciseList';

// Sample data for demonstration
const sampleExercises = [
  {
    id: '1',
    title: 'Agachamento',
    description: 'Posicione os pés alinhados com os ombros, desça flexionando os joelhos como se fosse sentar, mantendo a coluna reta.',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    targetMuscle: 'Pernas',
    difficulty: 'Iniciante'
  },
  {
    id: '2',
    title: 'Flexão de Braço',
    description: 'Apoie as mãos no chão na largura dos ombros, mantenha o corpo reto e faça o movimento de descer e subir.',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
    targetMuscle: 'Peito',
    difficulty: 'Intermediário'
  },
  {
    id: '3',
    title: 'Prancha',
    description: 'Apoie os antebraços no chão, mantenha o corpo reto e contraído, segurando a posição pelo tempo determinado.',
    videoUrl: 'https://www.youtube.com/watch?v=example3',
    targetMuscle: 'Core',
    difficulty: 'Iniciante'
  }
];

const TeacherDashboard = () => {
  const [exercises, setExercises] = useState(sampleExercises);
  
  const handleSaveExercise = (exercise: any) => {
    const newExercise = {
      ...exercise,
      id: Date.now().toString() // Simple ID generation for demo purposes
    };
    
    setExercises([...exercises, newExercise]);
  };
  
  const handleEditExercise = (id: string) => {
    console.log(`Editing exercise with ID: ${id}`);
    // In a real application, this would open an edit form or modal
  };
  
  const handleDeleteExercise = (id: string) => {
    const updatedExercises = exercises.filter(ex => ex.id !== id);
    setExercises(updatedExercises);
  };

  return (
    <Layout userType="teacher">
      <h1 className="text-3xl font-bold mb-6">Dashboard do Professor</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-xl">Menu</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-1">
              <a href="#" className="block px-4 py-2 rounded-md bg-fitness-primary text-white font-medium">
                Dashboard
              </a>
              <a href="#" className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">
                Gerenciar Exercícios
              </a>
              <a href="#" className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">
                Alunos
              </a>
              <a href="#" className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">
                Relatórios
              </a>
              <a href="#" className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">
                Configurações
              </a>
            </nav>
          </CardContent>
        </Card>
        
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Gerenciamento de Exercícios</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="list">
                <TabsList className="mb-6">
                  <TabsTrigger value="list">Lista de Exercícios</TabsTrigger>
                  <TabsTrigger value="add">Adicionar Exercício</TabsTrigger>
                </TabsList>
                
                <TabsContent value="list">
                  <ExerciseList 
                    exercises={exercises} 
                    onEdit={handleEditExercise}
                    onDelete={handleDeleteExercise} 
                  />
                </TabsContent>
                
                <TabsContent value="add">
                  <ExerciseForm onSave={handleSaveExercise} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherDashboard;
