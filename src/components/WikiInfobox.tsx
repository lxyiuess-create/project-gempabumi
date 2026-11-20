import React from 'react';
import { DisasterItem } from '../types/disaster';
import { AlertTriangle, ShieldCheck, MapPin, Building, PhoneCall, Activity } from 'lucide-react';

interface WikiInfoboxProps {
  disaster: DisasterItem;
}

export const WikiInfobox: React.FC<WikiInfoboxProps> = ({ disaster }) => {
  const { infobox } = disaster;

  return (
    <aside className="w-full lg:w-80 shrink-0 border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-sm shadow-xs mb-8 lg:mb-0">
      {/* Infobox Header */}
      <div className="bg-stone-200 dark:bg-stone-800 px-4 py-2.5 text-center border-b border-stone-300 dark:border-stone-700">
        <h3 className="font-serif-wiki font-bold text-base text-stone-900 dark:text-stone-100">
          {disaster.name}
        </h3>
        <p className="text-xs italic text-stone-600 dark:text-stone-400 mt-0.5 font-serif-wiki">
          {disaster.scientificName}
        </p>
      </div>

      {/* Featured Image */}
      <div className="p-2 border-b border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950">
        <div className="relative aspect-16/9 overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-800">
          <img
            src={disaster.image}
            alt={disaster.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Graceful fallback container if asset path changes
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
        </div>
        <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 px-1 leading-snug font-serif-wiki italic text-center">
          {disaster.imageCaption}
        </p>
      </div>

      {/* Data Section Title */}
      <div className="bg-stone-100 dark:bg-stone-800/60 px-3 py-1 font-semibold text-xs text-stone-600 dark:text-stone-300 uppercase tracking-wider border-b border-stone-300 dark:border-stone-700">
        Ringkasan Karakteristik Ilmiah
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-stone-200 dark:divide-stone-800 text-xs">
        <div className="flex px-3 py-2">
          <span className="w-2/5 font-semibold text-stone-600 dark:text-stone-400">Klasifikasi</span>
          <span className="w-3/5 text-stone-900 dark:text-stone-100 font-medium">{infobox.kategori}</span>
        </div>

        <div className="flex px-3 py-2">
          <span className="w-2/5 font-semibold text-stone-600 dark:text-stone-400">Pemicu Utama</span>
          <span className="w-3/5 text-stone-900 dark:text-stone-100">{infobox.penyebabUtama}</span>
        </div>

        <div className="flex px-3 py-2">
          <span className="w-2/5 font-semibold text-stone-600 dark:text-stone-400">Skala Ukur</span>
          <span className="w-3/5 text-stone-900 dark:text-stone-100 font-mono-wiki tabular-nums">{infobox.skalaPengukuran}</span>
        </div>

        <div className="flex px-3 py-2 items-center">
          <span className="w-2/5 font-semibold text-stone-600 dark:text-stone-400">Tingkat Bahaya</span>
          <span className="w-3/5 flex items-center gap-1.5 font-medium text-amber-700 dark:text-amber-400">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
            <span>{infobox.tingkatBahaya}</span>
          </span>
        </div>

        <div className="flex px-3 py-2">
          <span className="w-2/5 font-semibold text-stone-600 dark:text-stone-400">Kecepatan Datang</span>
          <span className="w-3/5 text-stone-900 dark:text-stone-100">{infobox.kecepatanDatang}</span>
        </div>

        <div className="flex px-3 py-2">
          <span className="w-2/5 font-semibold text-stone-600 dark:text-stone-400">Wilayah Rawan</span>
          <span className="w-3/5 text-stone-900 dark:text-stone-100 flex items-start gap-1">
            <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
            <span>{infobox.wilayahRawan}</span>
          </span>
        </div>

        <div className="flex px-3 py-2">
          <span className="w-2/5 font-semibold text-stone-600 dark:text-stone-400">Instansi Pemantau</span>
          <span className="w-3/5 text-stone-900 dark:text-stone-100 flex items-start gap-1">
            <Building className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
            <span>{infobox.instansiPemantau}</span>
          </span>
        </div>

        <div className="flex px-3 py-2 bg-stone-100 dark:bg-stone-800/40">
          <span className="w-2/5 font-semibold text-stone-600 dark:text-stone-400">Hotline Darurat</span>
          <span className="w-3/5 font-mono-wiki font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1">
            <PhoneCall className="w-3.5 h-3.5 text-red-600 shrink-0" />
            <span>{infobox.nomorDarurat}</span>
          </span>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-2.5 bg-stone-100 dark:bg-stone-800/80 border-t border-stone-300 dark:border-stone-700 text-center">
        <span className="text-[11px] text-stone-500 dark:text-stone-400">
          Data diverifikasi standar BNPB & BMKG Indonesia
        </span>
      </div>
    </aside>
  );
};
