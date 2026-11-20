import React, { useState, useRef, useEffect } from 'react';
import { DisasterItem } from '../types/disaster';
import { Search, Plus, Shuffle, Phone, ShieldCheck, Sun, Moon, Type, ChevronRight, BookOpen } from 'lucide-react';

interface HeaderProps {
  disasters: DisasterItem[];
  selectedDisasterId: string;
  onSelectDisaster: (id: string) => void;
  onOpenAddModal: () => void;
  onOpenKitModal: () => void;
  onOpenQuizModal: () => void;
  onOpenDirectoryModal: () => void;
  onSelectRandom: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  isLargeFont: boolean;
  onToggleFontSize: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  disasters,
  selectedDisasterId,
  onSelectDisaster,
  onOpenAddModal,
  onOpenKitModal,
  onOpenQuizModal,
  onOpenDirectoryModal,
  onSelectRandom,
  isDarkMode,
  onToggleDarkMode,
  isLargeFont,
  onToggleFontSize
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search suggestions on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredDisasters = disasters.filter((d) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return false;
    return (
      d.name.toLowerCase().includes(q) ||
      d.scientificName.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.tandaTandaAwal.some(t => t.gejala.toLowerCase().includes(q) || t.penjelasan.toLowerCase().includes(q)) ||
      d.ciriCiri.some(c => c.toLowerCase().includes(q)) ||
      d.infobox.wilayahRawan.toLowerCase().includes(q)
    );
  });

  const handleSelectFromSearch = (id: string) => {
    onSelectDisaster(id);
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  return (
    <header className="border-b border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900 sticky top-0 z-40 transition-colors shadow-2xs">
      {/* Top Bar strictly complying with 3-Zone Contract (§2) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (one line, single element) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onSelectDisaster(disasters[0]?.id || 'gempa-bumi');
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-none border border-stone-800 dark:border-stone-200 flex items-center justify-center bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-serif-wiki font-bold text-lg">
              W
            </div>
            <div className="flex flex-col">
              <span className="font-serif-wiki text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap shrink-0 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                WikiBencana
              </span>
              <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono-wiki -mt-1">
                Ensiklopedia Mitigasi
              </span>
            </div>
          </a>
        </div>

        {/* Zone 2: 4-5 single-line nav links (§2) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-stone-600 dark:text-stone-300">
          <button
            onClick={() => onSelectDisaster(selectedDisasterId)}
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Artikel Bencana
          </button>
          <button
            onClick={onOpenKitModal}
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Tas Siaga 72 Jam</span>
          </button>
          <button
            onClick={onOpenQuizModal}
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Simulasi Tanggap
          </button>
          <button
            onClick={onOpenDirectoryModal}
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1 text-red-700 dark:text-red-400 font-semibold"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Hotline 112 / Darurat</span>
          </button>
          <button
            onClick={onSelectRandom}
            title="Buka artikel acak"
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1 text-stone-500"
          >
            <Shuffle className="w-3 h-3" />
            <span>Artikel Acak</span>
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + Utility Tools */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Reader font size toggle */}
          <button
            onClick={onToggleFontSize}
            title="Ubah ukuran huruf pembaca"
            aria-label="Ubah ukuran teks bacaan"
            className="p-1.5 border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 transition-colors cursor-pointer text-xs flex items-center"
          >
            <Type className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono-wiki ml-1">{isLargeFont ? 'A+' : 'A'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={onToggleDarkMode}
            title="Ganti tema gelap / terang"
            aria-label="Ganti mode gelap"
            className="p-1.5 border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 transition-colors cursor-pointer"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary CTA: Masukan Bencana Baru (§2: 1 primary action) */}
          <button
            onClick={onOpenAddModal}
            className="px-3.5 py-2 text-xs font-medium text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-2xs cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Masukan Bencana</span>
          </button>
        </div>
      </div>

      {/* Wikipedia Classic Search & Category Strip */}
      <div className="bg-stone-50 dark:bg-stone-950/70 border-t border-stone-200 dark:border-stone-800 px-4 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Live Search Input with Suggestion Dropdown */}
          <div ref={searchContainerRef} className="relative w-full md:max-w-xl">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                placeholder="Cari bencana alam, tanda-tanda peringatan dini, atau cara mitigasi..."
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-none text-xs text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-hidden focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 text-stone-400 hover:text-stone-700 text-xs px-1 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Live Autocomplete Results */}
            {isSearchFocused && searchQuery.trim() && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 shadow-xl max-h-80 overflow-y-auto z-50 divide-y divide-stone-100 dark:divide-stone-800">
                {filteredDisasters.length > 0 ? (
                  filteredDisasters.map((d) => (
                    <div
                      key={d.id}
                      onClick={() => handleSelectFromSearch(d.id)}
                      className="p-3 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer transition-colors flex items-start gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-serif-wiki font-bold text-stone-900 dark:text-stone-100 text-sm">
                            {d.name}
                          </span>
                          <span className="text-xs text-stone-500 font-serif-wiki italic">
                            ({d.scientificName})
                          </span>
                          <span className="text-[10px] text-stone-400 font-mono-wiki ml-auto">
                            {d.category}
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-1 mt-0.5">
                          {d.quickSummary}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-stone-400 shrink-0 self-center" />
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-xs text-stone-500">
                    Tidak ditemukan bencana dengan kata kunci "{searchQuery}". Anda dapat memasukkannya melalui tombol "+ Masukan Bencana".
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Disaster Pills / Fast Switcher */}
          <div className="w-full md:w-auto flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
            <span className="text-stone-400 font-mono-wiki shrink-0 text-[11px] mr-1 hidden sm:inline">
              Jelajahi Cepat:
            </span>
            {disasters.slice(0, 6).map((d) => (
              <button
                key={d.id}
                onClick={() => onSelectDisaster(d.id)}
                className={`px-2.5 py-1 text-xs whitespace-nowrap shrink-0 transition-colors cursor-pointer border ${
                  selectedDisasterId === d.id
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 font-medium'
                    : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:border-stone-400'
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
