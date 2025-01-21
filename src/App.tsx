import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Camera, ShoppingCart, User, Search } from 'lucide-react';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import CompetitionDetails from './components/CompetitionDetails';
import CompetitorPhotos from './components/CompetitorPhotos';
import ProgramPhotos from './components/ProgramPhotos';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link to="/" className="flex items-center">
                <Camera className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">RollerArt Photos</span>
              </Link>
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-900">
                  <Search className="h-6 w-6" />
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <ShoppingCart className="h-6 w-6" />
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <User className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Gallery />
              </>
            } />
            <Route path="/competitions/:id" element={<CompetitionDetails />} />
            <Route path="/competitors/:id" element={<CompetitorPhotos />} />
            <Route path="/competitors/:competitorId/programs/:programId" element={<ProgramPhotos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;