const siswa ={
    nama: "Budi",
    kelas: "11 pplg",
    nilai: 95
};
const namaSiswa = siswa.nama;
const {nama, kelas, nilai} = siswa;

console.log(`siswa bernama ${nama} dari ${kelas} mendapat nilai ${nilai}`);