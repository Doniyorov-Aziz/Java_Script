// let x = "1.2ss"

// console.log(Number(x));
// console.log(Number(parseInt(x)));
// console.log(Number(parseFloat(x)));

// 
// console.log(!true);

// console.log(!1);

// let a=1
// a= a++
// console.log(a);
// console.log(a);
// console.log(a);

//

//  If & Else...

// 

// let lamp = true
// if (0){
//     console.log("chiroq onn");
// } else{
//     console.log("chiroq off");
// }   !chiroqni yonib o'chishiga misol agar true bo'lsa chiroq yonadi folse bolsa chiroq o'chadi. 

// 

// let lamp = 5
//     // if (lamp){
//     //     console.log("chiroq onn");
//     // } else{
//     //     console.log("chiroq off");
//     // }

//     lamp ? console.log("chiroq onn") : console.log("chiroq off")

// 

// 0>weather
// 0<weather
// 10>weather
// 10<weather

// let weather = 15
// if (0 > weather){
//     console.log("Havo juda sovuq");
// } else if (0 < weather){
//     console.log("Havo issiq");
// } else if (10 > weather){
//     console.log("Havo iliq");
// } else if (10 < weather){
//     console.log("Havo juda issiq");
// }

// 

// let weather = 22
// if (0 > weather){
//     console.log("Havo juda sovuq");
// } else if (0 < weather && 10 >= weather){
//     console.log("Havo issiq");
// } else if (10 < weather && 20 >= weather){
//     console.log("Havo juda issiq");
// } else {
// console.log("Ko'chaga chiqmang qorayib ketasiz");
// }

// 
// 
// let a = 2
// let b = 1
// if (a + b < 4){
//     console.log(let = "to'g'ri");
// }else{
//     console.log(let = "Xato");
// }

//  

// let a = 5
// let b = 2
// let c;

// console.log(`${a || b && c}`);

// console.log(a || b && c);   


// let a = 32;
// let b = 43


// 

// 0>weather
// 0<weather
// 10>weather
// 10<weather

// turniry opireytir

// let weather = 60
// weather >= 0 && weather <= 10
//     ? console.log("Havo issiq")
//     : weather > 10 && weather <= 20
//         ? console.log("havo juda issiq")
//         : console.log("kochaga chiqmang qorayib ketasz");


// Nullish

// console.log( 3 && 0); 
// console.log( 1 || 0); 
// console.log( false ?? null); 


// console.log(false || true);
// console.log(false && true);
// console.log(false ?? true);


// let login =  'Webbrain'
// let ps = 0;

// if ( login ?? ps ){
//     console.log("Welcome to Facebook");
// }else{
//     console.log("parol yoki pw hato");
// }

// 

// let login = "webbrain"
// let pw = undefined

// console.log( 1 ?? pw ?? login);
// console.log( 1 && pw && login);
// console.log( 1 || pw || login);
// console.log( 1 || (pw && login));
// console.log( (1 && pw) || login);

// 

// let login = "webbrain"
// let pw = 0

// console.log( 1 ?? pw ?? login);
// console.log( 1 && pw && login);
// console.log( 1 || pw || login);
// console.log( 1 || (pw && login));
// console.log( (1 && pw) || login);


// 1

// let a = -21
// if (a > 0) {
//    console.log(++a);  // beriluvchi son musbat bolsan 1 qowsin manfiy bolsa ozi chiqsin
// }else{
//     console.log(a)
// }


// 2 

// let a = -9
// if (a > 0) {
//     console.log(++a);           // musbat bolsa 1 qoshsin manfiy bolsa 2 ga  kamaytirsin
// } else {
//     console.log(a += 2);
// }

// 3

// let a = -4
// if (a > 0) {
//     console.log(++a);
// } else if (a < 0) {         // musbat bolsa 1 qoshsin manfiy bolsa 2 ga kamaytirsin 0 ga teng bolsa 10 chiqarsn
//     console.log(a += 2);
// } else {
//     console.log(10);
// }


// 4

// let a = 7822, b = 8372, c = 456
// if (a >= 0 && b >= 0 && c >= 0) {
//     console.log("3ta musbat son");
// } else if (a >= 0 && b < 0 && c < 0) {
//     console.log("1ta musbat  2ta manfiy");
// } else if (a < 0 && b < 0 && c >= 0) {
//     console.log("2ta manfiy 1 ta musbat");
// } else if (a < 0 && b >= 0 && c < 0) {
//     console.log("2ta manfiy 1 ta musbat");
// } else if (a < 0 && b < 0 && c < 0) {          // 3ta butun son berilgan shulardan nechtsi manfiy nechatasi musbatligini chiqarish
//     console.log("3 ta manfiy");
// } else if (a >= 0 && b >= 0 && c < 0){
//     console.log("2 ta musbat 1 ta manfiy");
// }else if(a<0 && b>=0 && c>=0){
//     console.log("2ta musbat 1 ta manfiy");
// }else if(a>=0 && b<0 && c>=0){
//     console.log("2ta musbat 1 ta manfiy");
// }else {
//     console.log("son xato kiritilgan");
// }

// 5

// let a=176722, b=1973912
// if(a>b){
//     console.log("birinchi son katta ");    // 2ta son berilgan shulardan kattasini korsatsin
// }else{
//     console.log("ikkinchi son katta");
// }

// 6
// let a = 403, b = 412
// if (a > b) {
//     console.log("ikkinchisi kichik"); // 2 ta sondan kichigini tartib raqamini chiqarish
// } else {
//     console.log("birinchisi kichik");
// }

// 7

// let a=5243, b=3132
// if(a>b){
//     console.log(a);
//     console.log(b);  // 2 ta butun sondan oldin katasini chiqarsin kn kichigini
// }else{
//     console.log(b);
//     console.log(a);
// }

// 8

// let a = 234, b = 872
// if (a > b || b > a) {
//     console.log(a + b);   // agar a va b teng bolsa a+b teng bolmasa consolda 0 ciqsin
// } else if (a == b) {
//     console.log(0);
// } 


// 9

// let a = 16, b = 72
// if ((a = a + b) && (b= a - b) && (a= a - b)) {   // a va b ni shunday ozgartirish kerakki a katta b kichik chiqsin
//     console.log(a,b);
// }

// 10


// let a=65, b=65
// if(a>b){
//     console.log(a);
// }else if (a<b){          // agar a va b teng bolmasa kattasini raqami chiqsin teng bolsa 0 chiqsin
//     console.log(b);
// }else if (a==b){
//     console.log(0);
// }


// 11


// let a=823456,b=612,c=5456
// if(a>b,b>c){
//     console.log(c);
// }else if(a>c,c>b){       // 3ta son berilgan shulardan kichigini chiqarish
//     console.log(b);
// }else if(b>c,b>a){
//     console.log(a);
// }



// 12


// let a = 9, b = 6, c = 4
// if (a > b && c < b && a > c) {
//     console.log(b);
// } else if (a < b && c < b && a > c) {   // 3ta son berilgan shulardan katta va kichik sonni orasidagi sonnni chiqaring
//     console.log(a);
// } else {
//     console.log(c);
// }


