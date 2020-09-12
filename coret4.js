var x = new Date() // tanggl 
var tanggal= x.getDate()
var bulan=x.getMonth()
var tahun=x.getFullYear()
var jam=x.getHours()
var menit=x.getMinutes()
var detik=x.getSeconds()
console.log(tanggal, bulan, tahun, jam, menit, detik)

if(tanggal==1){
    console.log('hari ini rabu,' +tanggal)
}
else if(tanggal==2){
    console.log('hari ini Kamis,' +tanggal)
}
else if(tanggal==25){
    console.log('hari ini Sabtu,' +tanggal)
}