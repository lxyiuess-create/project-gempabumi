/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { INITIAL_DISASTERS } from './data/disastersData';
import { DisasterItem } from './types/disaster';
import { Header } from './components/Header';
import { ArticleView } from './components/ArticleView';
import { AddDisasterModal } from './components/AddDisasterModal';
import { EmergencyKitTool } from './components/EmergencyKitTool';
import { SimulationQuiz } from './components/SimulationQuiz';
import { EmergencyDirectory } from './components/EmergencyDirectory';
import { Shield, BookOpen, HeartHandshake, PhoneCall } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'wikibencana_custom_disasters_v1';

export default function App() {
  const [disasters, setDisasters] = useState<DisasterItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge initial with custom
          const customOnly = parsed.filter(p => p.isCustom);
          return [...INITIAL_DISASTERS, ...customOnly];
        }
      }
    } catch {
      // Ignore parse error and fallback to initial
    }
    return INITIAL_DISASTERS;
  });

  const [selectedDisasterId, setSelectedDisasterId] = useState<string>('gempa-bumi');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [isLargeFont, setIsLargeFont] = useState<boolean>(false);

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isKitModalOpen, setIsKitModalOpen] = useState<boolean>(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState<boolean>(false);
  const [isDirectoryModalOpen, setIsDirectoryModalOpen] = useState<boolean>(false);

  // Sync dark class on documentElement
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Persist custom disasters to localStorage
  const handleAddDisaster = (newDisaster: DisasterItem) => {
    setDisasters(prev => {
      const updated = [newDisaster, ...prev];
      const customOnly = updated.filter(d => d.isCustom);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(customOnly));
      } catch {
        // quota exceeded fallback
      }
      return updated;
    });
    setSelectedDisasterId(newDisaster.id);
  };

  const handleSelectRandom = () => {
    const randomIndex = Math.floor(Math.random() * disasters.length);
    setSelectedDisasterId(disasters[randomIndex].id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentDisaster = disasters.find(d => d.id === selectedDisasterId) || disasters[0];

  return (
    <div className="min-h-screen bg-stone-100/60 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans transition-colors selection:bg-blue-100 dark:selection:bg-blue-900">
      {/* Top Bar with Wikipedia Search & Navigation */}
      <Header
        disasters={disasters}
        selectedDisasterId={selectedDisasterId}
        onSelectDisaster={(id) => {
          setSelectedDisasterId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onOpenKitModal={() => setIsKitModalOpen(true)}
        onOpenQuizModal={() => setIsQuizModalOpen(true)}
        onOpenDirectoryModal={() => setIsDirectoryModalOpen(true)}
        onSelectRandom={handleSelectRandom}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(prev => !prev)}
        isLargeFont={isLargeFont}
        onToggleFontSize={() => setIsLargeFont(prev => !prev)}
      />

      {/* Main Encyclopedic Article Canvas */}
      <main className="flex-1 bg-white dark:bg-stone-900 border-x border-stone-200 dark:border-stone-800 max-w-7xl mx-auto w-full shadow-xs my-0 sm:my-4">
        <ArticleView
          disaster={currentDisaster}
          isLargeFont={isLargeFont}
          onOpenKitModal={() => setIsKitModalOpen(true)}
          onOpenQuizModal={() => setIsQuizModalOpen(true)}
        />
      </main>

      {/* Wikipedia Classic Encyclopedic Footer */}
      <footer className="border-t border-stone-300 dark:border-stone-800 bg-stone-100 dark:bg-stone-950 text-stone-600 dark:text-stone-400 py-8 px-4 sm:px-6 text-xs no-print">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-serif-wiki font-bold text-base text-stone-900 dark:text-stone-100">
                WikiBencana Alam
              </span>
              <span className="text-stone-400">·</span>
              <span>Inisiatif Literasi & Mitigasi Kebencanaan Indonesia</span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono-wiki">
              <button
                onClick={() => setIsDirectoryModalOpen(true)}
                className="hover:underline flex items-center gap-1 text-red-700 dark:text-red-400 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Pusat Panggilan 112</span>
              </button>
              <button
                onClick={() => setIsKitModalOpen(true)}
                className="hover:underline cursor-pointer"
              >
                Panduan Tas Siaga
              </button>
              <button
                onClick={() => setIsQuizModalOpen(true)}
                className="hover:underline cursor-pointer"
              >
                Latihan Simulasi
              </button>
            </div>
          </div>

          <p className="leading-relaxed">
            Teks dalam ensiklopedia ini disediakan di bawah Lisensi Dokumentasi Bebas GNU dan Lisensi Creative Commons Attribution-ShareAlike 4.0. Konten mitigasi dirangkum dari data resmi Badan Nasional Penanggulangan Bencana (BNPB), Badan Meteorologi Klimatologi dan Geofisika (BMKG), Pusat Vulkanologi dan Mitigasi Bencana Geologi (PVMBG), dan pedoman kegawatdaruratan internasional.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-stone-500 dark:text-stone-500 pt-2">
            <span>Kebijakan Privasi</span>
            <span>·</span>
            <span>Tentang WikiBencana</span>
            <span>·</span>
            <span>Penyangkalan Ilmiah (Disclaimer)</span>
            <span>·</span>
            <span>Kode Etik Evakuasi Mandiri</span>
            <span className="ml-auto font-mono-wiki">© 2026 WikiBencana Alam</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AddDisasterModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddDisaster={handleAddDisaster}
      />

      <EmergencyKitTool
        isOpen={isKitModalOpen}
        onClose={() => setIsKitModalOpen(false)}
      />

      <SimulationQuiz
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
      />

      <EmergencyDirectory
        isOpen={isDirectoryModalOpen}
        onClose={() => setIsDirectoryModalOpen(false)}
      />
    </div>
  );
}
