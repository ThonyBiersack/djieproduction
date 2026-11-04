---
target: Kecocokan workflow untuk website company profile Djie Production
total_score: 15
max_score: 28
na_heuristics: 5,7,9
p0_count: 0
p1_count: 2
target_identity: "file:D:\\project\\djieproduction\\src\\components\\PortfolioPage.astro"
target_fingerprint: "sha256:2da3cd2e51770e5efe7fb16b983cb2e4968e03bd0eb5128135b15ce8ef15404f"
target_path: "D:\\project\\djieproduction\\src\\components\\PortfolioPage.astro"
timestamp: 2026-11-03T04-33-31Z
slug: src-components-portfoliopage-astro
---
# Review workflow company profile Djie Production

## Verdict
Mode halaman: Persuade. Lima tahap Brief → Discovery → Blueprint → Build → Live cocok sebagai kerangka delivery studio software kecil: alurnya mudah dipindai dan memberi kesan mampu mengerjakan produk dari awal sampai deploy. Namun, implementasinya saat ini lebih menerangkan aktivitas teknis studio daripada pengalaman klien. Jadi: cocok sebagai fondasi, belum cukup jelas sebagai janji proses kerja untuk calon klien.

Design specificity: cukup khas melalui karakter animasi dan detail engineering, tetapi sebagian besar itu menonjolkan developer craft, bukan keputusan, keterlibatan, dan kepastian yang dicari calon klien.

## Heuristik Nielsen
| # | Heuristik | Skor | Catatan |
|---|---|---:|---|
| 1 | Visibility of system status | 3/4 | Tahap aktif terlihat, tetapi animasi yang terus berulang memberi kesan proses tanpa akhir. |
| 2 | Match between system and real world | 2/4 | Brief dan Live mudah dipahami; istilah API/schema dan “Continuous River Flow” lebih dekat ke bahasa developer. |
| 3 | User control and freedom | 3/4 | Tahap bisa dipilih dan animasi bisa dihentikan. |
| 4 | Consistency and standards | 1/4 | Halaman Indonesia menampilkan label dan detail workflow bahasa Inggris; copy terjemahan menyebut empat tahap sementara visual menampilkan lima. |
| 5 | Error prevention | n/a | Bagian informasional, bukan tugas yang berisiko menghasilkan kesalahan. |
| 6 | Recognition rather than recall | 3/4 | Lima tahap selalu diberi label; rincian tiap tahap perlu dipilih satu per satu. |
| 7 | Flexibility and efficiency | n/a | Tidak ada tugas berulang pada bagian Persuade ini. |
| 8 | Aesthetic and minimalist design | 2/4 | Visual berkarakter, tetapi animasi besar bersaing dengan penjelasan dan aksi kontak. |
| 9 | Help users recognize/recover from errors | n/a | Tidak ada interaksi yang menghasilkan error di workflow ini. |
| 10 | Help and documentation | 1/4 | Belum menjelaskan durasi, ritme update, jumlah revisi, approval klien, atau apa yang termasuk handover. |
| **Total** | | **15/28 (54%)** | **Acceptable; perbaikan paling berdampak adalah konsistensi bahasa dan kejelasan ekspektasi klien.** |

## Beban kognitif dan perjalanan emosional
Beban kognitif sedang ke tinggi untuk calon klien nonteknis: lima tahap masih wajar, tetapi istilah teknis, canvas, karakter, dan animasi menambah perhatian. Di mobile, area workflow sekitar 840px tingginya menjadi jeda panjang. Emosinya bergerak dari rasa ingin tahu ke bukti kompetensi lalu perayaan saat Live; tetapi copy Inggris/teknis bisa membuat pemilik bisnis Indonesia merasa prosesnya bukan untuk mereka.

## Yang bekerja
- Lima tahap membentuk delivery arc yang masuk akal dari diskusi awal sampai deploy.
- Konsultasi/estimasi sebelum development mengurangi ketidakpastian pembeli.
- Karakter animasi dan pilihan tahap membuat studio owner-led terasa lebih approachable dan berbeda.

## Prioritas
1. **[P1] Samakan bahasa dan jumlah tahap.** Terjemahkan judul, subtitle, detail, dan kontrol animasi ke Indonesia; samakan copy terjemahan empat fase dengan lima tahap yang benar-benar tampil. Dampaknya langsung ke kredibilitas dan keterpahaman pengunjung Indonesia. Saran: `/impeccable clarify`.
2. **[P1] Jadikan ini alur kerja klien, bukan hanya alur engineering.** Untuk setiap tahap, sebutkan kontribusi/approval klien, hasil yang diterima, dan kapan update/revisi terjadi. Jelaskan pula durasi kisaran dan serah terima jika informasi itu memang sudah pasti. Saran: `/impeccable clarify`.
3. **[P2] Kurangi beban motion dan panjang di mobile.** Pertahankan karakter sebagai aksen, tetapi ringkas tinggi canvas/animasi; hormati `prefers-reduced-motion` selain tombol pause. Saran: `/impeccable adapt` dan `/impeccable animate`.
4. **[P2] Tunjukkan iterasi dan pasca-launch.** Jelaskan bahwa review dapat mengembalikan proyek ke tahap build, dan terangkan apakah “Live” mencakup handover saja atau juga maintenance. Saran: `/impeccable clarify`.

## Persona red flags
- **Pemilik bisnis kecil Indonesia nonteknis:** detail Inggris dan istilah API/schema bisa membuat proses terasa teknis dan kurang ramah.
- **Pembeli software pertama kali:** tidak tahu kapan perlu memberi feedback, berapa lama tiap fase, atau apa yang akan diterima sebelum/selesai coding.
- **Technical buyer:** melihat stack dan deploy, tetapi belum menemukan definisi acceptance/testing, ownership, serta support setelah launch.

## Observasi kecil
Label aksesibel tombol pause tampaknya tetap “Pause animation” setelah kontrol berubah menjadi Resume. Peringatan detector: dua pola `gradient-text` di `PortfolioPage.astro` (baris 90 dan 667); ini temuan gaya otomatis, bukan bukti masalah fungsi.

## Pertanyaan
- Apa yang perlu disetujui klien sebelum coding dimulai?
- Apakah Live berarti handover selesai, atau awal maintenance dan iterasi?
- Apakah prosesnya masih jelas jika animasinya tidak bergerak?
