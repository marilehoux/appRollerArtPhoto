import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

type Category = {
  id: number;
  name: string;
  competitors: Competitor[];
};

type Competitor = {
  id: number;
  name: string;
  club: string;
  thumbnailUrl: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: 'Senior National',
    competitors: [
      {
        id: 1,
        name: 'Marie Dubois',
        club: 'RSC Paris',
        thumbnailUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=200',
      },
      {
        id: 2,
        name: 'Sophie Martin',
        club: 'Roller Club Lyon',
        thumbnailUrl: 'https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?auto=format&fit=crop&q=80&w=200',
      },
    ],
  },
  {
    id: 2,
    name: 'Junior National',
    competitors: [
      {
        id: 3,
        name: 'Lucas Bernard',
        club: 'RSC Bordeaux',
        thumbnailUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=200',
      },
    ],
  },
];

function CompetitionDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Championnat de France 2024</h1>
        <p className="mt-2 text-gray-600">15-17 Mars 2024 • Paris</p>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-sm">
            <h2 className="px-6 py-4 text-xl font-semibold text-gray-900 border-b">
              {category.name}
            </h2>
            <div className="divide-y">
              {category.competitors.map((competitor) => (
                <Link
                  key={competitor.id}
                  to={`/competitors/${competitor.id}`}
                  className="flex items-center px-6 py-4 hover:bg-gray-50 transition-colors group"
                >
                  <img
                    src={competitor.thumbnailUrl}
                    alt={competitor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{competitor.name}</h3>
                    <p className="text-sm text-gray-600">{competitor.club}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompetitionDetails;