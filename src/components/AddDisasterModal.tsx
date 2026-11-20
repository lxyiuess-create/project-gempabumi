import React, { useState } from 'react';
import { DisasterItem, DisasterCategory } from '../types/disaster';
import { X, Plus, AlertCircle, CheckCircle2, BookOpen } from 'lucide-react';

interface AddDisasterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDisaster: (disaster: DisasterItem) => void;
}

export const AddDisasterModal: React.FC<AddDisasterModalProps> = ({
  isOpen,
  onClose,
  onAddDisaster
}) => {
  const [name, setName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [category, setCategory] = useState<DisasterCategory>('Geologis');
  const [quickSummary, setQuickSummary] = useState('');
  const [penjelasan, setPenjelasan] = useState('');
  const [ciriCiriText, setCiriCiriText] = useState('');
  
  // Tanda tanda awal
  const [tandaGejala, setTandaGejala] = useState('');
  const [tandaPenjelasan, setTandaPenjelasan] = useState('');
  const [tandaWaktu, setTandaWaktu] = useState('');

  // Mitigasi
  const [mitigasiPra, setMitigasiPra] = useState('');
  const [mitigasiSaat, setMitigasiSaat] = useState('');
  const [mitigasiPasca, setMitigasiPasca] = useState('');

  // Dampak
  const [dampakFisik, setDampakFisik] = useState('');
  const [dampakEkologis, setDampakEkologis] = useState('');
  const [dampakSosial, setDampakSosial] = useState('');

  // Infobox
  const [penyebab, setPenyebab] = useState('');
  const [skala, setSkala] = useState('');
  const [wilayah, setWilayah] = useState('');
  const [instansi, setInstansi] = useState('');

  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !quickSummary.trim() || !penjelasan.trim()) {
      setError('Mohon lengkapi Nama Bencana, Ringkasan, dan Penjelasan Ilmiah.');
      return;
    }

    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const newDisaster: DisasterItem = {
      id: id || `bencana-${Date.now()}`,
      name: name.trim(),
      scientificName: scientificName.trim() || 'Phenomenon Naturale',
      category,
      image: '/src/assets/images/gempa_earthquake_fault_1793600486920.jpg',
      imageCaption: `Dokumentasi fenomena ${name.trim()} dan observasi mitigasi lapangan.`,
      quickSummary: quickSummary.trim(),
      penjelasanLengkap: penjelasan
        .split('\n\n')
        .map(p => p.trim())
        .filter(Boolean),
      ciriCiri: ciriCiriText
        .split('\n')
        .map(c => c.trim())
        .filter(Boolean),
      tandaTandaAwal: [
        {
          gejala: tandaGejala.trim() || 'Anomali Lingkungan Awal',
          penjelasan: tandaPenjelasan.trim() || 'Tanda-tanda perubahan fisik dan sensoris sebelum kejadian.',
          rentangWaktu: tandaWaktu.trim() || 'Beberapa jam sebelum kejadian'
        }
      ],
      mitigasi: {
        praBencana: mitigasiPra.split('\n').map(m => m.trim()).filter(Boolean),
        saatBencana: mitigasiSaat.split('\n').map(m => m.trim()).filter(Boolean),
        pascaBencana: mitigasiPasca.split('\n').map(m => m.trim()).filter(Boolean)
      },
      dampak: {
        fisik: dampakFisik.split('\n').map(d => d.trim()).filter(Boolean),
        ekologis: dampakEkologis.split('\n').map(d => d.trim()).filter(Boolean),
        sosioEkonomi: dampakSosial.split('\n').map(d => d.trim()).filter(Boolean)
      },
      infobox: {
        kategori: category,
        penyebabUtama: penyebab.trim() || 'Dinamika geofisika/klimatologis bumi',
        skalaPengukuran: skala.trim() || 'Standar observasi BNPB/BMKG',
        tingkatBahaya: 'Tinggi',
        kecepatanDatang: 'Cepat s.d. Bertahap',
        wilayahRawan: wilayah.trim() || 'Wilayah rawan di kepulauan Indonesia',
        instansiPemantau: instansi.trim() || 'BNPB / BMKG / PVMBG',
        nomorDarurat: '112, 115, 117'
      },
      studiKasus: [
        {
          peristiwa: `Catatan Peristiwa ${name.trim()}`,
          tahun: new Date().getFullYear(),
          lokasi: wilayah.trim() || 'Indonesia',
          magnitudoAtauDampak: 'Dampak tercatat lapangan',
          ringkasan: `Dokumentasi penanganan dan mitigasi terpadu peristiwa ${name.trim()}.`
        }
      ],
      referensi: [
        {
          nomor: 1,
          penulis: 'Kontributor WikiBencana',
          judul: `Kajian Mitigasi dan Tanda Awal ${name.trim()}`,
          penerbit: 'Ensiklopedia Terbuka Bencana Alam',
          tahun: 2026
        }
      ],
      terakhirDiperbarui: 'Hari Ini (Baru Ditambahkan)',
      isCustom: true
    };

    onAddDisaster(newDisaster);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 w-full max-w-3xl my-8 shadow-xl text-stone-900 dark:text-stone-100 flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-stone-800/80">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-700 dark:text-blue-400" />
            <div>
              <h2 id="modal-title" className="font-serif-wiki font-bold text-lg text-stone-900 dark:text-stone-100">
                Masukan Data & Penjelasan Bencana Baru
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Dokumentasikan bencana alam beserta tanda awal, ciri fisik, dan mitigasinya ke dalam ensiklopedia
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 rounded-md hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer"
            aria-label="Tutup formulir"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 text-sm">
          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Section 1: Identitas Bencana */}
          <div className="space-y-4">
            <h3 className="font-semibold text-stone-900 dark:text-stone-100 border-b border-stone-200 dark:border-stone-800 pb-1 text-xs uppercase tracking-wider text-stone-500">
              01. Identitas & Klasifikasi Bencana
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Nama Bencana Alam *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Gelombang Panas Ekstrem, Semburan Lumpur"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Klasifikasi Kategori
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as DisasterCategory)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-sm"
                >
                  <option value="Geologis">Geologis</option>
                  <option value="Hidrologis">Hidrologis</option>
                  <option value="Meteorologis & Klimatologis">Meteorologis & Klimatologis</option>
                  <option value="Vulkanologis">Vulkanologis</option>
                  <option value="Kompleks">Kompleks</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Nama Ilmiah / Latin
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Unda Caloris / Fenomena Termal"
                  value={scientificName}
                  onChange={(e) => setScientificName(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Penyebab Utama Terjadinya
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Kubah tekanan tinggi statis, anomali sirkulasi Hadley"
                  value={penyebab}
                  onChange={(e) => setPenyebab(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Penjelasan Ensiklopedis */}
          <div className="space-y-4">
            <h3 className="font-semibold text-stone-900 dark:text-stone-100 border-b border-stone-200 dark:border-stone-800 pb-1 text-xs uppercase tracking-wider text-stone-500">
              02. Ringkasan & Penjelasan Ilmiah
            </h3>

            <div>
              <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                Ringkasan Pembuka (1-2 Kalimat) *
              </label>
              <textarea
                rows={2}
                required
                placeholder="Penjelasan ringkas bergaya ensiklopedia tentang apa itu bencana ini..."
                value={quickSummary}
                onChange={(e) => setQuickSummary(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                Penjelasan Lengkap & Mekanisme Terjadinya * (Pisahkan antar paragraf dengan 2 enter)
              </label>
              <textarea
                rows={4}
                required
                placeholder="Mekanisme sains pembentukan bencana, klasifikasi tipe-tipenya, dan proses perambatannya..."
                value={penjelasan}
                onChange={(e) => setPenjelasan(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                Ciri-ciri Bencana saat Terjadi (Satu ciri per baris)
              </label>
              <textarea
                rows={3}
                placeholder="Guncangan mendadak berfrekuensi tinggi&#10;Suhu udara melonjak di atas 40°C&#10;Bau belerang pekat tercium di sekitar"
                value={ciriCiriText}
                onChange={(e) => setCiriCiriText(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-sm"
              />
            </div>
          </div>

          {/* Section 3: Tanda-tanda Awal (Peringatan Dini) */}
          <div className="space-y-4">
            <h3 className="font-semibold text-stone-900 dark:text-stone-100 border-b border-stone-200 dark:border-stone-800 pb-1 text-xs uppercase tracking-wider text-stone-500">
              03. Tanda-Tanda Awal Sebelum Bencana Datang
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Gejala / Fenomena Awal
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Air sumur mendadak surut / hewan gelisah"
                  value={tandaGejala}
                  onChange={(e) => setTandaGejala(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Rentang Waktu Terdeteksi
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Beberapa jam hingga hari sebelum kejadian"
                  value={tandaWaktu}
                  onChange={(e) => setTandaWaktu(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Penjelasan Ilmiah Gejala
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Deformasi mikro batuan menekan akuifer tanah"
                  value={tandaPenjelasan}
                  onChange={(e) => setTandaPenjelasan(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Panduan Mitigasi */}
          <div className="space-y-4">
            <h3 className="font-semibold text-stone-900 dark:text-stone-100 border-b border-stone-200 dark:border-stone-800 pb-1 text-xs uppercase tracking-wider text-stone-500">
              04. Cara Mitigasi & Langkah Penyelamatan Diri
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Pra-Bencana (Kesiapsiagaan)
                </label>
                <textarea
                  rows={3}
                  placeholder="Langkah pencegahan satu per baris..."
                  value={mitigasiPra}
                  onChange={(e) => setMitigasiPra(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Saat Terjadi (Respon Darurat)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tindakan penyelamatan langsung..."
                  value={mitigasiSaat}
                  onChange={(e) => setMitigasiSaat(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Pasca-Bencana (Pemulihan)
                </label>
                <textarea
                  rows={3}
                  placeholder="Langkah evakuasi dan pencegahan risiko susulan..."
                  value={mitigasiPasca}
                  onChange={(e) => setMitigasiPasca(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-xs"
                />
              </div>
            </div>
          </div>

          {/* Section 5: Dampak Kerusakan & Data Infobox */}
          <div className="space-y-4">
            <h3 className="font-semibold text-stone-900 dark:text-stone-100 border-b border-stone-200 dark:border-stone-800 pb-1 text-xs uppercase tracking-wider text-stone-500">
              05. Dampak Kerusakan & Wilayah Rawan
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Dampak Fisik Infrastruktur
                </label>
                <input
                  type="text"
                  placeholder="Kerusakan jembatan, rumah amblas"
                  value={dampakFisik}
                  onChange={(e) => setDampakFisik(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Dampak Ekologis Lingkungan
                </label>
                <input
                  type="text"
                  placeholder="Erosi tanah, kontaminasi air"
                  value={dampakEkologis}
                  onChange={(e) => setDampakEkologis(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Dampak Sosio-Ekonomi
                </label>
                <input
                  type="text"
                  placeholder="Korban jiwa, pengungsi, gagal panen"
                  value={dampakSosial}
                  onChange={(e) => setDampakSosial(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Skala Pengukuran
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Indeks Suhu / Celsius / MMI"
                  value={skala}
                  onChange={(e) => setSkala(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Wilayah Rawan di Indonesia
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Pesisir utara Jawa, NTT, Nusa Tenggara"
                  value={wilayah}
                  onChange={(e) => setWilayah(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Instansi Pemantau
                </label>
                <input
                  type="text"
                  placeholder="Contoh: BMKG, BNPB, BRIN"
                  value={instansi}
                  onChange={(e) => setInstansi(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-none focus:outline-hidden focus:ring-1 focus:ring-blue-600 text-stone-900 dark:text-stone-100 text-xs"
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-stone-300 dark:border-stone-700 text-xs font-medium hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Simpan ke Ensiklopedia</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
