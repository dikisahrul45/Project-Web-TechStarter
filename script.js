console.log("JavaScript Pertemuan 7 (DOM) aktif");

// State & Konstanta
const maxSeats = 40;
let registered = 27;

// Selectors DOM
const seatForm = document.querySelector("#seatForm");
const seatRequestInput = document.querySelector("#seatRequest");
const seatMessage = document.querySelector("#seatMessage");

// Helper function untuk mengubah pesan status dan classList
function setStatus(message, type) {
    if (seatMessage) {
        seatMessage.textContent = message;
        seatMessage.classList.remove("neutral", "success", "error");
        seatMessage.classList.add(type);
    }
}

// Event Submit Form
if (seatForm) {
    seatForm.addEventListener("submit", function (event) {
        // Hentikan reload halaman bawaan form
        event.preventDefault();

        const rawValue = seatRequestInput.value;
        const requested = Number(rawValue);
        const remaining = maxSeats - registered;

        // Validasi angka
        if (!Number.isInteger(requested) || requested <= 0) {
            setStatus("Masukkan jumlah kursi berupa bilangan bulat lebih dari 0.", "error");
            return;
        }

        // Keputusan sisa kursi
        if (requested <= remaining) {
            setStatus(`Tersedia. Masih ada ${remaining} kursi.`, "success");
        } else {
            setStatus(`Tidak cukup. Sisa kursi hanya ${remaining}.`, "error");
        }
    });
}

// Event Input untuk mengembalikan status ke netral saat ngetik ulang
if (seatRequestInput) {
    seatRequestInput.addEventListener("input", function () {
        setStatus("Nilai berubah. Tekan Cek Kursi untuk memeriksa.", "neutral");
    });
}