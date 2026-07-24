// Fungsi untuk mengambil salam dari API
async function ambilSalam() {
    const hasilDiv = document.getElementById('hasil-salam');
    hasilDiv.innerHTML = '⏳ Memuat...';

    try {
        const response = await fetch('/api/salam');
        const data = await response.json();
        hasilDiv.innerHTML = `${data.pesan}<br>🕐 ${data.waktu}`;
    } catch (error) {
        hasilDiv.innerHTML = '❌ Gagal memuat. Coba lagi ya!';
    }
}

// Fungsi untuk form kontak
function kirimPesan(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;

    const resultDiv = document.getElementById('form-result');
    resultDiv.innerHTML = `✅ Terima kasih ${nama}! Pesan kamu sudah diterima. 😊`;

    // Reset form
    event.target.reset();

    // Hilangkan pesan setelah 5 detik
    setTimeout(() => {
        resultDiv.innerHTML = '';
    }, 5000);
}

// Animasi skill bar saat scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-progress');
            bars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
        }
    });
}, { threshold: 0.5 });

// Observe skill section
const skillSection = document.querySelector('.keahlian');
if (skillSection) {
    observer.observe(skillSection);
}

console.log('🚀 Website berhasil dimuat!');