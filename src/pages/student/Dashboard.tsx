
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ExerciseCard from '@/components/student/ExerciseCard';
import ProgressChart from '@/components/student/ProgressChart';
import LocationMap from '@/components/student/LocationMap';

// Sample data
const sampleExercises = [
  {
    id: '1',
    title: 'Agachamento',
    description: 'Posicione os pés alinhados com os ombros, desça flexionando os joelhos como se fosse sentar, mantendo a coluna reta.',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    targetMuscle: 'Pernas',
    difficulty: 'Iniciante',
    completed: false
  },
  {
    id: '2',
    title: 'Flexão de Braço',
    description: 'Apoie as mãos no chão na largura dos ombros, mantenha o corpo reto e faça o movimento de descer e subir.',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
    targetMuscle: 'Peito',
    difficulty: 'Intermediário',
    completed: true
  },
  {
    id: '3',
    title: 'Prancha',
    description: 'Apoie os antebraços no chão, mantenha o corpo reto e contraído, segurando a posição pelo tempo determinado.',
    videoUrl: 'https://www.youtube.com/watch?v=example3',
    targetMuscle: 'Core',
    difficulty: 'Iniciante',
    completed: false
  }
];

const sampleProgressData = [
  { date: '01/04', completed: 2, target: 3 },
  { date: '02/04', completed: 3, target: 3 },
  { date: '03/04', completed: 1, target: 3 },
  { date: '04/04', completed: 4, target: 3 },
  { date: '05/04', completed: 2, target: 3 },
  { date: '06/04', completed: 3, target: 3 },
  { date: '07/04', completed: 5, target: 3 },
];

const sampleLocations = [
  { 
    id: '1', 
    exerciseId: '2', 
    exerciseName: 'Flexão de Braço', 
    date: '06/04/2025, 14:30', 
    location: 'Academia Fitness Center' 
  },
  { 
    id: '2', 
    exerciseId: '1', 
    exerciseName: 'Agachamento', 
    date: '05/04/2025, 16:15', 
    location: 'Parque Municipal' 
  }
];

const StudentDashboard = () => {
  const [exercises, setExercises] = useState(sampleExercises);
  const [locations, setLocations] = useState(sampleLocations);
  const [progressData] = useState(sampleProgressData);
  
  const handleCompleteExercise = (id: string, completed: boolean) => {
    const updatedExercises = exercises.map(ex => 
      ex.id === id ? { ...ex, completed } : ex
    );
    setExercises(updatedExercises);
  };
  
  const handleLogLocation = (id: string) => {
    const exercise = exercises.find(ex => ex.id === id);
    if (exercise) {
      // In a real app, we would use geolocation API to get actual location
      const newLocation = {
        id: Date.now().toString(),
        exerciseId: id,
        exerciseName: exercise.title,
        date: new Date().toLocaleString(),
        location: 'Academia O-Fitness' // Mock location
      };
      
      setLocations([newLocation, ...locations]);
    }
  };

  return (
    <Layout userType="student">
      <h1 className="text-3xl font-bold mb-6">Dashboard do Aluno</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Exercícios do Dia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {exercises.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  exercise={exercise}
                  onComplete={handleCompleteExercise}
                  onLogLocation={handleLogLocation}
                />
              ))}
            </CardContent>
          </Card>
          
          <ProgressChart data={progressData} />
        </div>
        
        <div className="lg:col-span-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Resumo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-fitness-primary">
                    {exercises.filter(e => e.completed).length}
                  </p>
                  <p className="text-sm text-gray-600">Exercícios Completos</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-fitness-secondary">
                    {Math.round(exercises.filter(e => e.completed).length / exercises.length * 100)}%
                  </p>
                  <p className="text-sm text-gray-600">Progresso Diário</p>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-indigo-500">
                    {exercises.length}
                  </p>
                  <p className="text-sm text-gray-600">Total de Exercícios</p>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-amber-500">
                    {locations.length}
                  </p>
                  <p className="text-sm text-gray-600">Locais Registrados</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <LocationMap locations={locations} />
        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
