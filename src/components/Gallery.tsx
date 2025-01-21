import React from 'react';
import { Link } from 'react-router-dom';

const competitions = [
  {
    id: 1,
    title: 'Championnat de France 2024',
    date: '15-17 Mars 2024',
    location: 'Paris',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Coupe Régionale',
    date: '2-3 Février 2024',
    location: 'Lyon',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Open International',
    date: '20-22 Janvier 2024',
    location: 'Bordeaux',
    image: 'https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?auto=format&fit=crop&q=80',
  },
];

function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Dernières compétitions
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Découvrez nos galeries photos des récentes compétitions
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {competitions.map((competition) => (
          <Link
            key={competition.id}
            to={`/competitions/${competition.id}`}
            className="group relative"
          >
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white">
              <img
                src={competition.image}
                alt={competition.title}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-semibold text-white">{competition.title}</h3>
              <p className="mt-1 text-sm text-gray-300">{competition.date}</p>
              <p className="text-sm text-gray-300">{competition.location}</p>
              <div className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Voir les photos
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;