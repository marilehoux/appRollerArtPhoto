import React from 'react';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

type Program = {
  id: number;
  thumbnailUrl: string;
  title: string;
};

const programs: Program[] = [
  {
    id: 1,
    thumbnailUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=300',
    title: 'Programme court',
  },
  {
    id: 2,
    thumbnailUrl: 'https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?auto=format&fit=crop&q=80&w=300',
    title: 'Programme libre',
  },
  {
    id: 3,
    thumbnailUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=300',
    title: 'Style dance',
  },
];

function CompetitorPhotos() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link 
          to="/competitions/1" 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour à la compétition
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Photos de Marie Dubois</h1>
        <p className="mt-2 text-gray-600">Championnat de France 2024 • Senior National</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <Link 
            key={program.id} 
            to={`/competitors/${id}/programs/${program.id}`}
            className="group"
          >
            <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
              <img
                src={program.thumbnailUrl}
                alt={program.title}
                className="h-full w-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">{program.title}</h3>
              <p className="mt-1 text-sm text-gray-600">Voir toutes les photos</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CompetitorPhotos;