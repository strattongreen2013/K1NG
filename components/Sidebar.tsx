import React from 'react';
import { Category } from '../types.ts';
import { CATEGORIES } from '../constants.ts';
import { useLocation } from 'react-router-dom';

interface SidebarProps {
  activeCategory: Category;
  setActiveCategory: (cat: Category) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, setActiveCategory }) => {
  const location = useLocation();

  const getIcon = (cat: Category) => {
    switch(cat) {
      case 'Action': return 'fa-bolt';
      case 'Puzzle': return 'fa-puzzle-piece';
      case 'Sports': return 'fa-medal';
      case 'Arcade': return 'fa-ghost';
      case 'Adventure': return 'fa-compass';
      case 'Strategy': return 'fa-chess-rook';
      default: return 'fa-fire';
    }
  };

  return (
    <aside className="fixed left-0 w-64 h-full bg-slate-900 border-r border-slate-800 pt-8 px-4 hidden md:block">
      <div className="mb-6">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4 mb-4">
          Categories
        </p>
        <div className="space-y-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-indigo-600/10 text-indigo-500' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <i className={`fa-solid ${getIcon(cat)} w-5`}></i>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 p-4 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-2xl border border-indigo-500/20">
        <h4 className="text-white font-semibold mb-2">Submit a Game</h4>
        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          Found a game that should be on our list? Let us know!
        </p>
        <button className="w-full py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-500 transition-colors">
          Contact Support
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;