import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { GAMES } from '../constants.ts';

const GamePlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const game = GAMES.find(g => g.id === id);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
  }, [id]);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Game Not Found</h2>
        <Link to="/" className="text-indigo-500 hover:underline">Return Home</Link>
      </div>
    );
  }

  const toggleFullscreen = () => {
    const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
    if (iframe) {
      if (!document.fullscreenElement) {
        iframe.requestFullscreen().catch(err => {
          alert(`Error attempting to enable full-screen mode: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-6 flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <i className="fa-solid fa-arrow-left"></i>
          Back
        </button>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.location.reload()}
            className="w-10 h-10 bg-slate-800 text-slate-400 rounded-lg flex items-center justify-center hover:bg-slate-700 hover:text-white transition-all"
            title="Reload Game"
          >
            <i className="fa-solid fa-rotate-right"></i>
          </button>
          <button 
            onClick={toggleFullscreen}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2 text-sm font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
          >
            <i className="fa-solid fa-expand"></i>
            Fullscreen
          </button>
        </div>
      </div>

      <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl border border-slate-800 ring-1 ring-slate-700/50 aspect-video md:aspect-auto md:h-[600px]">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 z-10">
            <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-400 animate-pulse">Loading {game.title}...</p>
          </div>
        )}
        <iframe
          id="game-iframe"
          src={game.url}
          className="w-full h-full border-none"
          onLoad={() => setIsLoading(false)}
          title={game.title}
          allowFullScreen
          allow="autoplay; fullscreen"
        ></iframe>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-black text-white">{game.title}</h1>
              <div className="flex items-center gap-2 text-yellow-500 font-bold bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
                <i className="fa-solid fa-star"></i>
                {game.rating}
              </div>
            </div>
            
            <div className="flex gap-2 mb-6 flex-wrap">
              {game.tags.map(tag => (
                <span key={tag} className="bg-slate-800 text-slate-300 text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-wider">
                  #{tag}
                </span>
              ))}
            </div>

            <h4 className="text-lg font-bold text-white mb-2">Description</h4>
            <p className="text-slate-400 leading-relaxed mb-6">
              {game.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
              <div className="flex flex-col">
                <span className="text-slate-500 text-[10px] font-bold uppercase mb-1 tracking-tighter">Category</span>
                <span className="text-white font-medium">{game.category}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 text-[10px] font-bold uppercase mb-1 tracking-tighter">Status</span>
                <span className="text-green-500 font-medium">Unblocked</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 text-[10px] font-bold uppercase mb-1 tracking-tighter">Platform</span>
                <span className="text-white font-medium">Web Browser</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 text-[10px] font-bold uppercase mb-1 tracking-tighter">Players</span>
                <span className="text-white font-medium">Single Player</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <i className="fa-solid fa-share-nodes text-indigo-500"></i>
              Share
            </h4>
            <div className="grid grid-cols-4 gap-2">
              <button className="h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 text-white transition-all">
                <i className="fa-brands fa-facebook"></i>
              </button>
              <button className="h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 text-white transition-all">
                <i className="fa-brands fa-x-twitter"></i>
              </button>
              <button className="h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 text-white transition-all">
                <i className="fa-brands fa-whatsapp"></i>
              </button>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }}
                className="h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 text-white transition-all"
              >
                <i className="fa-solid fa-link"></i>
              </button>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h4 className="text-white font-bold mb-4">You might also like</h4>
            <div className="space-y-4">
              {GAMES.filter(g => g.id !== id).slice(0, 3).map(related => (
                <Link 
                  key={related.id} 
                  to={`/game/${related.id}`}
                  className="flex gap-4 group"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={related.thumbnail} 
                      alt={related.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className="text-white font-bold text-sm group-hover:text-indigo-400 transition-colors">
                      {related.title}
                    </h5>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">{related.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlayer;