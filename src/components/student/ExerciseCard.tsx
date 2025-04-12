
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Exercise {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  targetMuscle: string;
  difficulty: string;
  completed: boolean;
}

interface ExerciseCardProps {
  exercise: Exercise;
  onComplete: (id: string, isCompleted: boolean) => void;
  onLogLocation: (id: string) => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onComplete, onLogLocation }) => {
  const { toast } = useToast();

  const handleComplete = () => {
    onComplete(exercise.id, !exercise.completed);
    toast({
      title: exercise.completed ? "Exercício marcado como não feito" : "Exercício marcado como concluído",
      description: exercise.completed
        ? "Você pode refazer este exercício quando desejar."
        : "Parabéns por completar este exercício!"
    });
  };

  const handleLogLocation = () => {
    onLogLocation(exercise.id);
    toast({
      title: "Localização registrada",
      description: "Sua localização foi registrada com sucesso!"
    });
  };

  return (
    <Card className={exercise.completed ? "border-green-300 bg-green-50" : ""}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{exercise.title}</CardTitle>
          {exercise.completed && (
            <CheckCircle className="h-5 w-5 text-green-600" />
          )}
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
      
      <CardContent>
        <p className="text-gray-600 mb-4">{exercise.description}</p>
        <a
          href={exercise.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-fitness-primary hover:underline"
        >
          <ExternalLink className="h-4 w-4 mr-1" /> Ver vídeo demonstrativo
        </a>
      </CardContent>
      
      <CardFooter className="flex flex-col sm:flex-row gap-2 pt-0">
        <Button 
          variant="outline"
          size="sm"
          className="flex-1 gap-2"
          onClick={handleLogLocation}
        >
          <MapPin className="h-4 w-4" />
          Registrar Localização
        </Button>
        <Button 
          variant={exercise.completed ? "outline" : "default"}
          size="sm"
          className={`flex-1 ${exercise.completed ? "border-green-300 text-green-700" : "bg-fitness-secondary hover:bg-emerald-600"}`}
          onClick={handleComplete}
        >
          <CheckCircle className="h-4 w-4 mr-2" />
          {exercise.completed ? "Desmarcar" : "Marcar Concluído"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExerciseCard;
