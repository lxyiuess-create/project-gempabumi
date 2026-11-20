export type DisasterCategory = 
  | 'Geologis'
  | 'Hidrologis'
  | 'Meteorologis & Klimatologis'
  | 'Vulkanologis'
  | 'Kompleks';

export interface InfoboxData {
  kategori: DisasterCategory;
  penyebabUtama: string;
  skalaPengukuran: string;
  tingkatBahaya: 'Sangat Tinggi' | 'Tinggi' | 'Sedang';
  kecepatanDatang: string;
  wilayahRawan: string;
  instansiPemantau: string;
  nomorDarurat: string;
}

export interface MitigationSteps {
  praBencana: string[];
  saatBencana: string[];
  pascaBencana: string[];
}

export interface ImpactBreakdown {
  fisik: string[];
  ekologis: string[];
  sosioEkonomi: string[];
}

export interface CaseStudy {
  peristiwa: string;
  tahun: number;
  lokasi: string;
  magnitudoAtauDampak: string;
  ringkasan: string;
}

export interface Citation {
  nomor: number;
  penulis: string;
  judul: string;
  penerbit: string;
  tahun: number;
  url?: string;
}

export interface DisasterItem {
  id: string;
  name: string;
  scientificName: string;
  pronunciation?: string;
  category: DisasterCategory;
  image: string;
  imageCaption: string;
  quickSummary: string;
  penjelasanLengkap: string[];
  ciriCiri: string[];
  tandaTandaAwal: {
    gejala: string;
    penjelasan: string;
    rentangWaktu: string;
  }[];
  mitigasi: MitigationSteps;
  dampak: ImpactBreakdown;
  infobox: InfoboxData;
  studiKasus: CaseStudy[];
  referensi: Citation[];
  terakhirDiperbarui: string;
  isCustom?: boolean;
}
