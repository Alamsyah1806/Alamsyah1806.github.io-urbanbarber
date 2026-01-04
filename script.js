function updateWaktu(){
    const now = new Date();
    const hari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
    const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

    document.getElementById("tanggal").innerHTML =
        hari[now.getDay()] + ", " + now.getDate() + " " +
        bulan[now.getMonth()] + " " + now.getFullYear();

    document.getElementById("jam").innerHTML =
        now.toLocaleTimeString("id-ID") + " WIB";
}
setInterval(updateWaktu,1000);
updateWaktu();

function showImage(card){
    document.getElementById("modalImage").src =
        card.querySelector("img").src;
}

function sendWhatsApp(){
    const nama = document.getElementById("nama").value;
    const layanan = document.getElementById("layanan").value;
    window.open(`https://wa.me/6285691814958?text=Nama:${nama}%0ALayanan:${layanan}`,"_blank");
}