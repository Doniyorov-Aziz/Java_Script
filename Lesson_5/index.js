
// let i=7
// while(i){               // ixtiyoriy sondan orqaga qarab sanash
//     console.log(i);
//     i--;
// }


// let i=3
// do {
//     console.log(i);
//     i--
// } while (i == 0)

// function

// function getAvr(){
//     console.log("Webbrain");
//     console.log("Webbrain");
//     console.log("Webbrain");              // func decloration
//     console.log("Webbrain");
// }
// getAvr()

// const getAvr = function(){
//     console.log("welcome to webbrain");    // func epxression
// }
// getAvr();



// // Parametr

// const getAvr=function(name){
//     console.log(`${name} welcome to webbrain`);
// }
// getAvr("Azizbek");
// getAvr("Dilmurod");
// getAvr("Ilhom");
// getAvr("Sardor");
// getAvr("Abdulahad");

// const getAvr = function (name, surname, age) {
//     console.log(`Name : ${name}`);
//     console.log(`Surname : ${surname}`);
//     console.log(`Age : ${age}`);
// }
// getAvr("Azizbek", "Doniyorov", 21);
// getAvr("Dilmurod", "Nazarov", 15);
// getAvr("Ilhom", "Soatov", 26);
// getAvr("Diyor", "Murodov", 24);


// inner va outer variable , shadow variable 

// let name = "Webbrain";
// const test = () => {
//   let  name = "academy"
//     console.log(name);
// };
// test();
// console.log(name);


// const telegram=(name,surname)=>{
// surname ? console.log(name,surname):console.log(name);  // 1-usul(turniryda)
// }
// telegram("Webbrain","Academy")

// const telegram = (name, surname) => {
//     console.log(name, surname || "");                   // 2-usul( || (orda) )     

// }
// telegram("Webbrain", "Academy")


// const telegram = (name, surname = "") => {
//     console.log(name,surname);                          // 3-usul (tenglab qo'yish)
// }
// telegram("Aziz","Doniyorov");


// const telegram = (name,surname) => {
//     if (surname) console.log(name, surname);
//     else console.log(name);                            // 4-usul (if korinishda)
// }
// telegram("Aziz","Doniyorov")