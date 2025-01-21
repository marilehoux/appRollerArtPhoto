import React from 'react';

function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1595248842689-0166e4835984?auto=format&fit=crop&q=80"
          alt="Patinage artistique"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Capturez les moments magiques du patinage artistique
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Des photos professionnelles de haute qualité capturées lors des compétitions officielles de roller artistique.
        </p>
        <div className="mt-10">
          <a
            href="#gallery"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Voir la galerie
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;