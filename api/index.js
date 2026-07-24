const express = require('express');
const path = require('path');
const app = express();

// Serve file statis dari folder "public"
app.use(express.static(path.join(__dirname, '..', 'public')));

// Route halaman utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Route API contoh
app.get('/api/salam', (req, res) => {
  const jam = new Date().getHours();
  let salam;

  if (jam < 12) {
    salam = 'Selamat Pagi! ☀️';
  } else if (jam < 15) {
    salam = 'Selamat Siang! 🌤️';
  } else if (jam < 18) {
    salam = 'Selamat Sore! 🌅';
  } else {
    salam = 'Selamat Malam! 🌙';
  }

  res.json({
    pesan: salam,
    waktu: new Date().toLocaleString('id-ID')
  });
});

// Jalankan server (untuk development)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;