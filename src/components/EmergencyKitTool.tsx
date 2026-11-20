import React, { useState } from 'react';
import { SURVIVAL_KIT_ITEMS } from '../data/disastersData';
import { CheckSquare, Square, Package, AlertCircle, RefreshCw, Printer, X } from 'lucide-react';

interface EmergencyKitToolProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyKitTool: React.FC<EmergencyKitToolProps> = ({ isOpen, onClose }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    air: true,
    senter: true,
    p3k: true
  });

  if (!isOpen) return null;

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalItems = SURVIVAL_KIT_ITEMS.length;
  const packedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((packedCount / totalItems) * 100);

  const resetAll = () => {
    setCheckedItems({});
  };

  const checkAll = () => {
    const all: Record<string, boolean> = {};
    SURVIVAL_KIT_ITEMS.forEach(it => { all[it.id] = true; });
    setCheckedItems(all);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 w-full max-w-4xl max-h-[90vh] shadow-2xl flex flex-col text-stone-900 dark:text-stone-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="kit-title"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-stone-800/80">
          <div className="flex items-center gap-2.5">
            <Package className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <div>
              <h2 id="kit-title" className="font-serif-wiki font-bold text-lg text-stone-900 dark:text-stone-100">
                Panduan & Checklist Tas Siaga Bencana (Survival Kit 72 Jam)
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Standar perlengkapan bertahan hidup mandiri selama 3 hari pertama sebelum bantuan tim penyelamat tiba
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 rounded-md hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Top Hero Card with Preparedness Visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/80 p-4">
            <div className="md:col-span-1 aspect-4/3 overflow-hidden border border-stone-300 dark:border-stone-700 bg-stone-200">
              <img
                src="/src/assets/images/emergency_preparedness_kit_1793600487283.jpg"
                alt="Tas Siaga Bencana Lengkap"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    Status Kesiapsiagaan Mandiri
                  </span>
                  <div className="text-2xl font-serif-wiki font-bold text-stone-900 dark:text-stone-100">
                    {packedCount} dari {totalItems} Barang Siap ({progressPercent}%)
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2.5 py-1 text-xs font-bold font-mono-wiki ${
                    progressPercent >= 80 
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                      : progressPercent >= 50
                      ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                      : 'bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300'
                  }`}>
                    {progressPercent >= 80 ? 'SIAP MENGHADAPI DARURAT' : progressPercent >= 50 ? 'CUKUP SIAP' : 'BELUM MEMADAI'}
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-stone-200 dark:bg-stone-700 h-2.5 overflow-hidden">
                <div
                  className="bg-emerald-600 dark:bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Tas Siaga Bencana (TSB) wajib diletakkan di tempat terbuka yang mudah diraih seketika (misalnya di dekat pintu keluar utama rumah). Tas harus kedap air dan dicek tanggal kedaluwarsa makanannya setiap 6 bulan sekali.
              </p>

              <div className="flex items-center gap-2 pt-1 no-print">
                <button
                  type="button"
                  onClick={checkAll}
                  className="px-2.5 py-1 text-xs border border-stone-300 dark:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors cursor-pointer"
                >
                  Centang Semua
                </button>
                <button
                  type="button"
                  onClick={resetAll}
                  className="px-2.5 py-1 text-xs border border-stone-300 dark:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset Checklist</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-2.5 py-1 text-xs bg-stone-800 text-white dark:bg-stone-200 dark:text-stone-900 hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-1 ml-auto"
                >
                  <Printer className="w-3 h-3" />
                  <span>Cetak Daftar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Checklist Grid */}
          <div className="space-y-3">
            <h3 className="font-semibold text-xs text-stone-500 uppercase tracking-wider border-b border-stone-200 dark:border-stone-800 pb-1">
              Daftar Perlengkapan Wajib dalam Ransel
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {SURVIVAL_KIT_ITEMS.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`flex items-start gap-3 p-2.5 border cursor-pointer transition-colors ${
                      isChecked
                        ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-900/60'
                        : 'bg-white dark:bg-stone-800/50 border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800'
                    }`}
                  >
                    <div className="mt-0.5 text-emerald-600 dark:text-emerald-400 shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4" />
                      ) : (
                        <Square className="w-4 h-4 text-stone-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-semibold ${isChecked ? 'text-stone-900 dark:text-stone-100 line-through opacity-75' : 'text-stone-900 dark:text-stone-100'}`}>
                          {item.nama}
                        </span>
                        {item.penting && (
                          <span className="text-[10px] text-amber-700 dark:text-amber-400 font-medium">
                            Krusial
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                        {item.jumlah}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Practical Advice Note */}
          <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/80 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
            <div>
              <p className="font-semibold">Catatan Khusus Bagi Keluarga:</p>
              <p className="mt-0.5 text-[11px] leading-relaxed">
                Bila memiliki bayi, lansia, atau anggota keluarga disabilitas, tambahkan kebutuhan khusus seperti popok bayi, susu formula, makanan bubur instan, dan obat resep dokter kronis (jantung/diabetes) untuk minimal 7 hari.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/80 flex items-center justify-between text-xs text-stone-500">
          <span>Panduan resmi Kesiapsiagaan BNPB Indonesia</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 hover:opacity-90 font-medium transition-opacity cursor-pointer"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};
