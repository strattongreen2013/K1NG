
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
    navigate('/'); // Ensure we are on home to see results
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50 flex items-center px-4 md:px-8">
      <Link to="/" className="flex items-center gap-2 group mr-8">
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-500/20">
          <i className="fa-solid fa-gamepad text-white text-xl"></i>
        </div>
        <span className="text-xl font-black text-white hidden sm:inline-block tracking-tighter">
          GAMES<span className="text-indigo-500">HUB</span>
        </span>
      </Link>

      <div className="flex-1 max-w-2xl relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className="fa-solid fa-magnifying-glass text-slate-500"></i>
        </div>
        <input
          type="text"
          placeholder="Search games..."
          onChange={handleSearchChange}
          className="w-full bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
        />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-400 hover:text-white transition-colors"
        >
          <i className="fa-brands fa-github text-2xl"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
