import React, { useState } from 'react';
import { EMERGENCY_CONTACTS } from '../data/disastersData';
import { PhoneCall, Copy, Check, X, Shield, ExternalLink } from 'lucide-react';

interface EmergencyDirectoryProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyDirectory: React.FC<EmergencyDirectoryProps> = ({ isOpen, onClose }) => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 w-full max-w-2xl shadow-2xl flex flex-col text-stone-900 dark:text-stone-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dir-title"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-stone-800/80">
          <div className="flex items-center gap-2.5">
            <PhoneCall className="w-5 h-5 text-red-600 dark:text-red-400" />
            <div>
              <h2 id="dir-title" className="font-serif-wiki font-bold text-lg text-stone-900 dark:text-stone-100">
                Direktori Kontak Darurat Nasional Indonesia
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Layanan darurat terpadu 24 jam bebas pulsa dari semua operator telepon seluler
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 rounded-md hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer"
            aria-label="Tutup direktori"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Contacts */}
        <div className="p-6 divide-y divide-stone-200 dark:divide-stone-800 overflow-y-auto max-h-[70vh]">
          {EMERGENCY_CONTACTS.map((item) => (
            <div key={item.nomor} className="py-3.5 first:pt-0 last:pb-0 flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono-wiki text-xl font-bold text-red-600 dark:text-red-400">
                    {item.nomor}
                  </span>
                  <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                    {item.instansi}
                  </span>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopy(item.nomor)}
                  title="Salin nomor"
                  className="p-2 border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 transition-colors cursor-pointer text-xs flex items-center gap-1"
                >
                  {copiedNumber === item.nomor ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-[11px] text-emerald-600">Disalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Salin</span>
                    </>
                  )}
                </button>
                <a
                  href={`tel:${item.nomor}`}
                  className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>Panggil</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/80 flex items-center justify-between text-xs text-stone-500">
          <span>Simpan nomor-nomor ini pada panggilan cepat ponsel Anda</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
