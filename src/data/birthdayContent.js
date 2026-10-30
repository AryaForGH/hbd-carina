// Ubah isi berkas ini untuk mempersonalisasi website. Foto tidak wajib:
// foto yang belum tersedia akan digantikan dengan placeholder yang rapi.
export const birthdayContent = {
  recipientName: 'Sayang',
  senderName: 'Orang Favoritmu',
  pin: '051105',
  entry: {
    loading: 'Menyiapkan sesuatu yang istimewa untukmu...',
    title: 'Sebelum kita mulai...',
    subtitle: 'Ada sesuatu yang istimewa menunggumu.',
    prompt: 'Bisakah kamu menebak kode rahasianya, Sayang?',
    success: 'Yeay! Kamu berhasil menemukannya, Sayang!',
    error: 'Ups! Bukan kode ajaibnya. Coba lagi, ya ♡',
  },
  birthday: {
    title: 'Selamat Ulang Tahun, Sayang ♡',
    subtitle: 'Hari ini sepenuhnya tentang kamu.',
    intro:
      'Hari ini terasa lebih istimewa karena dunia pernah menghadirkan seseorang sebaik dirimu. Dan entah bagaimana, aku begitu beruntung bisa menjadi bagian dari ceritamu.',
  },
  flowers: [
    { id: 'rose', name: 'Mawar', message: 'Bersamamu, hari-hari paling biasa pun terasa romantis.' },
    { id: 'sunflower', name: 'Bunga Matahari', message: 'Kamu membawa cahaya ke hidupku, bahkan di hari-hari tergelapku.' },
    { id: 'tulip', name: 'Tulip', message: 'Bersamamu, hal-hal kecil dalam hidup selalu terasa menyenangkan.' },
    { id: 'daisy', name: 'Aster', message: 'Senyummu selalu punya cara untuk membuat segalanya terasa lebih ringan.' },
    { id: 'lavender', name: 'Lavender', message: 'Bersamamu, bahkan keheningan terasa menenangkan.' },
    { id: 'lily', name: 'Lili', message: 'Semoga aku bisa terus mencintaimu di setiap musim kehidupan kita.' },
  ],
  letter: {
    title: 'Sepucuk Surat dari Hatiku',
    paragraphs: [
      'Selamat ulang tahun, sayangggg. ♡',
      'Untuk Carina Fitria Elvira, di tanggal 05 November 2026.',
      'Mungkin ucapan ulang tahun itu biasa aja bagi banyak orang. Tapi buat aku, ini kesempatan buat bilang hal yang jarang aku bilang.',
      'Aku suka cara kamu jalanin hidup. Sederhana, tapi penuh arti. Kamu gak perlu jadi orang lain buat bikin aku kagum.',
      'Di hari ini, aku doain kamu dikelilingi hal-hal baik. Orang-orang baik, kesempatan baik, dan perasaan yang baik-baik juga.',
      'Kalau suatu hari kamu capek, ingat ada aku yang selalu bangga sama kamu.',
      'Selamat ulang tahun, sayangg.',
      'Aku mencintaimu, lebih dari yang bisa dijelaskan oleh kata-kata kecil ini. ♡',
    ],
    signoff: 'Dengan seluruh cintaku,',
    signature: 'Orang favoritmu ♡',
  },
  gallery: Array.from({ length: 14 }, (_, index) => {
    const number = String(index + 1).padStart(2, '0')
    return {
      src: `/assets/photos/gallery/photo-${number}.jpeg`,
      caption: [
         'Cantikmu selalu punya cara untuk membuatku jatuh cinta lagi.',
  'Seindah apa pun dunia, mataku selalu ingin kembali melihatmu.',
  'Senyummu adalah salah satu hal terindah yang pernah kutemukan.',
  'Kalau kecantikan bisa diabadikan, aku ingin menyimpanmu di setiap halaman hidupku.',
  'Ada sesuatu tentang dirimu yang selalu berhasil membuatku terpukau.',
  'Kamu terlihat seperti puisi yang ditulis dengan penuh cinta.',
  'Bahkan tanpa berusaha, kamu selalu berhasil terlihat begitu istimewa.',
  'Matamu menyimpan keindahan yang tak pernah bosan untuk kupandang.',
  'Andai kamu bisa melihat dirimu dari mataku, kamu akan mengerti mengapa aku begitu mengagumimu.',
  'Kamu adalah definisi cantik yang tak pernah cukup dijelaskan dengan kata-kata.',
  'Di antara begitu banyak hal indah di dunia, kamu tetap menjadi favoritku.',
  'Ada kecantikan yang terlihat oleh mata, dan ada keindahanmu yang terasa sampai ke hati.',
  'Aku bisa melihat fotomu berkali-kali dan tetap menemukan alasan untuk tersenyum.',
  'Kalau waktu bisa berhenti, mungkin aku ingin berhenti sedikit lebih lama saat memandangmu.',
  'Dari semua hal indah yang pernah kutemukan, aku paling bersyukur karena bisa menemukan kamu. ♡',
      ][index],
    }
  }),
  music: {
    title: 'Shape of My Heart',
    artist: 'Sting',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/NlwIDxCjL-8',
    dedication: 'Kalau boleh memilih lagu untuk kita, lagu ini salah satunya. ♡',
  },
  reasons: [
    'Aku mencintai kamu karena kamu adalah diri kamu sendiri, tanpa perlu berpura-pura menjadi orang lain.',
    'Aku mencintai cara kamu tersenyum, karena senyum kamu selalu punya cara sendiri untuk membuat hari aku lebih baik.',
    'Aku mencintai bagaimana hal-hal sederhana terasa spesial ketika aku melakukannya bersama kamu.',
    'Aku mencintai kamu bukan hanya saat kamu bahagia, tetapi juga saat kamu sedang lelah, sedih, atau merasa dunia tidak berpihak kepada kamu.',
    'Aku mencintai kamu karena dari sekian banyak orang di dunia ini, kamu adalah seseorang yang ingin terus aku pilih, hari ini dan di hari-hari berikutnya.',
  ],
  promises: [
    'Aku berjanji akan selalu mendengarkan semua ceritamu.',
    'Aku berjanji akan merayakan setiap keberhasilan kecilmu.',
    'Aku berjanji akan mengingatkanmu betapa istimewanya dirimu.',
    'Aku berjanji akan terus belajar mencintaimu dengan lebih baik.',
    'Aku berjanji akan menciptakan lebih banyak kenangan indah bersamamu.',
  ],
  finalSurprise: {
    title: 'KEJUTAN BESAR!',
    greeting: 'Selamat Ulang Tahun Sayangggg! ♡',
    lines: [
      'Bertambah satu tahun usiamu, bertambah pula rasa syukurku karena kamu hadir di dunia.',
      'Semoga semua hal baik selalu menemukan jalan menuju kamu.',
      'Terima kasih sudah menjadi bagian terindah dalam cerita aku.',
      'Semoga hatimu selalu menemukan kebahagiaan, semua impianmu tercapai, dan hari-harimu dipenuhi cinta yang pantas kamu dapatkan.',
    ],
    closing: 'Aku mencintaimu, hari ini, esok, dan di setiap momen kecil di antaranya. ♡',
  },
}
