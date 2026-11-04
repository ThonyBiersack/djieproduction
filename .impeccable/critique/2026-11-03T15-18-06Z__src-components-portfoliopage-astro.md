---
target: Kecocokan dan efektivitas homepage company profile Djie Production
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 4
target_identity: "file:D:\\project\\djieproduction\\src\\components\\PortfolioPage.astro"
target_fingerprint: "sha256:2da3cd2e51770e5efe7fb16b983cb2e4968e03bd0eb5128135b15ce8ef15404f"
target_path: "D:\\project\\djieproduction\\src\\components\\PortfolioPage.astro"
timestamp: 2026-11-03T15-18-06Z
slug: src-components-portfoliopage-astro
---
# Review homepage company profile Djie Production

**Target:** `src/components/PortfolioPage.astro` dan homepage `http://localhost:4321/`  
**Mode:** Persuade  
**Metode:** dua penilaian terisolasi (UX/desain dan detector/bukti browser); screenshot desktop sekitar 980×450 dan mobile 390×844.

## Verdict

Homepage terlihat matang dan kredibel secara teknis, tetapi saat ini lebih kuat menjual kedalaman engineering daripada hasil bisnis dan kepastian proses. Fondasinya bagus—identitas founder, proyek, dan CTA kontak terlihat—namun kepercayaan calon klien bisa turun ketika preview yang tampak seperti produk nyata sebenarnya mock UI, CTA juga mengarah ke CV, dan pesan menyatakan terbuka untuk kerja full-time sekaligus menawarkan proyek.

**Design specificity:** identitas visual gelap, biru, terminal, dan ilustrasi alur cukup khas untuk studio software owner-led. Namun pola terminal/stack dan mock preview lebih banyak menonjolkan cara membangun daripada manfaat dan bukti hasil yang dicari pembeli. Pertahankan karakter tersebut, tetapi beri lebih banyak ruang untuk hasil proyek yang dapat diverifikasi.

## Skor heuristik Nielsen

| # | Heuristik | Skor | Bukti utama |
|---|---|---:|---|
| 1 | Visibility of system status | 3/4 | Status proyek dan tahap workflow terlihat; anchor scroll desktop membuat navbar menutupi sebagian heading. |
| 2 | Match between system and real world | 2/4 | Layanan dijelaskan dalam bahasa Indonesia, tetapi banyak istilah stack/API dan label workflow Inggris untuk audiens UMKM. |
| 3 | User control and freedom | 3/4 | Navigasi anchor, pilihan bahasa, dan kontrol pause tersedia; jalur utama konsultasi berpindah ke WhatsApp. |
| 4 | Consistency and standards | 2/4 | Identitas visual cukup konsisten, tetapi workflow Indonesia menyisakan label, rincian, dan kontrol berbahasa Inggris. |
| 5 | Error prevention | 3/4 | Tidak banyak aksi berisiko; aksi salin email berpotensi gagal tanpa alternatif yang terlihat. |
| 6 | Recognition rather than recall | 2/4 | Navigasi dan kontak mudah ditemukan, tetapi detail teknis padat menyulitkan perbandingan proyek. |
| 7 | Flexibility and efficiency | n/a | Landing page persuasif tidak memiliki tugas berulang atau kebutuhan alur efisiensi. |
| 8 | Aesthetic and minimalist design | 2/4 | Sistem visual kuat, tetapi halaman panjang, klaim/fitur padat, dan animasi berebut perhatian. |
| 9 | Error recovery | 2/4 | Kegagalan salin email hanya dicatat ke console, tanpa feedback/fallback yang tampak bagi pengguna. |
| 10 | Help and documentation | n/a | Bukan produk tugas yang biasanya memerlukan dokumentasi; informasi scope dan engagement dinilai di bawah sebagai kejelasan penawaran. |
| **Total** | | **19/32 (59%) — Acceptable** | Perlu perbaikan signifikan sebelum pesan penjualan terasa meyakinkan. |

## Beban kognitif dan perjalanan emosional

Tiga CTA hero masih dapat dipahami, tetapi “lihat studi kasus”, konsultasi proyek, dan download CV melayani niat berbeda. Setelah itu, tumpukan spesifikasi teknis menambah beban terutama bagi pemilik usaha nonteknis. Di mobile 390×844, judul hero membungkus beberapa baris dan CTA tersusun vertikal; tidak terlihat clipping horizontal pada tangkapan yang diperiksa. Bagian workflow panjang dan animasinya terus berjalan, sementara kontrolnya berbahasa Inggris. Saat menavigasi ke anchor workflow/kontak pada desktop, navbar fixed menutupi sebagian heading.

Perjalanan emosi: percaya diri dari presentasi dan founder langsung → beban teknis saat detail bertambah → ragu ketika preview mockup terasa seperti bukti produk dan ada demo yang belum tersedia → sedikit lega karena kontak langsung mudah ditemukan, tetapi harga/ruang lingkup/waktu belum memberi pegangan.

## Yang bekerja

- Founder dan jalur WhatsApp/email langsung memberi kesan komunikasi tanpa perantara.
- Homepage Indonesia sebagai default, dengan pilihan bahasa Inggris, cocok untuk target lokal sekaligus pembaca internasional.
- Demo/repository dan detail proyek memberi technical buyer kesempatan memeriksa sebagian pekerjaan.

## Prioritas perbaikan

1. **[P1] Buat bukti proyek transparan dan mudah diverifikasi.** Preview kartu proyek dibuat sebagai mock UI, sementara presentasi menyebut sistem produksi; hanya sebagian proyek memiliki demo aktif dan ada demo yang berstatus coming soon. Gunakan tangkapan produk nyata atau beri label jelas “ilustrasi”, tampilkan demo yang berfungsi, serta cantumkan hasil terukur hanya jika benar-benar dapat dibuktikan. Jika belum ada metrik klien, jangan mengarangnya.
2. **[P1] Tegaskan tujuan utama homepage: mencari klien atau mencari posisi full-time.** Status hero menyatakan terbuka untuk posisi full-time/remote sekaligus menerima project pilihan; CV juga menjadi CTA hero. Ini dapat membuat klien dan perekrut sama-sama ragu soal prioritas/ketersediaan. Pilih pesan utama atau pisahkan jalur “Untuk calon klien” dan “Profil/CV”.
3. **[P1] Kurangi ketidakpastian sebelum calon klien menghubungi.** Estimasi disebut transparan dan disesuaikan proyek, tetapi belum ada patokan budget, kisaran waktu, contoh scope, cara review, atau apa yang termasuk handover. Tambahkan contoh atau rentang hanya jika sesuai praktik nyata; jangan menjanjikan SLA, timeline, atau dukungan yang belum pasti.
4. **[P1] Ubah jargon dan workflow menjadi bahasa pelanggan; konsistenkan lokalisasi.** Detail seperti JWT, Zod, schema/API, serta label “Continuous River Flow”, “Scope and journeys”, dan tombol “Pause animation” menonjol untuk developer, bukan pemilik usaha. Dahulukan apa yang klien lakukan dan terima pada tiap tahap, lalu tempatkan stack sebagai detail sekunder.
5. **[P2] Perbaiki posisi heading saat anchor dinavigasi.** Bukti browser menunjukkan navbar fixed menutupi bagian atas judul workflow/kontak di desktop. Tambahkan offset scroll yang sesuai tinggi navbar dan verifikasi kembali pada desktop serta mobile.

## Persona yang berisiko tidak terlayani

- **Pemilik UMKM:** tidak mendapat pegangan harga/waktu dan harus menafsirkan istilah teknis.
- **Pembeli yang berhati-hati:** sulit membedakan preview ilustratif dari tangkapan produk nyata dan mengonfirmasi status demo.
- **Calon klien atau perekrut:** pesan ketersediaan full-time dan penerimaan proyek membuat komitmen utama kurang jelas.
- **Pengunjung mobile:** halaman panjang dan kontrol/label workflow berbahasa Inggris menambah gesekan.

## Observasi minor

- Detector menemukan dua penggunaan gradient text (baris 90 dan 667 pada file target), kategori warning gaya; ini bukan bug fungsional dan prioritasnya di bawah isu kepercayaan/konten.
- Kontrol salin email berpotensi memberi error hanya ke console saat clipboard gagal; pertimbangkan feedback dan cara salin manual.
- Floating WhatsApp sangat mudah ditemukan, tetapi pada viewport mobile dapat bersaing dengan konten di kanan bawah.
- Pada screenshot yang diperiksa tidak tampak overflow horizontal yang jelas.

## Pertanyaan untuk menentukan arah

- Apakah homepage ini terutama ditujukan untuk mendapatkan klien, mencari pekerjaan full-time, atau keduanya?
- Bukti nyata apa yang sudah tersedia untuk tiap proyek—screenshot aplikasi, demo aktif, hasil yang bisa dipublikasikan, atau belum ada?
- Apakah kamu nyaman menampilkan contoh/rentang harga dan waktu pengerjaan yang realistis, atau lebih memilih menjelaskannya setelah konsultasi?
