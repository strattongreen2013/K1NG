
import React, { useState, useMemo } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GameGrid from './components/GameGrid';
import GamePlayer from './components/GamePlayer';
import { GAMES } from './constants';
import { Category } from './types';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredGames = useMemo(() => {
    return GAMES.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar onSearch={setSearchQuery} />
        
        <div className="flex flex-1 pt-16">
          <Sidebar 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
          
          <main className="flex-1 ml-0 md:ml-64 p-4 md:p-8 overflow-y-auto">
            <Routes>
              <Route path="/" element={
                <section>
                  <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-white mb-2">
                      Explore Games
                    </h1>
                    <p className="text-slate-400">
                      Found {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'} 
                      {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
                    </p>
                  </div>
                  
                  {filteredGames.length > 0 ? (
                    <GameGrid games={filteredGames} />
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                        <i className="fa-solid fa-ghost text-3xl text-slate-500"></i>
                      </div>
                      <h3 className="text-xl font-semibold text-white">No games found</h3>
                      <p className="text-slate-400 mt-2">Try adjusting your search or category filter.</p>
                      <button 
                        onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                        className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  )}
                </section>
              } />
              
              <Route path="/game/:id" element={<GamePlayer />} />
            </Routes>
          </main>
        </div>

        <footer className="border-t border-slate-800 p-6 md:ml-64 text-center text-slate-500 text-sm">
          <p>© 2024 Unblocked Games Hub. For educational purposes only.</p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
