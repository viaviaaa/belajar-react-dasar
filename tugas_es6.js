const nilai = [
    { nama: "Bunga", nilai: 95 },
    { nama: "Yaya",  nilai: 98 },
    { nama: "Kiara", nilai: 100 }
];

const hasilNilai = nilai.map(item => {
    return {
        nama: item.nama,
        nilai: item.nilai,
        status: item.nilai >= 75 ? "Lulus" : "Remedial"
    };
});

console.log(hasilNilai);
