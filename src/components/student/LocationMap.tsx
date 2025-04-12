
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from 'lucide-react';

interface Location {
  id: string;
  exerciseId: string;
  exerciseName: string;
  date: string;
  location: string;
}

interface LocationMapProps {
  locations: Location[];
}

const LocationMap: React.FC<LocationMapProps> = ({ locations }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Locais de Treino</CardTitle>
      </CardHeader>
      <CardContent>
        {locations.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <MapPin className="h-10 w-10 mx-auto mb-2 text-gray-400" />
            <p>Nenhum local de treino registrado ainda.</p>
            <p className="text-sm">Complete um exercício e registre sua localização para vê-la aqui.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-500">
              <p>Mapa com localizações será exibido aqui.</p>
              <p className="text-sm">Atualmente exibindo apenas lista de locais.</p>
            </div>
            
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
              {locations.map((loc) => (
                <div 
                  key={loc.id} 
                  className="flex items-start p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                >
                  <MapPin className="h-5 w-5 text-fitness-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{loc.exerciseName}</p>
                    <p className="text-sm text-gray-600">{loc.location}</p>
                    <p className="text-xs text-gray-500">{loc.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LocationMap;
