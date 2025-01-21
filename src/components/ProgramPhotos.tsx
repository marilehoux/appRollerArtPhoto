import React from 'react';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

type ProgramPhoto = {
  id: number;
  thumbnailUrl: string;
  title: string;
};

const programPhotos: ProgramPhoto[] = [
  {
    id: 1,
    thumbnailUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=200',
    title: 'Saut #1',
  },
  {
    id: 2,
    thumbnailUrl: 'https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?auto=format&fit=crop&q=80&w=200',
    title: 'Pirouette assise',
  },
  {
    id: 3,
    thumbnailUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=200',
    title: 'Séquence de pas',
  },
  {
    id: 4,
    thumbnailUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=200',
    title: 'Pirouette debout',
  },
  {
    id: 5,
    thumbnailUrl: 'https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?auto=format&fit=crop&q=80&w=200',
    title: 'Saut #2',
  },
  {
    id: 6,
    thumbnailUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=200',
    title: 'Combinaison de sauts',
  },
  {
    id: 7,
    thumbnailUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=200',
    title: 'Pirouette combinée',
  },
  {
    id: 8,
    thumbnailUrl: 'https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?auto=format&fit=crop&q=80&w=200',
    title: 'Séquence chorégraphique',
  },
];

function ProgramPhotos() {
  const { competitorId, programId } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link 
          to={`/competitors/${competitorId}`}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour aux programmes
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Programme court - Marie Dubois</h1>
        <p className="mt-2 text-gray-600">Championnat de France 2024 • Senior National</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {programPhotos.map((photo) => (
          <div key={photo.id} className="group">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="h-full w-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-medium text-gray-900">{photo.title}</h3>
              <button className="mt-1 inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700">
                <ShoppingCart className="h-4 w-4 mr-1" />
                Ajouter
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgramPhotos;