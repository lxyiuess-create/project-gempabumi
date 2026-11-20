import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, ListOrdered } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
  level?: number;
}

const SECTIONS: TOCItem[] = [
  { id: 'ringkasan', title: 'Ringkasan & Konsep' },
  { id: 'penjelasan', title: '1. Penjelasan Ilmiah & Mekanisme' },
  { id: 'ciri-ciri', title: '2. Ciri-ciri Bencana' },
  { id: 'tanda-awal', title: '3. Tanda-tanda Awal (Peringatan Dini)' },
  { id: 'mitigasi', title: '4. Cara Mitigasi & Pencegahan' },
  { id: 'dampak', title: '5. Analisis Dampak Kerusakan' },
  { id: 'studi-kasus', title: '6. Studi Kasus Bersejarah' },
  { id: 'referensi', title: '7. Referensi & Lembaga Terkait' }
];

export const TableOfContents: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('ringkasan');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = SECTIONS.map(sec => {
        const el = document.getElementById(sec.id);
        if (!el) return { id: sec.id, top: 0 };
        return { id: sec.id, top: el.getBoundingClientRect().top + scrollY - 120 };
      });

      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollY >= offsets[i].top - 20) {
          setActiveSection(offsets[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      aria-label="Daftar Isi Artikel"
      className="border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/90 rounded-none p-3.5 my-4 inline-block min-w-[280px] max-w-sm text-stone-800 dark:text-stone-200 text-xs shadow-xs"
    >
      <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
        <div className="flex items-center gap-1.5 font-bold text-stone-900 dark:text-stone-100">
          <ListOrdered className="w-4 h-4 text-stone-600 dark:text-stone-400" />
          <span>Daftar isi</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 text-xs font-mono cursor-pointer flex items-center gap-0.5 px-1 py-0.5"
          aria-expanded={isOpen}
        >
          <span>[{isOpen ? 'sembunyikan' : 'tampilkan'}]</span>
          {isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
        </button>
      </div>

      {isOpen && (
        <ol className="mt-2.5 space-y-1.5 font-sans leading-snug">
          {SECTIONS.map((sec) => (
            <li key={sec.id}>
              <button
                onClick={() => scrollTo(sec.id)}
                className={`text-left w-full hover:underline transition-colors cursor-pointer py-0.5 ${
                  activeSection === sec.id
                    ? 'font-bold text-blue-700 dark:text-blue-400'
                    : 'text-stone-700 dark:text-stone-300 hover:text-blue-600'
                }`}
              >
                {sec.title}
              </button>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
};
