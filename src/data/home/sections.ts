export const heroContent = {
  h1: 'Kontraktor Jasa Bored Pile (Strauss) Harga per Meter',
  tagline: 'Pondasi yang Kuat Dimulai dari Keputusan yang Tepat',
  intro: [
    'PT. Jowo Land Construction merupakan partner konstruksi pondasi bored pile terpercaya yang telah membantu berbagai proyek sejak tahun 2012.',
    'Mulai dari rumah tinggal, ruko, gudang, hotel, rumah sakit, hingga proyek infrastruktur, kami memahami bahwa setiap bangunan memiliki kebutuhan pondasi yang berbeda karena setiap tanah memiliki karakteristik yang berbeda pula.',
    'Sama seperti seorang dokter yang tidak memberikan resep yang sama kepada semua pasien, pondasi yang baik juga tidak bisa dibuat dengan pendekatan yang sama pada setiap proyek.',
    'Itulah alasan mengapa setiap pekerjaan kami selalu diawali dengan analisa, bukan asumsi.',
  ],
  primaryCta: 'Konsultasi Gratis',
  secondaryCta: 'Lihat Portofolio',
};

export const borePileIntro = {
  title: 'Mengenal Apa itu Pondasi Bored Pile (Strauss Pile)?',
  paragraphs: [
    'Pondasi Bored Pile ialah pondasi beton berbentuk tabung silinder, pondasi ini semacam pondasi tiang pancang (paku bumi), namun pemasangannya dimulai dari pengeboran tanah, memasukkan tulangan besi yang telah dirakit, lalu pengecoran di tempat (in-situ).',
    'Merujuk dari wikipedia: pondasi bore pile diklasifikasikan sebagai pondasi dalam yang dirancang untuk mentransfer beban struktur menuju lapisan tanah yang memiliki daya dukung lebih baik.',
    'Secara fungsi, bored pile bekerja seperti "akar" pohon besar yang menembus lapisan tanah hingga mencapai kedalaman yang mampu menahan beban bangunan secara aman. Semakin besar bangunan, semakin penting kualitas akar yang menopangnya. Dalam dunia konstruksi, akar tersebut adalah pondasi.',
  ],
  functions: [
    'Menyalurkan beban bangunan ke lapisan tanah yang stabil',
    'Mengurangi risiko penurunan bangunan (settlement)',
    'Mengurangi risiko retak akibat pergerakan tanah',
  ],
  suitableFor: ['Tanah lunak', 'Tanah timbunan', 'Area padat penduduk'],
  closingNote:
    'Semakin besar nilai investasi bangunan Anda, semakin penting memastikan pondasinya direncanakan dengan benar sejak awal.',
};

export const workMethodsIntro = {
  title: 'Metode Pelaksanaan Pengerjaan Bore Pile',
  intro: [
    'Di PT. Jowo Land Construction, setiap pekerjaan pondasi dilaksanakan berdasarkan prosedur kerja yang terstandarisasi dan mengacu pada ketentuan Standar Nasional Indonesia (SNI) serta penerapan Keselamatan dan Kesehatan Kerja (K3).',
    'Kami percaya bahwa kualitas pondasi tidak hanya ditentukan pada saat pengecoran. Kualitas pondasi ditentukan jauh sebelum alat pertama mulai melakukan pengeboran.',
  ],
};

export const workMethodSteps = [
  {
    title: 'Mengenal Apa itu Pondasi Bored Pile',
    content: [
      'Pondasi Bored Pile ialah pondasi beton berbentuk tabung silinder, pondasi ini semacam pondasi tiang pancang (paku bumi), namun pemasangannya dimulai dari pengeboran tanah, memasukkan tulangan besi yang telah dirakit, lalu pengecoran di tempat (in-situ).',
    ],
    imageKey: 'intro' as const,
  },
  {
    title: 'Survey Lokasi',
    content: [
      'Survey dilakukan untuk memastikan akses alat, kondisi lingkungan sekitar, serta mengidentifikasi berbagai faktor yang dapat mempengaruhi pelaksanaan pekerjaan.',
      'Tujuannya sederhana: Menghilangkan kejutan yang dapat menyebabkan keterlambatan proyek.',
    ],
    imageKey: 'survey' as const,
  },
  {
    title: 'Pengeboran',
    content: [
      'Proses pengeboran dilakukan menggunakan metode dan jenis alat yang disesuaikan dengan kondisi lapangan serta karakteristik tanah.',
      'Karena setiap lapisan tanah membutuhkan pendekatan yang berbeda. Memaksakan metode yang salah hanya akan menimbulkan biaya tambahan yang sebenarnya bisa dihindari.',
    ],
    imageKey: 'drilling' as const,
  },
  {
    title: 'Fabrikasi Besi',
    content: [
      'Tulangan dirakit sesuai gambar kerja dengan memperhatikan diameter besi, panjang sambungan, serta jarak sengkang spiral agar mampu bekerja sebagai satu kesatuan struktur yang kuat.',
    ],
    imageKey: 'rebar' as const,
  },
  {
    title: 'Pengecoran',
    content: [
      'Beton mutu terencana dituangkan menggunakan sistem tremie pipe untuk menjaga homogenitas beton serta meminimalkan risiko segregasi.',
      'Dalam dunia pondasi, beton yang terlihat penuh belum tentu berarti beton yang berkualitas. Karena itu proses pengecoran harus dilakukan dengan metode yang tepat.',
    ],
    imageKey: 'pouring' as const,
  },
  {
    title: 'Finishing dan Quality Control',
    content: [
      'Kualitas pondasi tidak boleh didasarkan pada asumsi. Kualitas harus dibuktikan melalui pengujian.',
    ],
    tests: [
      {
        name: 'PDA Test (Pile Driving Analyzer)',
        desc: 'Mengukur kapasitas daya dukung dan integritas pondasi secara dinamis.',
      },
      {
        name: 'PIT (Pile Integrity Test)',
        desc: 'Mendeteksi kemungkinan cacat, retak, atau ketidaksempurnaan pada tiang pondasi.',
      },
      {
        name: 'Static Load Test',
        desc: 'Memverifikasi kapasitas daya dukung aktual melalui pembebanan langsung.',
      },
      {
        name: 'Uji Mutu Beton Laboratorium',
        desc: 'Pengujian kuat tekan beton menggunakan sampel silinder beton sesuai standar.',
      },
    ],
    closingNote:
      'Karena pondasi yang baik bukan yang terlihat kuat. Melainkan yang dapat dibuktikan kuat melalui data.',
    imageKey: 'qc' as const,
  },
];
