
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Exercise {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  targetMuscle: string;
  difficulty: string;
}

interface ExerciseListProps {
  exercises: Exercise[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ExerciseList: React.FC<ExerciseListProps> = ({ exercises, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Exercícios Cadastrados</h2>
      
      {exercises.length === 0 ? (
        <Card className="bg-gray-50 border-dashed border-2">
          <CardContent className="py-8 text-center text-gray-500">
            <p>Nenhum exercício cadastrado. Adicione seu primeiro exercício acima.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {exercises.map((exercise) => (
            <Card key={exercise.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{exercise.title}</CardTitle>
                  <div className="flex space-x-1">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0"
                      onClick={() => onEdit(exercise.id)}
                    >
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Editar</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => onDelete(exercise.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Excluir</span>
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {exercise.targetMuscle && (
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {exercise.targetMuscle}
                    </Badge>
                  )}
                  {exercise.difficulty && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {exercise.difficulty}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pb-2">
                <CardDescription className="line-clamp-3">
                  {exercise.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter>
                <a 
                  href={exercise.videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-fitness-primary hover:underline text-sm"
                >
                  <ExternalLink className="h-4 w-4 mr-1" /> Ver demonstração
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExerciseList;
