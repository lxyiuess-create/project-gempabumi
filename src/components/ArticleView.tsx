import React, { useState } from 'react';
import { DisasterItem } from '../types/disaster';
import { WikiInfobox } from './WikiInfobox';
import { TableOfContents } from './TableOfContents';
import { 
  Printer, 
  Share2, 
  Bookmark, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  HelpCircle,
  ExternalLink,
  ChevronRight,
  PackageCheck
} from 'lucide-react';

interface ArticleViewProps {
  disaster: DisasterItem;
  isLargeFont: boolean;
  onOpenKitModal: () => void;
  onOpenQuizModal: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  disaster,
  isLargeFont,
  onOpenKitModal,
  onOpenQuizModal
}) => {
  const [activeTab, setActiveTab] = useState<'baca' | 'sumber' | 'riwayat'>('baca');
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  const fontClass = isLargeFont ? 'text-lg leading-relaxed' : 'text-base leading-normal';

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-stone-900 dark:text-stone-100">
      {/* Top Wikipedia Breadcrumb / Namespace Row */}
      <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2 mb-4 text-xs text-stone-500 dark:text-stone-400 no-print">
        <div className="flex items-center gap-1.5 font-sans">
          <span>Ensiklopedia</span>
          <span>/</span>
          <span>Mitigasi Bencana Alam</span>
          <span>/</span>
          <span className="text-stone-900 dark:text-stone-100 font-medium">{disaster.name}</span>
        </div>

        {/* Tab Controls (Baca, Lihat Sumber, Riwayat) */}
        <div className="flex items-center gap-4 text-xs">
          <button
            onClick={() => setActiveTab('baca')}
            className={`pb-1 border-b-2 cursor-pointer transition-colors ${
              activeTab === 'baca'
                ? 'border-blue-600 text-blue-700 dark:text-blue-400 font-bold'
                : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            Baca Artikel
          </button>
          <button
            onClick={() => setActiveTab('sumber')}
            className={`pb-1 border-b-2 cursor-pointer transition-colors ${
              activeTab === 'sumber'
                ? 'border-blue-600 text-blue-700 dark:text-blue-400 font-bold'
                : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            Sumber Ilmiah ({disaster.referensi.length})
          </button>
          <button
            onClick={() => setActiveTab('riwayat')}
            className={`pb-1 border-b-2 cursor-pointer transition-colors ${
              activeTab === 'riwayat'
                ? 'border-blue-600 text-blue-700 dark:text-blue-400 font-bold'
                : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            Riwayat Peristiwa ({disaster.studiKasus.length})
          </button>
        </div>
      </div>

      {/* Main Title & Pronunciation Header */}
      <header className="border-b border-stone-300 dark:border-stone-700 pb-3 mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-serif-wiki text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 dark:text-stone-100">
              {disaster.name}
            </h1>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-2 font-serif-wiki">
              <span className="italic font-medium">{disaster.scientificName}</span>
              {disaster.pronunciation && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-wiki text-xs">{disaster.pronunciation}</span>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span>Klasifikasi: {disaster.category}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 no-print shrink-0">
            <button
              onClick={handlePrint}
              title="Cetak panduan mitigasi bencana ini"
              className="px-3 py-1.5 border border-stone-300 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={handleShare}
              title="Salin tautan artikel"
              className="px-3 py-1.5 border border-stone-300 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedUrl ? 'Tersalin!' : 'Bagikan'}</span>
            </button>
          </div>
        </div>

        {/* Clean Metadata line without pills (§1.A) */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mt-2 pt-2 border-t border-stone-100 dark:border-stone-800">
          <span>Terakhir diselaraskan: {disaster.terakhirDiperbarui}</span>
          <span aria-hidden="true">·</span>
          <span>Waktu baca ~6 menit</span>
          <span aria-hidden="true">·</span>
          <span>Standar Edukasi BNPB RI</span>
          {disaster.isCustom && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">Entri Ditambahkan Pengguna</span>
            </>
          )}
        </div>
      </header>

      {/* Encyclopedic Advisory Banner */}
      <aside 
        aria-label="Pemberitahuan Mitigasi Darurat"
        className="mb-6 p-3.5 bg-stone-50 dark:bg-stone-800/50 border border-stone-300 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300 flex items-start gap-3"
      >
        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="text-stone-900 dark:text-stone-100 font-semibold">
            Pemberitahuan Kesiapsiagaan & Mitigasi Resmi:
          </strong>{' '}
          Informasi dalam artikel ini dirancang sebagai panduan edukasi pencegahan dan penyelamatan diri mandiri. Bila Anda berada dalam situasi bencana darurat aktif, prioritaskan keselamatan jiwa seketika dan hubungi Layanan Darurat Terpadu{' '}
          <strong className="font-mono-wiki text-stone-900 dark:text-stone-100">112</strong> atau Basarnas{' '}
          <strong className="font-mono-wiki text-stone-900 dark:text-stone-100">115</strong>.
        </div>
      </aside>

      {/* Main 2-Column Encyclopedic Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Main Content Column */}
        <div className="flex-1 min-w-0 max-w-prose lg:max-w-3xl space-y-8">
          {/* § Ringkasan & Lead Paragraph with Editorial Drop Cap */}
          <section id="ringkasan" className="space-y-4">
            <p className={`font-serif-wiki text-stone-800 dark:text-stone-200 leading-relaxed ${fontClass} first-letter:text-5xl first-letter:font-serif-wiki first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900 dark:first-letter:text-stone-100`}>
              {disaster.quickSummary}
            </p>
          </section>

          {/* Collapsible Table of Contents */}
          <TableOfContents />

          {/* Quick Action Ribbon */}
          <div className="p-4 bg-stone-100 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/80 flex flex-wrap items-center justify-between gap-4 no-print">
            <div className="flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-medium text-stone-800 dark:text-stone-200">
                Sudahkah rumah Anda siap dengan perlengkapan darurat 72 jam?
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenKitModal}
                className="px-3 py-1.5 text-xs bg-emerald-700 hover:bg-emerald-800 text-white font-medium cursor-pointer transition-colors"
              >
                Cek Tas Siaga Bencana
              </button>
              <button
                onClick={onOpenQuizModal}
                className="px-3 py-1.5 text-xs border border-stone-300 dark:border-stone-600 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-medium cursor-pointer transition-colors"
              >
                Uji Respon Cepat
              </button>
            </div>
          </div>

          {/* § 1. Penjelasan Ilmiah & Mekanisme */}
          <section id="penjelasan" className="space-y-4 pt-2">
            <h2 className="font-serif-wiki text-2xl font-semibold text-stone-900 dark:text-stone-100 border-b border-stone-300 dark:border-stone-700 pb-1.5">
              1. Penjelasan Ilmiah & Mekanisme Terjadinya
            </h2>
            <div className="space-y-4 font-serif-wiki text-stone-800 dark:text-stone-200 leading-relaxed text-base">
              {disaster.penjelasanLengkap.map((paragraf, idx) => (
                <p key={idx}>{paragraf}</p>
              ))}
            </div>
          </section>

          {/* § 2. Ciri-ciri Bencana */}
          <section id="ciri-ciri" className="space-y-4 pt-2">
            <h2 className="font-serif-wiki text-2xl font-semibold text-stone-900 dark:text-stone-100 border-b border-stone-300 dark:border-stone-700 pb-1.5">
              2. Ciri-Ciri Fisik saat Bencana Berlangsung
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 italic font-serif-wiki">
              Karakteristik sensoris, mekanis, dan visual langsung yang dirasakan di lokasi terdampak:
            </p>
            <ul className="space-y-2.5 font-sans text-sm text-stone-800 dark:text-stone-200 pl-4 list-disc marker:text-stone-400">
              {disaster.ciriCiri.map((ciri, idx) => (
                <li key={idx} className="leading-relaxed">
                  {ciri}
                </li>
              ))}
            </ul>
          </section>

          {/* § 3. Tanda-tanda Awal (Peringatan Dini) */}
          <section id="tanda-awal" className="space-y-4 pt-2">
            <div className="flex items-center justify-between border-b border-stone-300 dark:border-stone-700 pb-1.5">
              <h2 className="font-serif-wiki text-2xl font-semibold text-stone-900 dark:text-stone-100">
                3. Tanda-Tanda Awal Sebelum Bencana Datang (Precursor)
              </h2>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 italic font-serif-wiki">
              Gejala alam, anomali lingkungan, dan sinyal biologis yang mendahului bencana. Kenali tanda-tanda ini untuk mempercepat evakuasi mandiri:
            </p>

            <div className="space-y-3 pt-2">
              {disaster.tandaTandaAwal.map((tanda, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700/80 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-sm flex items-center gap-2">
                      <span className="w-5 h-5 rounded-none bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-mono-wiki font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{tanda.gejala}</span>
                    </h3>
                    <div className="text-xs text-amber-700 dark:text-amber-400 font-medium font-mono-wiki flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{tanda.rentangWaktu}</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans pl-7">
                    {tanda.penjelasan}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* § 4. Cara Mitigasi & Pencegahan */}
          <section id="mitigasi" className="space-y-4 pt-2">
            <h2 className="font-serif-wiki text-2xl font-semibold text-stone-900 dark:text-stone-100 border-b border-stone-300 dark:border-stone-700 pb-1.5">
              4. Tahapan & Cara Mitigasi (Pencegahan & Penyelamatan Diri)
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 italic font-serif-wiki">
              Siklus penanggulangan komprehensif yang terbagi menjadi tiga fase utama:
            </p>

            {/* 3-Tier Mitigation Tabs/Boxes */}
            <div className="space-y-5 pt-2">
              {/* Pra-Bencana */}
              <div className="border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-4">
                <div className="flex items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-2 mb-3">
                  <span className="text-xs font-mono-wiki font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                    Fase 1: Pra-Bencana (Kesiapsiagaan & Pencegahan)
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300 pl-4 list-disc marker:text-blue-600">
                  {disaster.mitigasi.praBencana.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Saat Terjadi */}
              <div className="border border-stone-300 dark:border-stone-600 bg-amber-50/40 dark:bg-amber-950/20 p-4">
                <div className="flex items-center gap-2 border-b border-amber-200 dark:border-amber-900/60 pb-2 mb-3">
                  <span className="text-xs font-mono-wiki font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                    Fase 2: Saat Terjadi (Respon Darurat & Penyelamatan Diri)
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-stone-800 dark:text-stone-200 pl-4 list-disc marker:text-amber-600 font-medium">
                  {disaster.mitigasi.saatBencana.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pasca-Bencana */}
              <div className="border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-4">
                <div className="flex items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-2 mb-3">
                  <span className="text-xs font-mono-wiki font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                    Fase 3: Pasca-Bencana (Pemulihan & Evakuasi Aman)
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300 pl-4 list-disc marker:text-stone-500">
                  {disaster.mitigasi.pascaBencana.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* § 5. Analisis Dampak Kerusakan */}
          <section id="dampak" className="space-y-4 pt-2">
            <h2 className="font-serif-wiki text-2xl font-semibold text-stone-900 dark:text-stone-100 border-b border-stone-300 dark:border-stone-700 pb-1.5">
              5. Analisis Dampak Kerusakan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {/* Dampak Fisik */}
              <div className="p-3.5 border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/40">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2 border-b border-stone-200 dark:border-stone-700 pb-1">
                  Dampak Fisik & Konstruksi
                </h3>
                <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300 pl-3 list-disc marker:text-stone-400">
                  {disaster.dampak.fisik.map((d, idx) => (
                    <li key={idx} className="leading-relaxed">{d}</li>
                  ))}
                </ul>
              </div>

              {/* Dampak Ekologis */}
              <div className="p-3.5 border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/40">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2 border-b border-stone-200 dark:border-stone-700 pb-1">
                  Dampak Ekologis & Biosfer
                </h3>
                <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300 pl-3 list-disc marker:text-stone-400">
                  {disaster.dampak.ekologis.map((d, idx) => (
                    <li key={idx} className="leading-relaxed">{d}</li>
                  ))}
                </ul>
              </div>

              {/* Dampak Sosio-Ekonomi */}
              <div className="p-3.5 border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/40">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2 border-b border-stone-200 dark:border-stone-700 pb-1">
                  Dampak Sosio-Ekonomi & Medis
                </h3>
                <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300 pl-3 list-disc marker:text-stone-400">
                  {disaster.dampak.sosioEkonomi.map((d, idx) => (
                    <li key={idx} className="leading-relaxed">{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* § 6. Studi Kasus Bersejarah (Encyclopedic Table) */}
          <section id="studi-kasus" className="space-y-4 pt-2">
            <h2 className="font-serif-wiki text-2xl font-semibold text-stone-900 dark:text-stone-100 border-b border-stone-300 dark:border-stone-700 pb-1.5">
              6. Catatan Studi Kasus Peristiwa Bersejarah
            </h2>

            <div className="border border-stone-200 dark:border-stone-700 overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead className="bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border-b border-stone-200 dark:border-stone-700 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-2.5">Nama Peristiwa</th>
                    <th className="p-2.5 font-mono-wiki">Tahun</th>
                    <th className="p-2.5">Lokasi</th>
                    <th className="p-2.5">Magnitudo / Skala</th>
                    <th className="p-2.5">Catatan Penting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                  {disaster.studiKasus.map((kasus, idx) => (
                    <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                      <td className="p-2.5 font-semibold text-stone-900 dark:text-stone-100 whitespace-nowrap">
                        {kasus.peristiwa}
                      </td>
                      <td className="p-2.5 font-mono-wiki tabular-nums text-stone-600 dark:text-stone-400">
                        {kasus.tahun}
                      </td>
                      <td className="p-2.5 text-stone-700 dark:text-stone-300 whitespace-nowrap">
                        {kasus.lokasi}
                      </td>
                      <td className="p-2.5 font-mono-wiki text-stone-800 dark:text-stone-200">
                        {kasus.magnitudoAtauDampak}
                      </td>
                      <td className="p-2.5 text-stone-600 dark:text-stone-400 min-w-[260px] leading-relaxed">
                        {kasus.ringkasan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* § 7. Referensi & Lembaga Terkait */}
          <section id="referensi" className="space-y-4 pt-2">
            <h2 className="font-serif-wiki text-2xl font-semibold text-stone-900 dark:text-stone-100 border-b border-stone-300 dark:border-stone-700 pb-1.5">
              7. Referensi & Lembaga Terkait
            </h2>

            <ol className="space-y-2 text-xs text-stone-600 dark:text-stone-400 font-sans list-decimal pl-4">
              {disaster.referensi.map((ref) => (
                <li key={ref.nomor} className="leading-relaxed">
                  <span className="font-medium text-stone-800 dark:text-stone-200">{ref.penulis}</span> ({ref.tahun}).{' '}
                  <span className="italic">"{ref.judul}"</span>. {ref.penerbit}.
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Right Infobox Column (Sticky on Desktop) */}
        <div className="w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
          <WikiInfobox disaster={disaster} />
        </div>
      </div>
    </article>
  );
};
