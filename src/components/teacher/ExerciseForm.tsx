
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "lucide-react";

interface ExerciseFormProps {
  onSave: (exercise: {
    title: string;
    description: string;
    videoUrl: string;
    targetMuscle: string;
    difficulty: string;
  }) => void;
}

const ExerciseForm: React.FC<ExerciseFormProps> = ({ onSave }) => {
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [targetMuscle, setTargetMuscle] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !videoUrl) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    onSave({
      title,
      description,
      videoUrl,
      targetMuscle,
      difficulty
    });

    // Clear the form
    setTitle('');
    setDescription('');
    setVideoUrl('');
    setTargetMuscle('');
    setDifficulty('');

    toast({
      title: "Exercício salvo",
      description: "O exercício foi salvo com sucesso!"
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Adicionar Novo Exercício</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Nome do Exercício *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Agachamento"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição *</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva como o exercício deve ser executado..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="videoUrl" className="flex items-center">
              <Link className="w-4 h-4 mr-1" />
              Link do Vídeo *
            </Label>
            <Input
              id="videoUrl"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Ex: https://www.youtube.com/watch?v=..."
              required
            />
            <p className="text-sm text-gray-500">Insira um link para um vídeo demonstrativo do exercício</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="targetMuscle">Grupo Muscular</Label>
              <Input
                id="targetMuscle"
                value={targetMuscle}
                onChange={(e) => setTargetMuscle(e.target.value)}
                placeholder="Ex: Pernas, Costas, etc."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty">Nível de Dificuldade</Label>
              <Input
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                placeholder="Ex: Iniciante, Intermediário"
              />
            </div>
          </div>

          <CardFooter className="px-0 pt-4 flex justify-end">
            <Button type="submit" className="bg-fitness-primary hover:bg-blue-600">
              Salvar Exercício
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default ExerciseForm;
