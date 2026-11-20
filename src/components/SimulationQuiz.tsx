import React, { useState } from 'react';
import { DRILL_QUESTIONS } from '../data/disastersData';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, X, ShieldAlert } from 'lucide-react';

interface SimulationQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SimulationQuiz: React.FC<SimulationQuizProps> = ({ isOpen, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQ = DRILL_QUESTIONS[currentIdx];

  const handleSelect = (idx: number) => {
    if (showExplanation) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    if (currentQ.opsi[idx].correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    if (currentIdx + 1 < DRILL_QUESTIONS.length) {
      setCurrentIdx(i => i + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 w-full max-w-2xl shadow-2xl flex flex-col text-stone-900 dark:text-stone-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sim-title"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-stone-800/80">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <div>
              <h2 id="sim-title" className="font-serif-wiki font-bold text-lg text-stone-900 dark:text-stone-100">
                Simulasi Latihan Respon Cepat Bencana
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Uji refleks penyelamatan diri Anda berdasarkan protokol keselamatan mitigasi bencana internasional
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
        <div className="p-6 text-sm">
          {!completed ? (
            <div className="space-y-5">
              <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-200 dark:border-stone-800 pb-2">
                <span>Skenario {currentIdx + 1} dari {DRILL_QUESTIONS.length}</span>
                <span className="font-mono-wiki">Skor Saat Ini: {score} Poin</span>
              </div>

              {/* Scenario Box */}
              <div className="p-4 bg-stone-100 dark:bg-stone-800/60 border-l-2 border-stone-400 dark:border-stone-600">
                <p className="font-serif-wiki font-medium text-stone-900 dark:text-stone-100 leading-relaxed text-base">
                  "{currentQ.skenario}"
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wider">
                  Pilih Tindakan Terbaik Anda:
                </p>
                {currentQ.opsi.map((op, idx) => {
                  let btnStyle = 'border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800';
                  if (showExplanation) {
                    if (op.correct) {
                      btnStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-700 text-emerald-900 dark:text-emerald-100';
                    } else if (selectedOption === idx) {
                      btnStyle = 'bg-red-50 dark:bg-red-950/40 border-red-400 dark:border-red-700 text-red-900 dark:text-red-100';
                    } else {
                      btnStyle = 'opacity-50 border-stone-200 dark:border-stone-800';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={showExplanation}
                      className={`w-full text-left p-3 border transition-colors flex items-start gap-3 cursor-pointer ${btnStyle}`}
                    >
                      <span className="w-5 h-5 rounded-full border border-stone-400 dark:border-stone-500 flex items-center justify-center shrink-0 text-xs font-mono font-medium">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 text-xs leading-relaxed font-sans">{op.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation Note */}
              {showExplanation && selectedOption !== null && (
                <div className={`p-4 border text-xs space-y-1.5 ${
                  currentQ.opsi[selectedOption].correct
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                    : 'bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-800 text-red-900 dark:text-red-200'
                }`}>
                  <div className="flex items-center gap-1.5 font-bold">
                    {currentQ.opsi[selectedOption].correct ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Jawaban Tepat!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                        <span>Pilihan Kurang Tepat</span>
                      </>
                    )}
                  </div>
                  <p className="leading-relaxed">
                    {currentQ.opsi[selectedOption].explanation}
                  </p>
                </div>
              )}

              {/* Next Button */}
              {showExplanation && (
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNext}
                    className="px-5 py-2 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 hover:opacity-90 text-xs font-medium cursor-pointer transition-opacity"
                  >
                    {currentIdx + 1 < DRILL_QUESTIONS.length ? 'Skenario Berikutnya →' : 'Lihat Hasil Akhir'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-serif-wiki font-bold text-xl text-stone-900 dark:text-stone-100">
                Simulasi Selesai!
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Skor Ketepatan Keputusan Anda: <span className="font-bold text-stone-900 dark:text-stone-100 font-mono-wiki">{score} / {DRILL_QUESTIONS.length}</span>
              </p>
              <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
                Ingat bahwa dalam situasi darurat nyata, kecepatan berpikir jernih dan kepatuhan pada protokol evakuasi adalah kunci utama penyelamatan diri keluarga.
              </p>
              <div className="flex items-center justify-center gap-3 pt-4">
                <button
                  onClick={handleRestart}
                  className="px-4 py-2 border border-stone-300 dark:border-stone-700 text-xs font-medium hover:bg-stone-100 dark:hover:bg-stone-800 flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulangi Simulasi</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 text-xs font-medium hover:opacity-90 cursor-pointer"
                >
                  Kembali ke Ensiklopedia
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
