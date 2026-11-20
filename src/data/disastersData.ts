import { DisasterItem } from '../types/disaster';

export const INITIAL_DISASTERS: DisasterItem[] = [
  {
    id: 'gempa-bumi',
    name: 'Gempa Bumi',
    scientificName: 'Seisma / Earthquakes',
    pronunciation: '/ˈɡɛm.pa ˈbu.mi/',
    category: 'Geologis',
    image: '/src/assets/images/gempa_earthquake_fault_1793600486920.jpg',
    imageCaption: 'Stasiun seismometer pengukur gelombang seismik P dan S pada zona patahan sesar kerak bumi aktif.',
    quickSummary: 'Gempa bumi adalah getaran atau guncangan yang terjadi di permukaan bumi akibat pelepasan energi secara tiba-tiba di dalam litosfer yang menghasilkan gelombang seismik. Indonesia terletak di pertemuan tiga lempeng tektonik utama dunia, menjadikannya salah satu kawasan paling seismik aktif di dunia.',
    penjelasanLengkap: [
      'Gempa bumi (bahasa Inggris: earthquake) adalah fenomena geofisika berupa getaran atau guncangan pada kerak bumi yang terjadi akibat pelepasan mendadak akumulasi energi elastis batuan litosfer. Energi yang terakumulasi akibat gerak relatif lempeng tektonik dilepaskan dalam bentuk gelombang seismik yang merambat ke segala arah.',
      'Berdasarkan penyebab terjadinya, gempa bumi diklasifikasikan menjadi: (1) Gempa Tektonik, yang disebabkan oleh pergeseran lempeng bumi di sepanjang bidang sesar (fault); (2) Gempa Vulkanik, yang dipicu oleh pergerakan fluida magma di bawah gunung api; (3) Gempa Runtuhan (Terban), akibat runtuhnya rongga bawah tanah seperti gua kapur atau tambang; dan (4) Gempa Tumbukan akibat meteorit.',
      'Pusat pelepasan energi di dalam perut bumi dinamakan hiposentrum (focus), sedangkan titik pada permukaan bumi tepat tegak lurus di atas hiposentrum dinamakan episentrum. Kedalaman hiposentrum menentukan tingkat kerusakan di permukaan: gempa dangkal (< 70 km) umumnya menghasilkan kerusakan struktural paling masif meskipun magnitudo relatif menengah.'
    ],
    ciriCiri: [
      'Guncangan mendadak berarah horizontal (gelombang geser / S-wave) dan vertikal (gelombang primer / P-wave).',
      'Suara dentuman gemuruh frekuensi rendah dari dalam tanah sepersekian detik sebelum guncangan kuat terasa.',
      'Benda gantung bergoyang, perabotan bergeser, dan retakan rambut mendadak muncul pada dinding bangunan.',
      'Disorientasi spasial mendadak pada manusia dan kesulitan berdiri tegak saat intensitas melebihi V MMI.',
      'Sering diikuti serangkaian gempa susulan (aftershocks) dengan frekuensi yang meluruh seiring waktu.'
    ],
    tandaTandaAwal: [
      {
        gejala: 'Perilaku Anomali Hewan Liar dan Peliharaan',
        penjelasan: 'Burung beterbangan tanpa arah, anjing menggonggong panik tanpa sebab yang jelas, dan reptil/tikus keluar dari lubang persembunyian karena sensitivitas tinggi terhadap gelombang mikro seismik frekuensi tinggi (P-waves).',
        rentangWaktu: 'Beberapa menit hingga jam sebelum kejadian'
      },
      {
        gejala: 'Perubahan Kekeruhan dan Ketinggian Air Sumur',
        penjelasan: 'Permukaan air tanah mendadak naik, turun drastis, atau berubah menjadi keruh dan berbau gas belerang/radon akibat deformasi mikroskopis pori-pori batuan akuifer.',
        rentangWaktu: 'Beberapa hari hingga jam sebelum pelepasan energi'
      },
      {
        gejala: 'Aktivitas Gempa Mikro (Foreshocks)',
        penjelasan: 'Peningkatan frekuensi getaran mikro yang tercatat oleh seismograf BMKG di sepanjang garis patahan aktif (active fault line).',
        rentangWaktu: 'Beberapa jam hingga hitungan hari'
      },
      {
        gejala: 'Kilatan Cahaya Seismik (Earthquake Light / EQL)',
        penjelasan: 'Pendaran cahaya redup di horizon langit malam akibat ionisasi medan piezoelektrik pada batuan kaya kuarsa yang mengalami kompresi tekanan ekstrem.',
        rentangWaktu: 'Beberapa detik sebelum getaran utama tiba'
      }
    ],
    mitigasi: {
      praBencana: [
        'Membangun rumah dengan standar struktur tahan gempa (SNI 1726) bertulang beton atau kayu elastis.',
        'Mengatur perabotan berat (lemari, rak buku) agar dipaku kuat ke dinding dan tidak menghalangi pintu evakuasi.',
        'Menyiapkan Tas Siaga Bencana (Survival Kit 72 Jam) di lokasi yang mudah dijangkau dekat pintu keluar.',
        'Mengidentifikasi "titik aman" di dalam ruangan (di bawah meja kokoh, dekat kolom struktural utama).',
        'Mengikuti latihan simulasi evakuasi mandiri bersama keluarga dan komunitas secara berkala.'
      ],
      saatBencana: [
        'Terapkan metode internasional: DROP (Berlutut/Jongkok), COVER (Lindungi kepala & leher), HOLD ON (Pegang kaki meja kokoh).',
        'Jauhi jendela kaca, cermin, lampu gantung, partisi tinggi, dan dinding bata yang rentan roboh.',
        'Jika berada di luar gedung, jauhi tiang listrik, baliho reklame, pohon besar, dan fasad bangunan bertingkat.',
        'Jangan pernah gunakan lift; gunakan tangga darurat setelah guncangan mereda.',
        'Jika sedang mengemudi, kurangi kecepatan perlahan, tepi kendaraan di area terbuka jauh dari jembatan layang.'
      ],
      pascaBencana: [
        'Segera periksa apakah ada kebocoran tabung gas dan korsleting listrik; matikan meteran utama seketika.',
        'Keluar dari bangunan dengan tertib menggunakan jalur evakuasi menuju titik kumpul terbuka (assembly point).',
        'Waspadai gempa susulan (aftershocks) yang berpotensi merobohkan bangunan yang sudah retak struktur.',
        'Jangan menyebarkan informasi hoaks; pantau terus rilis resmi BMKG melalui kanal terverifikasi.',
        'Beri pertolongan pertama pada korban yang terluka ringan dan hubungi nomor darurat 112 atau 115 Basarnas.'
      ]
    },
    dampak: {
      fisik: [
        'Keruntuhan gedung, jembatan, bendungan, dan infrastruktur transportasi jalan raya.',
        'Putusnya jaringan transmisi listrik, serat optik telekomunikasi, dan pipa air bersih perkotaan.',
        'Dapat memicu bencana ikutan (collateral hazards) berupa tsunami, tanah longsor, dan likuefaksi tanah.'
      ],
      ekologis: [
        'Terbentuknya gawir sesar (fault scarp) dan pergeseran morfologi topografi sungai.',
        'Kerusakan habitat fauna lereng pegunungan dan kontaminasi sumber air tanah dangkal.'
      ],
      sosioEkonomi: [
        'Korban jiwa akibat tertimpa reruntuhan material bangunan dan trauma psikologis jangka panjang.',
        'Ratusan ribu pengungsi kehilangan tempat tinggal serta kelumpuhan roda ekonomi daerah terdampak.'
      ]
    },
    infobox: {
      kategori: 'Geologis',
      penyebabUtama: 'Tumbukan & pelepasan regangan lempeng tektonik, aktivitas sesar kerak bumi',
      skalaPengukuran: 'Moment Magnitude (Mw), Skala Intensitas MMI (Modified Mercalli Intensity)',
      tingkatBahaya: 'Sangat Tinggi',
      kecepatanDatang: 'Mendadak (0 – 10 detik tanpa peringatan panjang)',
      wilayahRawan: 'Sepanjang jalur Sesar Semangko Sumatra, Sesar Palu-Koro, Sesar Cimandiri, Sesar Lembang, dan Jalur Megathrust',
      instansiPemantau: 'Badan Meteorologi, Klimatologi, dan Geofisika (BMKG), PVMBG Badan Geologi',
      nomorDarurat: '112 (Layanan Darurat Terpadu), 115 (Basarnas), 117 (BNPB)'
    },
    studiKasus: [
      {
        peristiwa: 'Gempa Megathrust Aceh',
        tahun: 2004,
        lokasi: 'Lepas Pantai Barat Sumatra / Samudra Hindia',
        magnitudoAtauDampak: 'Mw 9.1–9.3',
        ringkasan: 'Memicu gempa terdahsyat ketiga di dunia yang membangkitkan megatsunami ke 14 negara dan menewaskan lebih dari 227.000 jiwa.'
      },
      {
        peristiwa: 'Gempa Bumi Yogyakarta',
        tahun: 2006,
        lokasi: 'Bantul dan Klaten, D.I. Yogyakarta',
        magnitudoAtauDampak: 'Mw 6.3',
        ringkasan: 'Gempa tektonik dangkal pada Sesar Opak merobohkan lebih dari 150.000 bangunan dan mengakibatkan 5.700 korban jiwa.'
      },
      {
        peristiwa: 'Gempa & Likuefaksi Palu–Donggala',
        tahun: 2018,
        lokasi: 'Sulawesi Tengah (Sesar Palu-Koro)',
        magnitudoAtauDampak: 'Mw 7.5',
        ringkasan: 'Memicu pergerakan sesar mendatar geser cepat yang membangkitkan tsunami lokal teluk dan likuefaksi masif di Petobo dan Balaroa.'
      }
    ],
    referensi: [
      {
        nomor: 1,
        penulis: 'Badan Nasional Penanggulangan Bencana (BNPB)',
        judul: 'Buku Pedoman Latihan Kesiapsiagaan Bencana Gempa Bumi',
        penerbit: 'BNPB Press Jakarta',
        tahun: 2023
      },
      {
        nomor: 2,
        penulis: 'Pusat Seismologi Teknik BMKG',
        judul: 'Peta Sumber dan Bahaya Gempa Bumi Indonesia',
        penerbit: 'PusGen / BMKG',
        tahun: 2022
      },
      {
        nomor: 3,
        penulis: 'United States Geological Survey (USGS)',
        judul: 'Earthquake Hazards 101: Science of Earthquakes',
        penerbit: 'USGS Educational Series',
        tahun: 2024
      }
    ],
    terakhirDiperbarui: '24 Oktober 2026'
  },
  {
    id: 'tsunami',
    name: 'Tsunami',
    scientificName: 'Tsunamigenic Ocean Waves',
    pronunciation: '/tsuːˈnɑːmi/',
    category: 'Geologis',
    image: '/src/assets/images/tsunami_buoy_monitoring_1793600487674.jpg',
    imageCaption: 'Pelampung pendeteksi tsunami laut dalam (DART Buoy System) yang mengukur anomali tekanan kolom air laut.',
    quickSummary: 'Tsunami (bahasa Jepang: 津波, "ombak pelabuhan") adalah rangkaian gelombang laut berenergi tinggi dengan panjang gelombang mencapai ratusan kilometer, dipicu oleh dislokasi vertikal dasar laut secara mendadak seperti gempa bumi megathrust, erupsi vulkanik bawah laut, atau longsor submarine.',
    penjelasanLengkap: [
      'Tsunami adalah rangkaian gelombang laut raksasa yang terjadi karena adanya pergeseran lempeng bawah laut secara vertikal (thrust faulting), longsoran bawah laut (submarine landslide), letusan gunung api bawah laut, atau hantaman meteor.',
      'Di laut dalam, tsunami merambat dengan kecepatan menyamai pesawat jet (700 hingga 900 km/jam) dengan tinggi gelombang hanya 30 hingga 100 cm sehingga hampir tidak terdeteksi oleh kapal yang berlayar di tengah samudra. Namun, ketika mendekati perairan dangkal di garis pantai, fenomena penumpukan energi (shoaling) memperlambat kecepatan gelombang dan mendongkrak ketinggian dinding air hingga belasan bahkan puluhan meter.',
      'Tsunami bukan merupakan satu gelombang tunggal melainkan kereta gelombang (wave train). Gelombang pertama sering kali bukan yang tertinggi; puncak gelombang kedua atau ketiga bisa jauh lebih mematikan dan gelombang dapat terus melanda pantai selama berjam-jam.'
    ],
    ciriCiri: [
      'Surutnya air laut secara drastis dalam waktu singkat hingga dasar laut dan terumbu karang terlihat jelas.',
      'Suara gemuruh mendengung seperti deru mesin pesawat jet atau gelegar guntur dari arah tengah laut.',
      'Bau amis garam pekat atau bau gas sulfur menyengat yang terbawa angin dari perairan dalam.',
      'Gelombang pertama yang datang sering kali membawa puing kayu, lumpur pekat, dan buih putih berkecepatan tinggi.',
      'Arus balik (backwash) gelombang berkekuatan dahsyat yang menyedot segala benda ke tengah laut.'
    ],
    tandaTandaAwal: [
      {
        gejala: 'Guncangan Gempa Berdurasi Panjang di Pesisir (Rumus 20-20-20)',
        penjelasan: 'Jika Anda merasakan gempa lebih dari 20 detik dan sulit berdiri tegak di dekat pantai, jangan tunggu sirine; Anda hanya punya waktu sekitar 20 menit untuk lari ke elevasi 20 meter di atas permukaan laut.',
        rentangWaktu: '10 hingga 30 menit sebelum gelombang pertama menerjang'
      },
      {
        gejala: 'Penarikan Garis Pantai Ekstrem (Air Laut Mendadak Surut)',
        penjelasan: 'Dasar laut mengering hingga ratusan meter dari bibir pantai dan ikan-ikan terdampar menggelepar. Jangan pernah mendekat untuk mengambil ikan; ini adalah tanda pasti gelombang raksasa sedang menuju pantai.',
        rentangWaktu: '5 hingga 15 menit sebelum gelombang pertama tiba'
      },
      {
        gejala: 'Suara Gemuruh Keras dari Laut',
        penjelasan: 'Terdengar deru gelegar sangat keras frekuensi rendah yang berasal dari tubrukan massa air raksasa dengan dasar kontinen.',
        rentangWaktu: 'Beberapa menit sebelum dinding air terlihat'
      },
      {
        gejala: 'Aktivitas Sirine Peringatan Dini InaTEWS',
        penjelasan: 'Aktivasi sirine sirene menara peringatan tsunami BMKG (InaTEWS) yang berbunyi melolong kontinyu di kawasan pesisir.',
        rentangWaktu: '3 hingga 5 menit setelah gempa terjadi'
      }
    ],
    mitigasi: {
      praBencana: [
        'Menanam dan merawat hutan bakau (mangrove) serta vegetasi pantai pelindung seperti cemara udang.',
        'Mengenali rambu rute evakuasi tsunami dan lokasi Tempat Evakuasi Sementara (TES) bertingkat tinggi.',
        'Membangun tanggul pemecah ombak (breakwater) dan penataan tata ruang permukiman di luar zona merah pesisir.',
        'Mengunduh aplikasi InfoBMKG dan memastikan perangkat gawai aktif menerima peringatan SMS darurat BMKG.'
      ],
      saatBencana: [
        'Terapkan evakuasi mandiri segera: lari sejauh dan setinggi mungkin ke perbukitan (minimal 20 meter dpl).',
        'Tinggalkan semua harta benda; utamakan nyawa anggota keluarga dan genggam Tas Siaga Bencana.',
        'Gunakan transportasi kaki; jangan menggunakan mobil karena akan memicu kemacetan total di persimpangan evakuasi.',
        'Jika terjebak di pesisir datar, panjat lantai 3 atau 4 gedung bertulang beton kokoh (evakuasi vertikal).',
        'Bila tersapu gelombang, carilah benda terapung (kayu, kasur, pintu) dan lindungi kepala dari benturan puing.'
      ],
      pascaBencana: [
        'Tetap berada di tempat evakuasi tinggi sampai ada pernyataan resmi "Peringatan Tsunami Dinyatakan Berakhir" dari BMKG.',
        'Jangan mendekati muara sungai atau tepi pantai karena gelombang pantulan (seiche) masih sangat berbahaya.',
        'Waspadai kabel listrik bawah tanah yang terputus di dalam genangan air laut berlumpur.',
        'Bantu korban luka di posko kesehatan darurat dan laporkan anggota keluarga yang hilang ke posko Basarnas.'
      ]
    },
    dampak: {
      fisik: [
        'Penyapuan total permukiman nelayan, hotel pesisir, dermaga pelabuhan, dan fasilitas minyak bumi pantai.',
        'Erosi garis pantai skala besar, rusaknya mercusuar, dan kerusakan saluran drainase perkotaan.'
      ],
      ekologis: [
        'Salinisasi tanah pertanian produktif yang membuatnya tandus bertahun-tahun akibat endapan garam laut.',
        'Kerusakan terumbu karang, padang lamun, dan matinya biota air tawar akibat intrusi air asin masif.'
      ],
      sosioEkonomi: [
        'Kehilangan nyawa massal akibat tenggelam dan benturan puing berat (debris impacts).',
        'Hancurnya sektor perikanan tangkap, pariwisata bahari, dan biaya rekonstruksi triliunan rupiah.'
      ]
    },
    infobox: {
      kategori: 'Geologis',
      penyebabUtama: 'Gempa megathrust bawah laut vertikal, erupsi vulkanik bawah laut, longsor tebing laut',
      skalaPengukuran: 'Skala Intensitas Imamura-Iida, Skala Magnitudo Tsunami (Mt), Ketinggian Run-up (meter)',
      tingkatBahaya: 'Sangat Tinggi',
      kecepatanDatang: 'Cepat (10 – 40 menit setelah gempa di dekat episentrum)',
      wilayahRawan: 'Pesisir barat Sumatra, pesisir selatan Jawa, Bali, Nusa Tenggara, Sulawesi, Maluku, dan utara Papua',
      instansiPemantau: 'BMKG Indonesia Tsunami Early Warning System (InaTEWS), NOAA Pacific Tsunami Warning Center',
      nomorDarurat: '112, 115 (Basarnas), 117 (Pusdalops BNPB)'
    },
    studiKasus: [
      {
        peristiwa: 'Megatsunami Samudra Hindia',
        tahun: 2004,
        lokasi: 'Banda Aceh, Meulaboh, Nias, Thailand, Sri Lanka',
        magnitudoAtauDampak: 'Run-up hingga 30+ meter',
        ringkasan: 'Menerjang daratan Aceh hingga radius 5 km ke pedalaman, meluluhlantakkan infrastruktur kota Banda Aceh dan memicu pembentukan InaTEWS.'
      },
      {
        peristiwa: 'Tsunami Selat Sunda (Anak Krakatau)',
        tahun: 2018,
        lokasi: 'Banten dan Lampung Selatan',
        magnitudoAtauDampak: 'Tinggi gelombang 2–5 meter',
        ringkasan: 'Tsunami yang terjadi tanpa diawali gempa tektonik besar, melainkan akibat runtuhnya 64 hektar lereng barat daya Gunung Anak Krakatau ke laut.'
      }
    ],
    referensi: [
      {
        nomor: 1,
        penulis: 'Intergovernmental Oceanographic Commission (IOC-UNESCO)',
        judul: 'Tsunami Glossary and Warning System Best Practices',
        penerbit: 'UNESCO Technical Series',
        tahun: 2022
      },
      {
        nomor: 2,
        penulis: 'Pusat Penelitian Mitigasi Bencana ITB',
        judul: 'Karakteristik Tsunami Indonesia dan Panduan Evakuasi Cepat',
        penerbit: 'ITB Press Bandung',
        tahun: 2021
      }
    ],
    terakhirDiperbarui: '18 Oktober 2026'
  },
  {
    id: 'gunung-meletus',
    name: 'Gunung Meletus (Erupsi Vulkanik)',
    scientificName: 'Eruptio Vulcanica',
    pronunciation: '/ˈɡu.nuŋ mə.ləˈtʊs/',
    category: 'Vulkanologis',
    image: '/src/assets/images/volcano_eruption_plume_1793600486420.jpg',
    imageCaption: 'Kolom erupsi abu vulkanis (plume) membubung tinggi ke stratosfer dipantau oleh sensor vulkanologi PVMBG.',
    quickSummary: 'Gunung meletus adalah peristiwa keluarnya magma, gas beracun, dan material piroklastik dari dalam perut bumi melalui lubang kepundan kawah gunung api. Indonesia memiliki 127 gunung api aktif tipe A yang merupakan bagian penting dari busur cincin api Pasifik (Pacific Ring of Fire).',
    penjelasanLengkap: [
      'Erupsi gunung api terjadi ketika tekanan gas terlarut dalam magma mencapai batas kritis sehingga magma mendesak lapisan batuan penutup dan meledak keluar. Tipe erupsi sangat bervariasi: mulai dari letusan efusif (lelehan lava pijar lambat seperti pada tipe Hawaii) hingga eksplosif dahsyat (tipe Plinian dan Pelean) yang melontarkan material puluhan kilometer ke atmosfer.',
      'Material berbahaya yang dihasilkan meliputi awan panas guguran (piroklastik/bahasa Jawa: wedhus gembel) yang bersuhu antara 300°C hingga 800°C dengan kecepatan meluncur menuruni lembah melebihi 200 km/jam. Selain awan panas, bahaya lainnya adalah hujan abu vulkanik berbutir silika tajam, lontaran batu pijar (bom vulkanik), gas beracun (CO, SO2, H2S), dan banjir lahar hujan di daerah aliran sungai.',
      'Tingkat aktivitas gunung api di Indonesia dipantau dan diklasifikasikan oleh PVMBG menjadi 4 level: Level I (Normal), Level II (Waspada), Level III (Siaga), dan Level IV (Awas).'
    ],
    ciriCiri: [
      'Peningkatan suhu kawah dan sumber mata air panas di lereng gunung secara signifikan.',
      'Suara dentuman gemuruh vulkanik bawah tanah yang terdengar terus menerus hingga radius puluhan kilometer.',
      'Hujan abu vulkanis halus hingga pasir berbau belerang menyengat yang mengotori atap rumah dan dedaunan.',
      'Munculnya guguran lava pijar atau kubah lava baru di bibir kawah yang terpantau pada malam hari.',
      'Matinya vegetasi tanaman di sekitar puncak kawah akibat semburan gas asam sulfat dan solfatara.'
    ],
    tandaTandaAwal: [
      {
        gejala: 'Peningkatan Drastis Gempa Vulkanik Dalam & Dangkal (VA & VB)',
        penjelasan: 'Peralatan seismometer stasiun pengamatan mencatat ratusan getaran gempa per hari akibat desakan magma yang meretakkan batuan saluran magma (conduit).',
        rentangWaktu: 'Berminggu-minggu hingga beberapa hari sebelum erupsi'
      },
      {
        gejala: 'Deformasi dan Penggelembungan Tubuh Gunung (Inflasi)',
        penjelasan: 'Pengukuran instrumen Tiltmeter dan GPS Geodetik menunjukkan adanya pemuaian/inflasi tubuh gunung akibat volume magma yang mengisi kantong dangkal.',
        rentangWaktu: 'Hitungan minggu sebelum letusan puncak'
      },
      {
        gejala: 'Sumber Mata Air Lereng Mengering Mendadak',
        penjelasan: 'Mata air alami di desa lereng gunung tiba-tiba mengering atau suhunya melonjak panas karena magma memanaskan sistem hidrotermal bawah permukaan.',
        rentangWaktu: 'Beberapa hari sebelum letusan'
      },
      {
        gejala: 'Migrasi Massal Satwa Liar Hutan Puncak',
        penjelasan: 'Monyet, babi hutan, burung, dan ular turun bergerombol menuju permukiman warga karena tidak tahan panas dan pekatnya gas beracun di habitat lereng atas.',
        rentangWaktu: '1 hingga 3 hari sebelum letusan besar'
      }
    ],
    mitigasi: {
      praBencana: [
        'Patuhi batas radius Kawasan Rawan Bencana (KRB) III yang ditetapkan oleh PVMBG Badan Geologi.',
        'Siapkan masker respirator N95 atau masker medis tebal dan kacamata pelindung (goggles) untuk menangkal abu silika.',
        'Pelajari rute evakuasi darurat desa dan catat lokasi pos pengungsian sementara.',
        'Tutup rapat penampungan air bersih dan sumur terbuka agar tidak tercemar debu belerang beracun.'
      ],
      saatBencana: [
        'Segera tinggalkan zona bahaya begitu status ditingkatkan menjadi Level IV (AWAS).',
        'Gunakan pakaian lengan panjang, celana panjang, topi, masker, dan kacamata; jangan kenakan lensa kontak.',
        'Hindari lembah sungai yang berhulu di puncak gunung untuk mencegah tersapu awan panas atau lahar dingin.',
        'Tetap berlindung di dalam bangunan beratap kuat bila terjadi lontaran batu kerikil atau pasir panas.',
        'Matikan mesin kendaraan bermotor saat hujan abu lebat karena abu silika akan menyumbat filter udara seketika.'
      ],
      pascaBencana: [
        'Bersihkan tumpukan abu vulkanik dari atap rumah sesegera mungkin karena abu yang basah terkena air hujan sangat berat dan dapat merobohkan struktur atap.',
        'Jangan kembali ke rumah sebelum ada rekomendasi resmi bahwa kondisi gunung telah aman.',
        'Waspadai banjir lahar dingin sekunder saat musim hujan lebat di sepanjang aliran sungai kaki gunung.'
      ]
    },
    dampak: {
      fisik: [
        'Kerusakan total desa di lereng akibat sapuan awan panas, timbunan abu vulkanik tebal, dan aliran lava.',
        'Runtuhnya jembatan penghubung dan terputusnya akses jalan akibat terjangan banjir lahar dingin.',
        'Penutupan bandar udara regional karena abu vulkanik berbahaya bagi turbin mesin jet pesawat terbang.'
      ],
      ekologis: [
        'Kematian vegetasi hutan hujan tropis dan terganggunya rantai makanan satwa pegunungan.',
        'Pencemaran sumber air minum dan keasaman tanah sementara (namun menyuburkan tanah dalam jangka panjang).'
      ],
      sosioEkonomi: [
        'Gagal panen perkebunan dan pertanian sayur di sentra hortikultura lereng gunung.',
        'Penyakit infeksi saluran pernapasan akut (ISPA) dan iritasi mata parah pada warga pengungsi.'
      ]
    },
    infobox: {
      kategori: 'Vulkanologis',
      penyebabUtama: 'Dinamika magmatisme subduksi kerak bumi, akumulasi tekanan gas volatil',
      skalaPengukuran: 'Volcanic Explosivity Index (VEI 0–8), Status Tingkat Aktivitas (Level I s.d. IV)',
      tingkatBahaya: 'Sangat Tinggi',
      kecepatanDatang: 'Bertahap dengan peningkatan fase (hari hingga minggu sebelum klimaks)',
      wilayahRawan: 'Busur Vulkanik Sumatra, Jawa, Bali, Lombok, Flores, Sulawesi Utara, dan Kepulauan Maluku',
      instansiPemantau: 'Pusat Vulkanologi dan Mitigasi Bencana Geologi (PVMBG) - Badan Geologi KESDM',
      nomorDarurat: '112, 117 (BNPB), Pos Pengamatan Gunung Api (PGA) Terdekat'
    },
    studiKasus: [
      {
        peristiwa: 'Erupsi Akbar Gunung Merapi',
        tahun: 2010,
        lokasi: 'D.I. Yogyakarta dan Jawa Tengah',
        magnitudoAtauDampak: 'VEI 4, luncuran awan panas hingga 17 km',
        ringkasan: 'Erupsi terbesar Merapi dalam satu abad terakhir yang menyebabkan lebih dari 350 korban jiwa dan evakuasi 350.000 jiwa.'
      },
      {
        peristiwa: 'Letusan Gunung Tambora',
        tahun: 1815,
        lokasi: 'Sumbawa, Nusa Tenggara Barat',
        magnitudoAtauDampak: 'VEI 7 ("Tahun Tanpa Musim Panas")',
        ringkasan: 'Letusan terkuat dalam sejarah peradaban modern yang mengubah iklim global dunia pada tahun 1816.'
      }
    ],
    referensi: [
      {
        nomor: 1,
        penulis: 'PVMBG Badan Geologi Kementerian ESDM',
        judul: 'Pedoman Pemantauan dan Tanggap Darurat Bencana Letusan Gunung Api',
        penerbit: 'Penerbit Geologi Bandung',
        tahun: 2023
      },
      {
        nomor: 2,
        penulis: 'Simkin, T. & Siebert, L.',
        judul: 'Volcanoes of the World: Regional Directory and Volcanological Hazard',
        penerbit: 'Smithsonian Institution Press',
        tahun: 2020
      }
    ],
    terakhirDiperbarui: '28 Oktober 2026'
  },
  {
    id: 'tanah-longsor',
    name: 'Tanah Longsor',
    scientificName: 'Massa Motus / Landslide',
    pronunciation: '/ˈta.nah ˈlɔŋ.sɔr/',
    category: 'Geologis',
    image: '/src/assets/images/gempa_earthquake_fault_1793600486920.jpg',
    imageCaption: 'Tebing lereng perbukitan labil dengan struktur rekahan geser yang rentan mengalami keruntuhan massa tanah.',
    quickSummary: 'Tanah longsor adalah perpindahan massa batuan, puing tanah, atau material rombakan penyusun lereng yang bergerak meluncur ke bawah dan keluar lereng akibat hilangnya daya dukung tanah dan pengaruh gaya gravitasi bumi.',
    penjelasanLengkap: [
      'Tanah longsor merupakan salah satu bencana geologis paling mematikan di daerah perbukitan tropis Indonesia, khususnya saat puncak musim hujan. Longsor terjadi ketika gaya pendorong (driving force) pada lereng melampaui gaya penahan (resisting force) dari gesekan partikel tanah.',
      'Faktor pemicu utama meliputi: (1) Curah hujan ekstrem berkepanjangan yang menjenuhkan lapisan tanah dan membentuk bidang gelincir licin di atas batuan kedap air (lempung); (2) Gempa bumi yang mengguncang stabilitas lereng tebing; (3) Penebangan pohon berakar kuat (deforestasi) di lereng terjal; serta (4) Pemotongan lereng yang ceroboh untuk jalan raya atau perumahan tanpa talud penahan tanah yang memadai.',
      'Jenis pergerakan tanah meliputi: longsoran translasi (bidang gelincir rata), longsoran rotasi (bidang gelincir cekung), rayapan tanah (pergerakan lambat yang memiringkan tiang/pohon), dan aliran debris/lumpur berkecepatan tinggi.'
    ],
    ciriCiri: [
      'Timbulnya retakan tapal kuda (horse-shoe cracks) pada permukaan lereng jalan atau pekarangan rumah.',
      'Tanah amblas di bagian hulu lereng dan gundukan tanah menggembung di bagian kaki lereng.',
      'Pohon, tiang listrik, dan tiang telepon mulai condong miring ke arah bawah bukit.',
      'Pintu dan jendela rumah di lereng mendadak seret atau tidak dapat ditutup karena kusen bergeser deformasi.',
      'Mata air baru merembes keluar dari celah-celah dinding lereng bukit yang sebelumnya kering.'
    ],
    tandaTandaAwal: [
      {
        gejala: 'Munculnya Retakan Memanjang pada Permukaan Lereng',
        penjelasan: 'Muncul celah retakan tanah selebar 2 hingga 10 cm yang cepat bertambah panjang setelah hujan lebat terus menerus.',
        rentangWaktu: 'Beberapa hari hingga hitungan jam sebelum lereng runtuh'
      },
      {
        gejala: 'Kerikil dan Rombakan Kecil Berjatuhan dari Tebing',
        penjelasan: 'Guguran batu kerikil kecil berulang kali jatuh dari tebing curam menandakan tegangan geser telah melampaui kohesi batuan.',
        rentangWaktu: 'Beberapa jam hingga menit'
      },
      {
        gejala: 'Air Selokan atau Sumber Air Lereng Menjadi Keruh Berlumpur',
        penjelasan: 'Air rembesan bukit mendadak berubah menjadi cokelat keruh pekat karena partikel tanah telah terlarut dan membentuk lumpur jenuh di bidang gelincir.',
        rentangWaktu: 'Hitungan jam sebelum peristiwa'
      },
      {
        gejala: 'Gemuruh Rendah dan Getaran Mikro Tanah',
        penjelasan: 'Suara retakan akar pohon yang putus di bawah tanah diiringi dengungan gemuruh lereng yang mulai bergerak perlahan.',
        rentangWaktu: 'Beberapa menit sebelum longsoran masif turun'
      }
    ],
    mitigasi: {
      praBencana: [
        'Hindari mendirikan bangunan hunian di bibir tebing curam dengan kemiringan lereng di atas 30 derajat.',
        'Tanam tanaman berakar tunggang dalam dan kuat di tebing (misalnya pohon vetiver/akar wangi, bambu, beringin).',
        'Buat sistem drainase lereng berundak (terasering) yang kedap air agar air hujan tidak meresap liar ke bidang gelincir.',
        'Pasang alat deteksi pergerakan tanah sederhana (extensometer) berbasis kawat penarik sirine peringatan dini.'
      ],
      saatBencana: [
        'Jika melihat tebing mulai runtuh atau mendengar suara gemuruh lereng, segera lari tegak lurus menjauhi arah luncuran longsoran.',
        'Jangan pernah berlindung di bawah lereng atau di dalam rumah bertembok rapuh.',
        'Bila tidak sempat menyelamatkan diri, tekuk badan menjadi posisi janin (curl into a tight ball) dan lindungi kepala dengan kedua tangan rapat.',
        'Bunyikan peluit atau teriak minta tolong jika terjebak di pinggiran material reruntuhan.'
      ],
      pascaBencana: [
        'Jangan langsung mendekati area bekas longsoran karena lereng atas sering kali masih labil dan rentan terjadi longsor susulan.',
        'Periksa saluran air dan pipa gas di sekitar lokasi yang berpotensi memicu ledakan atau banjir lumpur tambahan.',
        'Bantu tim SAR dan anjing pelacak dengan menunjukkan posisi perkiraan korban yang tertimbun material.'
      ]
    },
    dampak: {
      fisik: [
        'Rumah warga tertimbun tanah hingga kedalaman beberapa meter dalam hitungan detik.',
        'Akses jalan lintas kabupaten terputus total yang mengisolasi ribuan warga desa pedalaman.',
        'Jaringan pipa air minum dan tiang transmisi listrik roboh hancur tertimpa material batu besar.'
      ],
      ekologis: [
        'Tergelincirnya lapisan humus tanah subur (topsoil) yang memicu erosi kritis dan lahan tandus.',
        'Penyumbatan alur sungai perbukitan yang dapat membentuk bendung alam rapuh pemicu banjir bandang.'
      ],
      sosioEkonomi: [
        'Tingginya angka fatalitas akibat korban mati lemas (asfiksia) tertimbun tanah jenuh air.',
        'Kerugian aset tempat tinggal dan terhentinya mata pencaharian petani perkebunan lereng.'
      ]
    },
    infobox: {
      kategori: 'Geologis',
      penyebabUtama: 'Gravitasi pada lereng curam, saturasi air hujan berlebih, getaran gempa, deforestasi',
      skalaPengukuran: 'Volume Material (m³), Kecepatan Luncuran (Varnes Classification)',
      tingkatBahaya: 'Tinggi',
      kecepatanDatang: 'Sangat Cepat (hitungan detik untuk aliran debris)',
      wilayahRawan: 'Jalur Pegunungan Bukit Barisan Sumatra, Jawa Barat bagian selatan, Jawa Tengah, Sulawesi Tengah',
      instansiPemantau: 'PVMBG Badan Geologi, Badan Nasional Penanggulangan Bencana (BNPB)',
      nomorDarurat: '112, 115 (Basarnas), 117 (BNPB)'
    },
    studiKasus: [
      {
        peristiwa: 'Tragedi Longsor Jemblung Banjarnegara',
        tahun: 2014,
        lokasi: 'Kecamatan Karangkobar, Banjarnegara, Jawa Tengah',
        magnitudoAtauDampak: 'Lereng Bukit Telaga Lele runtuh menimbun 1 dusun',
        ringkasan: 'Hujan lebat selama beberapa hari memicu runtuhnya tebing bukit yang meluncur sejauh 1 km dan menewaskan 108 orang.'
      },
      {
        peristiwa: 'Longsor Tambang Emas Bone Bolango',
        tahun: 2024,
        lokasi: 'Kabupaten Bone Bolango, Gorontalo',
        magnitudoAtauDampak: 'Puluhan korban tertimbun di area perbukitan terpencil',
        ringkasan: 'Curah hujan ekstrem di area perbukitan labil mengakibatkan longsoran masif yang menimpa posko pekerja tambang.'
      }
    ],
    referensi: [
      {
        nomor: 1,
        penulis: 'Karnawati, D. (Badan Meteorologi dan Geofisika)',
        judul: 'Bencana Gerakan Tanah di Indonesia: Pengenalan dan Mitigasi Berbasis Masyarakat',
        penerbit: 'UGM Press Yogyakarta',
        tahun: 2021
      },
      {
        nomor: 2,
        penulis: 'Cruden, D.M. & Varnes, D.J.',
        judul: 'Landslide Types and Processes: Special Report 247',
        penerbit: 'Transportation Research Board',
        tahun: 2019
      }
    ],
    terakhirDiperbarui: '22 Oktober 2026'
  },
  {
    id: 'banjir-bandang',
    name: 'Banjir & Banjir Bandang',
    scientificName: 'Inundatio / Flash Flood',
    pronunciation: '/ˈban.dʒɪr ˈban.daŋ/',
    category: 'Hidrologis',
    image: '/src/assets/images/tsunami_buoy_monitoring_1793600487674.jpg',
    imageCaption: 'Arus hidrologis berkecepatan tinggi yang membawa sedimen pekat dan bongkahan kayu gelondongan.',
    quickSummary: 'Banjir adalah peristiwa terendamnya daratan oleh luapan air melebihi kapasitas saluran atau sungai. Banjir bandang (flash flood) merupakan jenis banjir yang datang secara mendadak dengan debit air sangat besar dan arus berkecepatan tinggi, sering kali membawa sedimen lumpur, bebatuan, dan batang pohon tumbang.',
    penjelasanLengkap: [
      'Banjir diklasifikasikan menjadi beberapa kategori: (1) Banjir Genangan (luapan lambat akibat hujan lokal intensitas tinggi dan buruknya drainase perkotaan); (2) Banjir Kiriman (akibat curah hujan ekstrem di hulu daerah aliran sungai); (3) Banjir Rob (limpasan pasang air laut ke wilayah pesisir); dan (4) Banjir Bandang (flash flood).',
      'Banjir bandang biasanya dipicu oleh jebolnya bendung alam (natural dam) di hulu sungai pegunungan. Bendung alam terbentuk saat longsoran tanah dan potongan kayu menyumbat aliran sungai di lembah sempit. Ketika volume air yang tertahan di balik bendung alam tersebut meluap dan menjebol sumbatan, massa air raksasa bertekanan tinggi menggelontor turun dengan kecepatan luar biasa melindas apa pun di bantarannya.',
      'Faktor perusak utama banjir bandang bukan hanya air, melainkan muatan padatan (sediment load) berupa lumpur pekat dan gelondongan kayu gelondongan yang bertindak seperti peluru peroboh pilar jembatan dan tembok rumah.'
    ],
    ciriCiri: [
      'Air sungai di bagian hilir mendadak surut atau arusnya mengecil secara misterius meskipun hujan deras sedang melanda hulu.',
      'Warna air sungai mendadak berubah menjadi sangat cokelat pekat, keruh, dan berlumpur tebal.',
      'Terdengar suara gemuruh menggelegar dari arah hulu sungai seperti deru kereta api uap mendekat.',
      'Bau lumpur basah pekat dan dedaunan busuk yang tercium mendadak di sepanjang bantaran sungai.',
      'Gelombang air pertama datang membawa ranting-ranting pohon terapung dan bongkahan batu yang saling bertubrukan.'
    ],
    tandaTandaAwal: [
      {
        gejala: 'Hujan Lebat Sangat Deras di Daerah Pegunungan Hulu Berjam-jam',
        penjelasan: 'Jika kawasan pegunungan hulu tampak tertutup awan hitam pekat (Cumulonimbus) dan terjadi hujan lebat terus menerus, waspadai lonjakan debit sungai di hilir.',
        rentangWaktu: '1 hingga 4 jam sebelum air bah tiba di hilir'
      },
      {
        gejala: 'Debit Aliran Sungai Mendadak Berkurang Drastis Tanpa Sebab Jelas',
        penjelasan: 'Air sungai di hilir mendadak turun drastis padahal di hulu hujan lebat. Ini adalah tanda bahaya kritis bahwa aliran sungai di hulu telah terbendung longsoran kayu (tanggul alam temporer).',
        rentangWaktu: '30 menit hingga 2 jam sebelum tanggul alam jebol'
      },
      {
        gejala: 'Suara Gemuruh Keras dan Dentuman Kayu dari Arah Hulu',
        penjelasan: 'Suara tubrukan batu besar dan kayu gelondongan yang dihanyutkan oleh gelombang air bah yang melaju cepat menuruni lembah.',
        rentangWaktu: '5 hingga 15 menit sebelum gelombang air menerjang pemukiman'
      }
    ],
    mitigasi: {
      praBencana: [
        'Dilarang mendirikan bangunan tempat tinggal di sempadan bantaran sungai aktif.',
        'Lakukan penghijauan hutan daerah tangkapan air (catchment area) dan stop pembalakan liar (illegal logging).',
        'Normalisasi sungai secara berkala dan bersihkan saluran drainase dari tumpukan sampah plastik.',
        'Bentuk tim relawan pantau hulu sungai yang dilengkapi radio komunikasi handy talky (HT) untuk peringatan dini.'
      ],
      saatBencana: [
        'Segera evakuasi ke tempat yang lebih tinggi (bukit atau lantai dua gedung kokoh) begitu tanda awal terdeteksi.',
        'Jangan pernah menyeberangi jembatan atau arus air banjir yang kedalamannya melebihi lutut; arus 15 cm saja mampu menjatuhkan orang dewasa.',
        'Jangan berusaha menyelamatkan kendaraan mobil yang mulai hanyut; segera tinggalkan kendaraan seketika.',
        'Matikan aliran listrik sekring utama dari meteran untuk mencegah sengatan listrik fatal di dalam genangan air.'
      ],
      pascaBencana: [
        'Waspadai gigitan ular berbisa dan sengatan serangga yang mengungsi ke tempat kering bersama manusia.',
        'Gunakan sepatu bot karet tebal saat membersihkan endapan lumpur pekat di dalam rumah.',
        'Minum hanya air yang sudah dimasak mendidih sempurna untuk mencegah wabah kolera, disentri, dan leptospirosis.'
      ]
    },
    dampak: {
      fisik: [
        'Jembatan dan jalan penghubung putus tersapu gelondongan kayu dan arus turbulen.',
        'Ratusan rumah hancur rata dengan tanah atau terpendam lumpur setebal 1 hingga 2 meter.',
        'Instalasi pengolahan air bersih (PDAM) rusak parah tercemar sedimen lumpur vulkanik/liat.'
      ],
      ekologis: [
        'Pendangkalan muara sungai dan kerusakan terumbu karang akibat limpasan sedimen tanah ke laut.',
        'Hilangnya vegetasi tepian sungai dan hanyutnya keanekaragaman hayati mikroorganisme tanah.'
      ],
      sosioEkonomi: [
        'Korban hanyut tenggelam dan cedera trauma tumpul akibat hantaman kayu gelondongan.',
        'Ancaman wabah penyakit menular kencing tikus (leptospirosis) dan diare massal di kamp pengungsian.'
      ]
    },
    infobox: {
      kategori: 'Hidrologis',
      penyebabUtama: 'Jebolnya bendung alam hulu sungai, hujan ekstrem lebat, sedimentasi DAS, degradasi hutan',
      skalaPengukuran: 'Tinggi Muka Air (TMA / meter), Debit Aliran (m³/detik), Luas Genangan (hektar)',
      tingkatBahaya: 'Tinggi',
      kecepatanDatang: 'Sangat Cepat (15 – 60 menit untuk banjir bandang)',
      wilayahRawan: 'Lembah sungai Sumatra Barat, lereng Gunung Merapi, Garut Jawa Barat, Sentani Papua, Luwu Utara',
      instansiPemantau: 'Balai Besar Wilayah Sungai (BBWS/Ditjen SDA KemenPUPR), BMKG, BNPB',
      nomorDarurat: '112, 115 (Basarnas), 117 (BNPB)'
    },
    studiKasus: [
      {
        peristiwa: 'Banjir Bandang & Lahar Dingin Galunggung/Sumatra Barat',
        tahun: 2024,
        lokasi: 'Tanah Datar, Agam, dan Padang Pariaman, Sumbar',
        magnitudoAtauDampak: 'Debit lumpur & lahar dingin Gunung Marapi',
        ringkasan: 'Hujan berintensitas tinggi mengguyur material endapan erupsi Marapi membangkitkan banjir bandang yang merenggut puluhan korban jiwa.'
      },
      {
        peristiwa: 'Banjir Bandang Sentani',
        tahun: 2019,
        lokasi: 'Kabupaten Jayapura, Papua',
        magnitudoAtauDampak: 'Luncuran kayu gelondongan dan batu besar dari Pegunungan Cycloop',
        ringkasan: 'Merenggut lebih dari 100 korban jiwa dan merusak ribuan rumah akibat kerusakan hutan di cagar alam hulu.'
      }
    ],
    referensi: [
      {
        nomor: 1,
        penulis: 'Direktorat Jenderal Sumber Daya Air Kementerian PUPR',
        judul: 'Modul Mitigasi dan Peringatan Dini Banjir Bandang Berbasis Komunitas',
        penerbit: 'PUPR Press',
        tahun: 2022
      },
      {
        nomor: 2,
        penulis: 'World Meteorological Organization (WMO)',
        judul: 'Flash Flood Guidance System (FFGS) with Global Coverage',
        penerbit: 'WMO Operational Manual No. 1120',
        tahun: 2023
      }
    ],
    terakhirDiperbarui: '29 Oktober 2026'
  },
  {
    id: 'angin-puting-beliung',
    name: 'Angin Puting Beliung & Siklon',
    scientificName: 'Turbo Ventorum / Tornado & Cyclone',
    pronunciation: '/ˈa.ŋɪn ˈpu.tɪŋ bəˈli.ʊŋ/',
    category: 'Meteorologis & Klimatologis',
    image: '/src/assets/images/volcano_eruption_plume_1793600486420.jpg',
    imageCaption: 'Pusaran udara berputar vertikal berkecepatan tinggi yang terbentuk di bawah dasar awan Cumulonimbus gelap.',
    quickSummary: 'Angin puting beliung adalah pusaran angin kencang berputar yang keluar dari awan badai Cumulonimbus dengan kecepatan melampaui 63 km/jam dan menyentuh permukaan bumi, umumnya terjadi pada masa pancaroba peralihan musim di wilayah tropis.',
    penjelasanLengkap: [
      'Puting beliung di Indonesia setara dengan fenomena tornado skala kecil (small tornado/waterspout). Terjadi akibat konveksi udara panas lokal yang kuat di siang hari terik, diikuti oleh pembentukan awan Cumulonimbus (Cb) raksasa yang padat dan gelap vertikal.',
      'Perbedaan suhu dan tekanan udara yang sangat tajam antara udara hangat yang naik (updraft) dan udara dingin yang turun (downdraft) memicu pusaran udara heliks berotasi kencang berbentuk corong (funnel cloud) yang menjulur dari dasar awan hingga menghempas daratan.',
      'Durasi puting beliung umumnya berlangsung singkat (berkisar antara 3 hingga 10 menit) dengan radius sapuan sempit (50 hingga 200 meter), namun daya destruktifnya sangat tinggi mampu mencabut pohon berdiameter besar dan menerbangkan atap seng rumah.'
    ],
    ciriCiri: [
      'Udara terasa sangat panas, gerah, dan pengap (sultry) sejak pagi hingga menjelang siang hari.',
      'Muncul awan putih berlapis yang cepat bertransformasi menjadi gumpalan awan Cumulonimbus hitam pekat bertepi abu-abu gelap.',
      'Ranting pepohonan di sekitar mulai bergoyang ke segala arah secara tidak teratur akibat hembusan angin kencang.',
      'Terdengar suara menderu kencang seperti hembusan baling-baling helikopter raksasa yang terbang sangat rendah.',
      'Corong angin berputar menyedot sampah, debu, atap seng, dan dedaunan berputar naik membubung ke angkasa.'
    ],
    tandaTandaAwal: [
      {
        gejala: 'Hawa Pengap Luar Biasa Sejak Pagi Hari',
        penjelasan: 'Pemanasan radiasi matahari yang kuat menyebabkan penguapan uap air lokal sangat intensif sehingga kelembapan udara mendekati jenuh.',
        rentangWaktu: '3 hingga 6 jam sebelum badai terbentuk'
      },
      {
        gejala: 'Awan Berbentuk Menara Kolom (Cumulus Congestus Menjadi Cb)',
        penjelasan: 'Awan putih berkembang cepat membumbung tinggi membentuk menara vertikal dengan puncak melebar menyerupai landasan besi (anvil cloud).',
        rentangWaktu: '30 hingga 60 menit sebelum pusaran turun'
      },
      {
        gejala: 'Hembusan Udara Dingin Tiba-Tiba (Downdraft Gust)',
        penjelasan: 'Mendadak terasa hembusan angin sejuk yang sangat dingin menggantikan hawa panas gerah sebelumnya, disusul rintik hujan lebat disertai butiran es.',
        rentangWaktu: '5 hingga 15 menit sebelum puting beliung menyentuh tanah'
      }
    ],
    mitigasi: {
      praBencana: [
        'Pangkas dahan dan ranting pohon besar yang rimbun dan lapuk di pekarangan rumah agar tidak mudah tumbang.',
        'Perkuat ikatan struktur atap rumah (khususnya reng, usuk, dan baut seng) dengan baut penahan angin kencang.',
        'Bangun struktur rumah dengan dinding permanen dan hindari pemasangan papan reklame yang rapuh di atap rumah.',
        'Perhatikan rilis peringatan dini cuaca ekstrem harian dari BMKG.'
      ],
      saatBencana: [
        'Segera masuk ke dalam ruangan tertutup di tengah rumah (seperti kamar mandi atau lorong bawah tangga) yang jauh dari jendela kaca.',
        'Tunduk berlutut di lantai dan lindungi kepala serta tengkuk dengan kedua belah tangan atau bantal empuk.',
        'Jauhi jendela kaca, etalase toko, dan pintu berpanel kaca lebar yang berisiko pecah berkeping-keping.',
        'Jika berada di dalam mobil, segera keluar dan cari cekungan tanah atau parit kering yang aman, lalu tiarap melindungi kepala.',
        'Jangan pernah berteduh di bawah pohon rindang, baliho iklan, atau tiang listrik jaringan tinggi.'
      ],
      pascaBencana: [
        'Waspadai kabel listrik terbuka yang putus bergelantungan di jalanan atau tergenang air sisa hujan badai.',
        'Bantu tetangga yang tertimpa reruntuhan atap dan laporkan kerusakan jaringan listrik ke PLN 123.',
        'Gunakan sarung tangan tebal dan sepatu tertutup saat membersihkan pecahan kaca dan seng berkarat tajam.'
      ]
    },
    dampak: {
      fisik: [
        'Ratusan atap rumah terkelupas terbang tersapu pusaran angin.',
        'Pohon tumbang massal yang menimpa jaringan kabel telepon, listrik, dan mobil warga.',
        'Fasilitas publik seperti halte bus, kanopi pasar, dan papan reklame ambruk berserakan.'
      ],
      ekologis: [
        'Kerusakan tajuk kanopi pepohonan hutan kota dan gangguan sementara satwa terbang.',
        'Terjadinya hujan es lokal yang dapat merusak daun tanaman perkebunan holtikultura.'
      ],
      sosioEkonomi: [
        'Luka-luka robek akibat pecahan serpihan seng terbang dan trauma anak-anak.',
        'Pemadaman listrik massal berhari-hari akibat robohnya tiang transformator distribusi.'
      ]
    },
    infobox: {
      kategori: 'Meteorologis & Klimatologis',
      penyebabUtama: 'Konveksi termal lokal kuat, awan Cumulonimbus, geseran angin vertikal (wind shear)',
      skalaPengukuran: 'Skala Fujita yang Ditingkatkan (EF0 s.d. EF5), Kecepatan Angin (Knot / Km/jam)',
      tingkatBahaya: 'Sedang',
      kecepatanDatang: 'Cepat (hitungan menit setelah pembentukan corong awan)',
      wilayahRawan: 'Dataran terbuka Jawa, Sumatra bagian timur, Nusa Tenggara, Sulawesi Selatan pada masa pancaroba',
      instansiPemantau: 'Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)',
      nomorDarurat: '112, 115 (Basarnas), 123 (PLN Darurat Listrik)'
    },
    studiKasus: [
      {
        peristiwa: 'Tornado/Puting Beliung Rancaekek',
        tahun: 2024,
        lokasi: 'Rancaekek, Bandung & Jatinangor Sumedang, Jawa Barat',
        magnitudoAtauDampak: 'Kecepatan pusaran > 100 km/jam, durasi ~15 menit',
        ringkasan: 'Salah satu puting beliung terkuat di Jawa yang merusak ratusan pabrik dan rumah warga dengan pola pusaran setara skala EF1-EF2.'
      },
      {
        peristiwa: 'Siklon Tropis Seroja',
        tahun: 2021,
        lokasi: 'Nusa Tenggara Timur (NTT)',
        magnitudoAtauDampak: 'Kecepatan angin > 130 km/jam disertai hujan badai ekstrem',
        ringkasan: 'Siklon tropis langka yang berkembang dekat daratan kepulauan Indonesia memicu gelombang tinggi, puting beliung, dan longsor masif.'
      }
    ],
    referensi: [
      {
        nomor: 1,
        penulis: 'Sub-Bidang Peringatan Dini Cuaca Ekstrem BMKG',
        judul: 'Dinamika Atmosfer Pembentukan Puting Beliung di Wilayah Kepulauan Indonesia',
        penerbit: 'Pusat Meteorologi Publik BMKG',
        tahun: 2024
      },
      {
        nomor: 2,
        penulis: 'Doswell, C.A.',
        judul: 'Severe Convective Storms: Climatology and Hazard Mitigation',
        penerbit: 'American Meteorological Society',
        tahun: 2021
      }
    ],
    terakhirDiperbarui: '20 Oktober 2026'
  },
  {
    id: 'likuefaksi',
    name: 'Likuefaksi Tanah',
    scientificName: 'Liquefactio Soli / Soil Liquefaction',
    pronunciation: '/li.kweˈfak.si ˈta.nah/',
    category: 'Geologis',
    image: '/src/assets/images/gempa_earthquake_fault_1793600486920.jpg',
    imageCaption: 'Deformasi struktural tanah aluvium jenuh air yang kehilangan gaya geser dan berubah menjadi fluida lumpur hisap.',
    quickSummary: 'Likuefaksi adalah fenomena geoteknik di mana tanah non-kohesif yang jenuh air kehilangan kekuatan gesernya dan bertindak sebagai fluida kental cair akibat meningkatnya tekanan air pori akibat getaran gempa bumi yang berulang-ulang.',
    penjelasanLengkap: [
      'Likuefaksi (pencairan tanah) terjadi pada lapisan tanah berbutir pasir lepas atau lanau yang berada di bawah muka air tanah dangkal (< 5 meter). Ketika gempa bumi berkekuatan kuat mengguncang tanah secara siklis berulang kali, partikel-partikel butiran pasir terdorong untuk memadat.',
      'Namun, karena ruang pori terisi penuh oleh air dan getaran terjadi sangat cepat, air tidak sempat keluar. Akibatnya, tekanan air pori (pore water pressure) melonjak drastis hingga menyamai total tegangan beban di atasnya. Saat tekanan air pori mencapai titik ini, butiran tanah kehilangan kontak fisik satu sama lain sehingga tanah seketika berubah wujud dari benda padat menjadi bubur fluida lumpur hisap yang cair.',
      'Akibat hilangnya daya dukung tanah ini, bangunan berat di atasnya akan tenggelam, miring, amblas, atau bahkan hanyut terbawa aliran lumpur yang bergerak menuruni kemiringan lereng yang sangat landai (flow liquefaction).'
    ],
    ciriCiri: [
      'Semburan pasir bercampur air mendadak memancar keluar dari rekahan tanah atau lantai rumah (sand boil / volcano pasir).',
      'Permukaan tanah mendadak lembek, bergelombang seperti jeli atau rawa hisap saat diinjak.',
      'Bangunan rumah dan gedung bertingkat tenggelam secara vertikal atau terguling utuh tanpa hancur retak struktural.',
      'Tiang listrik dan pohon roboh miring ke berbagai arah tidak beraturan akibat hilangnya fondasi bawah tanah.',
      'Pergerakan lateral (lateral spreading) di mana blok tanah bergeser horizontal hingga ratusan meter menuruni lereng landai.'
    ],
    tandaTandaAwal: [
      {
        gejala: 'Guncangan Gempa Bumi Dangkal Kuat (> Mw 6.5) Berdurasi Lama',
        penjelasan: 'Likuefaksi membutuhkan getaran siklis berkelanjutan minimal 15 hingga 30 detik pada tanah pasir aluvial jenuh.',
        rentangWaktu: 'Saat atau beberapa detik setelah fase puncak gempa utama'
      },
      {
        gejala: 'Rembesan Air dan Gelembung Udara Menyembur dari Retakan Lantai',
        penjelasan: 'Peningkatan tekanan air pori bawah tanah memaksa air dan butiran pasir halus naik ke atas permukaan mencari celah keluar.',
        rentangWaktu: '10 hingga 60 detik saat guncangan gempa sedang berlangsung'
      },
      {
        gejala: 'Karakteristik Wilayah Berupa Dataran Pasir Aluvial Sungai/Pesisir',
        penjelasan: 'Zona endapan muda bekas rawa, tepian danau, atau lembah sungai purba dengan muka air tanah sangat tinggi adalah indikator kerentanan alami.',
        rentangWaktu: 'Prakondisi geologis tetap'
      }
    ],
    mitigasi: {
      praBencana: [
        'Melakukan uji geoteknik Standard Penetration Test (SPT) dan Cone Penetration Test (CPT) sebelum membangun pemukiman.',
        'Menerapkan teknik perbaikan tanah (soil improvement) seperti pemadatan dinamis (dynamic compaction) atau tiang batu (stone columns).',
        'Menggunakan fondasi tiang pancang dalam (deep pile foundation) yang menancap hingga lapisan batuan keras (bedrock).',
        'Mematuhi zonasi tata ruang wilayah rawan likuefaksi dan melarang pembangunan perumahan di bekas endapan rawa aluvial.'
      ],
      saatBencana: [
        'Jangan mencoba berjalan atau berlari di atas tanah yang sedang mencair menjadi lumpur hisap.',
        'Cari tumpuan pada permukaan yang lebih keras atau panjat atap/struktur yang masih stabil.',
        'Raih benda terapung lebar (pintu kayu, kasur busa, bambu) untuk menyebarkan berat badan agar tidak tersedot amblas.',
        'Jauhi tepi lereng, tebing bantaran sungai, dan saluran irigasi yang rentan tersapu pergeseran lateral (lateral spread).'
      ],
      pascaBencana: [
        'Jangan mendekati area lumpur sebelum dinyatakan mengering dan memadat kembali oleh otoritas geologi.',
        'Waspadai kontaminasi air sumur dengan lumpur sisa semburan pasir belerang atau bakteri patogen.',
        'Lakukan pemetaan ulang deformasi kontur tanah sebelum merencanakan rekonstruksi permukiman baru.'
      ]
    },
    dampak: {
      fisik: [
        'Ribuan rumah ditelan bumi dan terkubur lumpur likuefaksi sedalam 3 hingga 5 meter.',
        'Patahan dan pergeseran pipa distribusi air bersih bawah tanah, saluran pembuangan, dan kabel optik bawah tanah.',
        'Jembatan dan jalan raya retak terangkat atau amblas putus total tidak bisa dilalui kendaraan.'
      ],
      ekologis: [
        'Perubahan permanen topografi lanskap daerah aliran sungai dan rusaknya kesuburan lahan pertanian.',
        'Timbunan pasir dan lumpur tebal menutupi ekosistem flora endemik setempat.'
      ],
      sosioEkonomi: [
        'Tingginya angka korban jiwa hilang terkubur lumpur hidup tanpa jasad yang berhasil dievakuasi.',
        'Trauma psikologis mendalam pada korban selamat dan relokasi paksa ratusan ribu warga ke zona aman baru.'
      ]
    },
    infobox: {
      kategori: 'Geologis',
      penyebabUtama: 'Tegangan geser siklis akibat gempa, kejenuhan air tanah dangkal, susunan butir pasir lepas',
      skalaPengukuran: 'Liquefaction Potential Index (LPI), Faktor Keamanan Likuefaksi (FS)',
      tingkatBahaya: 'Sangat Tinggi',
      kecepatanDatang: 'Cepat (terpicu seketika saat gempa berlangsung)',
      wilayahRawan: 'Lembah Palu (Petobo, Balaroa, Jono Oge), Padang, pesisir barat Sumatra, dataran aluvium Jawa',
      instansiPemantau: 'Pusat Air Tanah dan Geologi Tata Lingkungan (PATGTL) Badan Geologi, BMKG',
      nomorDarurat: '112, 115 (Basarnas), 117 (BNPB)'
    },
    studiKasus: [
      {
        peristiwa: 'Likuefaksi Masif Petobo & Balaroa',
        tahun: 2018,
        lokasi: 'Kota Palu dan Kabupaten Sigi, Sulawesi Tengah',
        magnitudoAtauDampak: 'Lebih dari 2.000 rumah tenggelam dan bergeser ratusan meter',
        ringkasan: 'Gempa Mw 7.5 memicu likuefaksi aliran (flow liquefaction) paling dramatis di dunia, mengubah perkampungan menjadi lautan lumpur bergerak.'
      },
      {
        peristiwa: 'Likuefaksi Gempa Niigata',
        tahun: 1964,
        lokasi: 'Niigata, Jepang',
        magnitudoAtauDampak: 'Gedung apartemen berlantai 4 rebah utuh 80 derajat tanpa hancur',
        ringkasan: 'Peristiwa tonggak sejarah yang mengawali riset ilmiah internasional mengenai mekanika tanah dan rekayasa kegempaan fondasi.'
      }
    ],
    referensi: [
      {
        nomor: 1,
        penulis: 'Badan Geologi Kementerian ESDM',
        judul: 'Atlas Kerentanan Likuefaksi Indonesia dan Kajian Morfometri Geoteknik',
        penerbit: 'Pusat Survei Geologi Bandung',
        tahun: 2021
      },
      {
        nomor: 2,
        penulis: 'Seed, H.B. & Idriss, I.M.',
        judul: 'Simplified Procedure for Evaluating Soil Liquefaction Potential',
        penerbit: 'Journal of Geotechnical Engineering Division',
        tahun: 2018
      }
    ],
    terakhirDiperbarui: '25 Oktober 2026'
  },
  {
    id: 'karhutla',
    name: 'Kebakaran Hutan & Lahan (Karhutla)',
    scientificName: 'Incendium Silvarum / Wildfire',
    pronunciation: '/kə.baˈka.ran ˈhu.tan/',
    category: 'Meteorologis & Klimatologis',
    image: '/src/assets/images/volcano_eruption_plume_1793600486420.jpg',
    imageCaption: 'Kabut asap pekat membubung tinggi dari lapisan gambut yang membara di bawah permukaan tanah.',
    quickSummary: 'Kebakaran hutan dan lahan (Karhutla) adalah peristiwa terbakarnya hutan atau lahan gambut baik secara alami maupun akibat ulah manusia, yang menimbulkan kerugian lingkungan hidup, kerugian ekonomi, serta kabut asap lintas batas (transboundary haze).',
    penjelasanLengkap: [
      'Karhutla di kawasan tropis Indonesia memiliki keunikan khusus karena sebagian besar terjadi di lahan basah gambut (peatland). Tanah gambut tersusun atas akumulasi sisa tumbuhan setengah membusuk berumur ribuan tahun dengan ketebalan mencapai beberapa meter.',
      'Ketika kanal pengeringan buatan dibuka untuk perkebunan, lahan gambut mengering dan berubah menjadi bahan bakar padat yang sangat mudah tersulut. Kebakaran gambut bersifat smoldering (membara lambat di bawah permukaan tanah tanpa nyala api terbuka) yang menghasilkan asap karbon monoksida, gas rumah kaca metana, dan partikulat halus PM2.5 dalam jumlah sangat masif.',
      'Fenomena iklim global El Niño (anomali peningkatan suhu muka laut di Pasifik Tengah) sering kali memperparah kekeringan ekstrem di Indonesia, memicu musim kemarau berkepanjangan yang memperluas rembetan api hingga jutaan hektar.'
    ],
    ciriCiri: [
      'Langit berubah warna menjadi kuning tembaga atau merah jingga pekat bahkan di siang hari terik.',
      'Penurunan drastis jarak pandang (visibility) di bawah 500 meter akibat tebalnya kabut asap (smog).',
      'Bau gosong kayu dan asam menyengat yang menyebabkan mata perih dan tenggorokan gatal seketika.',
      'Ditemukan titik panas (hotspot) dengan anomali suhu termal tinggi yang terpantau satelit Terra/Aqua Modis.',
      'Bara api bawah tanah (ground fire) yang merambat tanpa terlihat api di permukaan namun tanah terasa membara saat diinjak.'
    ],
    tandaTandaAwal: [
      {
        gejala: 'Musim Kemarau Panjang Akibat El Niño Moderat hingga Kuat',
        penjelasan: 'Tidak turun hujan lebih dari 30 hingga 60 hari berturut-turut diiringi kelembapan tanah gambut yang turun drastis di bawah titik kritis.',
        rentangWaktu: 'Berminggu-minggu sebelum puncak titik api merebak'
      },
      {
        gejala: 'Peningkatan Pesat Jumlah Titik Panas (Hotspot) Berdasarkan Data Satelit BMKG',
        penjelasan: 'Pendeteksian satelit cuaca menunjukkan klaster anomali suhu termal di area konsesi perkebunan atau hutan lindung.',
        rentangWaktu: 'Beberapa hari hingga hitungan jam sebelum api meluas tak terkendali'
      },
      {
        gejala: 'Penurunan Tinggi Muka Air Tanah Gambut di Bawah 40 cm',
        penjelasan: 'Sesuai regulasi Badan Restorasi Gambut (BRG), jika tinggi air muka gambut turun melampaui 40 cm, gambut masuk dalam kategori bahaya sangat mudah terbakar.',
        rentangWaktu: 'Indikator mingguan masa kering'
      }
    ],
    mitigasi: {
      praBencana: [
        'Hentikan praktik pembukaan lahan dengan cara membakar (zero burning policy).',
        'Lakukan sekat kanal (canal blocking) untuk menjaga lahan gambut tetap basah tergenang air sepanjang tahun.',
        'Membentuk dan melatih kelompok Masyarakat Peduli Api (MPA) di setiap desa rawan karhutla.',
        'Mempersiapkan embung air darurat dan pompa air apung untuk pemadaman dini di dekat sekat kanal.'
      ],
      saatBencana: [
        'Gunakan masker respirator partikulat N95 atau masker khusus anti-asap saat beraktivitas di luar rumah.',
        'Nyalakan lampu utama kendaraan bermotor di siang hari karena jarak pandang sangat terbatas.',
        'Lakukan water bombing (pengeboman air melalui helikopter) dan teknologi modifikasi cuaca (TMC/hujan buatan).',
        'Terapkan teknik pemadaman bawah tanah (injeksi nozzle air bertekanan ke dalam lapisan gambut).'
      ],
      pascaBencana: [
        'Lakukan revegetasi dengan tanaman endemik ramah gambut seperti jelutung rawa, sagu, dan nyatoh.',
        'Periksa dan obati warga yang menderita ISPA, pneumonia, iritasi kornea, dan asma di puskesmas darurat.',
        'Tutup kembali kanal-kanal drainase liar untuk memulihkan fungsi hidrologis kubah gambut.'
      ]
    },
    dampak: {
      fisik: [
        'Hancurnya jutaan hektar hutan lindung, cagar biosfer, dan keanekaragaman flora langka.',
        'Lumpuhnya lalu lintas penerbangan bandara dan transportasi sungai akibat tebalnya kabut asap.'
      ],
      ekologis: [
        'Pelepasan gigaton emisi gas karbon monoksida dan gas rumah kaca pemicu percepatan krisis iklim global.',
        'Kematian dan kepunahan satwa langka yang dilindungi seperti orangutan Sumatra, harimau, dan bekantan.'
      ],
      sosioEkonomi: [
        'Ratusan ribu warga menderita infeksi saluran pernapasan akut (ISPA) berat.',
        'Protes diplomatik antar-negara Asia Tenggara akibat kabut asap lintas batas (transboundary haze) serta kerugian ekonomi pariwisata.'
      ]
    },
    infobox: {
      kategori: 'Meteorologis & Klimatologis',
      penyebabUtama: 'Pembukaan lahan dengan cara membakar, pengeringan kubah gambut, kekeringan El Niño',
      skalaPengukuran: 'Indeks Standar Pencemar Udara (ISPU / AQI), Luas Kebakaran (Hektar), Jumlah Hotspot',
      tingkatBahaya: 'Tinggi',
      kecepatanDatang: 'Bertahap (hari ke minggu) namun sangat sulit dipadamkan begitu merambat di bawah tanah',
      wilayahRawan: 'Riau, Jambi, Sumatra Selatan, Kalimantan Barat, Kalimantan Tengah, Kalimantan Selatan, Papua Selatan',
      instansiPemantau: 'Kementerian Lingkungan Hidup dan Kehutanan (KLHK), BMKG, BNPB, BRGM',
      nomorDarurat: '112, 117 (BNPB), Posko Manggala Agni KLHK'
    },
    studiKasus: [
      {
        peristiwa: 'Krisis Karhutla & Asap Lintas Batas',
        tahun: 2015,
        lokasi: 'Sumatra dan Kalimantan',
        magnitudoAtauDampak: '2.6 juta hektar lahan terbakar, ISPU tembus > 1.000',
        ringkasan: 'Salah satu bencana kabut asap terburuk dalam sejarah Indonesia yang menyebabkan status darurat pencemaran udara dan kerugian ekonomi hingga Rp 220 triliun.'
      },
      {
        peristiwa: 'Kebakaran Hutan Bromo',
        tahun: 2023,
        lokasi: 'Taman Nasional Bromo Tengger Semeru, Jawa Timur',
        magnitudoAtauDampak: 'Lebih dari 500 hektar savana terbakar',
        ringkasan: 'Dipicu oleh kelalaian penggunaan cerawat flare saat sesi foto komersial di puncak musim kemarau savana yang kering.'
      }
    ],
    referensi: [
      {
        nomor: 1,
        penulis: 'Direktorat Pengendalian Kebakaran Hutan dan Lahan KLHK',
        judul: 'Panduan Operasional Pengendalian Kebakaran Hutan dan Lahan Gambut',
        penerbit: 'Kementerian Lingkungan Hidup dan Kehutanan RI',
        tahun: 2023
      },
      {
        nomor: 2,
        penulis: 'Gaveau, D.L.A. et al.',
        judul: 'Major atmospheric emissions from peat fires in Southeast Asia during dry spells',
        penerbit: 'Nature Climate Change',
        tahun: 2020
      }
    ],
    terakhirDiperbarui: '26 Oktober 2026'
  }
];

export const EMERGENCY_CONTACTS = [
  { nomor: '112', instansi: 'Layanan Darurat Terpadu Nasional (Bebas Pulsa)', deskripsi: 'Panggilan tunggal darurat untuk ambulans, pemadam kebakaran, kepolisian, dan SAR.' },
  { nomor: '115', instansi: 'Badan Nasional Pencarian dan Pertolongan (BASARNAS)', deskripsi: 'Operasi evakuasi, pencarian, dan pertolongan korban bencana darat maupun laut.' },
  { nomor: '117', instansi: 'Pusdalops Badan Nasional Penanggulangan Bencana (BNPB)', deskripsi: 'Laporan bencana alam, distribusi logistik tenda darurat, dan koordinasi daerah.' },
  { nomor: '119', instansi: 'National Command Center Kementerian Kesehatan (Ambulans)', deskripsi: 'Pertolongan pertama medis gawat darurat dan rujukan rumah sakit darurat.' },
  { nomor: '113', instansi: 'Dinas Pemadam Kebakaran dan Penyelamatan (Damkar)', deskripsi: 'Penanganan kebakaran permukiman, kebakaran hutan terdekat, dan evakuasi runtuhan.' },
  { nomor: '123', instansi: 'PLN Call Center (Kelistrikan Darurat)', deskripsi: 'Pelaporan kabel listrik putus, trafo meledak, dan permohonan pemutusan arus banjir.' }
];

export const SURVIVAL_KIT_ITEMS = [
  { id: 'air', nama: 'Air Minum Bersih', jumlah: 'Minimal 3 liter per orang (kebutuhan 3 hari)', penting: true, kategori: 'Kebutuhan Pokok' },
  { id: 'makanan', nama: 'Makanan Kaleng & Makanan Siap Saji', jumlah: 'Ransum tahan lama, biskuit energi, kornet/sarden', penting: true, kategori: 'Kebutuhan Pokok' },
  { id: 'p3k', nama: 'Kotak P3K Lengkap', jumlah: 'Kasa steril, betadine, plester, parasetamol, obat diare & pribadi', penting: true, kategori: 'Medis' },
  { id: 'senter', nama: 'Senter LED & Baterai Cadangan', jumlah: 'Senter tahan air / headlamp + baterai baru', penting: true, kategori: 'Peralatan' },
  { id: 'peluit', nama: 'Peluit Tanda Bahaya', jumlah: '1 buah untuk setiap anggota keluarga (memanggil tim SAR)', penting: true, kategori: 'Peralatan' },
  { id: 'radio', nama: 'Radio Portabel Baterai / Dinamo', jumlah: 'Untuk mendengarkan siaran info darurat BMKG & BNPB', penting: true, kategori: 'Informasi' },
  { id: 'dokumen', nama: 'Dokumen Penting dalam Kantong Kedap Air', jumlah: 'KTP, KK, Akta Lahir, Surat Tanah, Ijazah, Polis Asuransi', penting: true, kategori: 'Administrasi' },
  { id: 'uang', nama: 'Uang Tunai Pecahan Kecil', jumlah: 'Secukupnya (karena mesin ATM dan kasir digital akan mati listrik)', penting: true, kategori: 'Administrasi' },
  { id: 'pakaian', nama: 'Pakaian Hangat & Jas Hujan', jumlah: '1-2 set pakaian kering ganti, selimut thermal darurat', penting: false, kategori: 'Sandang' },
  { id: 'masker', nama: 'Masker Respirator (N95 / Medis)', jumlah: 'Minimal 5-10 lembar untuk menangkal debu/asap/abu', penting: true, kategori: 'Kesehatan' },
  { id: 'kebersihan', nama: 'Perlengkapan Higienis Pribadi', jumlah: 'Sabun, sikat gigi, pembalut wanita, hand sanitizer, tisu basah', penting: false, kategori: 'Kesehatan' },
  { id: 'powerbank', nama: 'Powerbank Cadangan Daya HP', jumlah: 'Kapasitas minimal 10.000 mAh dalam kondisi terisi penuh', penting: false, kategori: 'Elektronik' }
];

export const DRILL_QUESTIONS = [
  {
    id: 1,
    skenario: 'Anda sedang berada di lantai 3 sebuah gedung perkantoran saat tiba-tiba terjadi guncangan gempa bumi kuat yang membuat lampu bergoyang kencang dan barang terjatuh.',
    opsi: [
      { text: 'Segera lari secepat mungkin menuruni tangga atau menggunakan lift gedung untuk keluar.', correct: false, explanation: 'Salah! Menggunakan lift sangat berbahaya karena risiko listrik padam atau tali lift macet. Berlari saat gempa sedang berguncang hebat juga membuat Anda mudah terjatuh atau tertimpa reruntuhan.' },
      { text: 'Terapkan DROP, COVER, HOLD ON: Segera berlutut di bawah meja kerja kokoh, lindungi kepala dan leher, serta pegang erat kaki meja.', correct: true, explanation: 'Tepat sekali! Drop, Cover, and Hold On adalah protokol keselamatan internasional yang terbukti menyelamatkan dari benturan plafon dan puing jatuh.' },
      { text: 'Berdiri di dekat jendela kaca besar untuk melihat apakah bangunan di luar ikut runtuh.', correct: false, explanation: 'Sangat berbahaya! Kaca jendela bisa pecah berkeping-keping akibat tegangan geser gempa dan melukai Anda.' }
    ]
  },
  {
    id: 2,
    skenario: 'Anda sedang menikmati liburan di pantai. Setelah merasakan gempa selama 25 detik, Anda melihat air laut di bibir pantai mendadak surut drastis hingga puluhan meter dan dasar laut terlihat.',
    opsi: [
      { text: 'Segera lari bersama warga ke tepi pantai untuk mengambil ikan-ikan segar yang terdampar.', correct: false, explanation: 'Salah dan sangat fatal! Surutnya air laut setelah gempa kuat adalah penanda pasti bahwa dinding tsunami raksasa sedang meluncur ke pantai.' },
      { text: 'Lakukan evakuasi mandiri seketika: lari secepat mungkin ke arah daratan tinggi atau perbukitan minimal elevasi 20 meter.', correct: true, explanation: 'Benar! Jangan menunggu sirine berbunyi. Terapkan prinsip 20-20-20: jika gempa terasa 20 detik, Anda punya sekitar 20 menit untuk lari ke tempat dengan ketinggian 20 meter.' },
      { text: 'Masuk ke dalam mobil dan parkir di dekat dermaga sambil menunggu informasi berita di TV.', correct: false, explanation: 'Salah! Menunggu di tepi pantai akan membuat Anda terjebak saat gelombang pertama menerjang.' }
    ]
  },
  {
    id: 3,
    skenario: 'Gunung api di dekat daerah Anda dinaikkan statusnya oleh PVMBG menjadi Level IV (AWAS). Apa langkah pertama yang paling benar?',
    opsi: [
      { text: 'Segera tinggalkan kawasan rawan bencana (KRB) menuju posko pengungsian yang telah ditentukan pemerintah.', correct: true, explanation: 'Benar! Level IV (AWAS) berarti letusan utama sedang berlangsung atau segera terjadi dalam hitungan jam. Segera evakuasi diri dan keluarga.' },
      { text: 'Tetap berada di dalam rumah dan menutup pintu rapat-rapat sambil menimbun kayu bakar.', correct: false, explanation: 'Salah! Awan panas dan material lontaran batu pijar dapat menembus atap rumah biasa dalam sekejap.' },
      { text: 'Mendaki ke pos pengamatan kawah puncak untuk mengambil foto dokumentasi letusan.', correct: false, explanation: 'Sangat berbahaya dan terlarang! Radius bahaya kawah tertutup mutlak untuk keselamatan jiwa.' }
    ]
  }
];
