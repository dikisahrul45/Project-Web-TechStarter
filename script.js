// A. Tes Koneksi
console.log("JavaScript Pertemuan 6 aktif");

// C. Variable & State
const eventName = "TechStarter Day";
const maxSeats = 40;
let registered = 27;

// E. Function Logika Pengecekan Kursi
function checkSeats(requested) {
    const remaining = maxSeats - registered;
    
    // Validasi Input
    if (!Number.isInteger(requested) || requested <= 0) {
        return "Masukkan jumlah kursi berupa bilangan bulat lebih dari 0.";
    }
    
    // Logika Keputusan
    if (requested <= remaining) {
        return `Tersedia. Sisa saat ini ${remaining} kursi.`;
    } else {
        return `Tidak cukup. Hanya tersisa ${remaining} kursi.`;
    }
}

// F. Event Listener untuk Tombol
const checkSeatBtn = document.querySelector("#checkSeatBtn");

if (checkSeatBtn) {
    checkSeatBtn.addEventListener("click", function () {
        const input = prompt("Berapa kursi yang ingin dicek?");
        const requested = Number(input);
        const result = checkSeats(requested);
        
        console.log(result);
        alert(result);
    });
}