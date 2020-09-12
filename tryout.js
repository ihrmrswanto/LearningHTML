// let x= 10; y=2
// console.log(Math.sqrt(10, 2))


//hari ini tgl 17-10-20
//besok tanggal 18-10-20
//kemarin tanggal 16-10-20

// let x= new Date()
// let y=x.getDate()

// solve

// var totalumur=49
// var rasioadanb=0.4
// var budi 
let x= new Date('februari 1 2018')
 tanggal=x.getDate()
 bulan=x.getMonth()+1
 tahun=x.getFullYear()
 jam=x.getHours()
 detik=x.getSeconds()
 var hari
 var namaBulan

 if(tanggal==1) {
     hari='Rabu'
 }else if(tanggal==2) {
     hari='Kamis'
 }else if(tanggal==25){
     hari='sabtu'
 }else if(tanggal==26){
     hari='minggu'
 }

 if(bulan==7){
     namaBulan='juli'
 }else if(bulan==8){
     namaBulan='agustus'
     
    }else if(bulan==5){
        namaBulan='juni'
    }else if(bulan==2){
        namaBulan='februari'
    }
    
         namaBulan='september'
     
 console.log(`${hari}/${namaBulan}/${}`)


 
//  console.log(x)

//  console.log(`hari ini${tanggal-8}/${bulan}/${tahun}\nhari besok ${tanggal+1}/${bulan}/${tahun}\nhari kemarin${tanggal-1}/${bulan}/${tahun}`)
 

// var x=21

// if(x%2==0){
//     console.log('genap')
// }else{
//     console.log('ganjil')
