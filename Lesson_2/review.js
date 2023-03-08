// Type Convirsion...-> bir data typedan bowqa bir data typega ozgartirish

/// NaN........-> raqam bo'lmagan malumot turi bilan raqam bo'lgan malumot ustida qandaydur arifmetik amal bajarilsa NaN chiqadi
//// misol: 
//// NaN
//// let a=1
//// let b=`1s`

//// console.log(a + +b);


// Stringni numberga ozgartirib berish usuli
/// let a=1
/// let b=`1`
/// console.log(a + +b) 1-usuli
/// console.log(a + Number(b)) 2-usuli


// ParseInt.....-> parseinteger bu sonni butun qismini oladi
/// let a=1
/// let b=`1.2` <--float number
/// console.log(a + ParseInt(b)) 1-usul
/// console.log(a + Number.parseInt(b)) 2-usul.


// Boolean
/// Boolean......-> Boolean bizga doim true yoki false qiymat qaytaradi bunda true(ha) false(yo'q)
/// Boolean .....-> Boolean pilus va minus qiymatlarda true oladi faqat 0 da false oladi

// console.log(true, false);

// console.log(Boolean(1));

// console.log(Boolean(-2));

// console.log(Boolean(0));


// console.log(Boolean(`Webbrain academy`));


/// = ...->tenglab qoyadi
/// == ..-> tengmi deb soredi
/// === .-> bir biriga tengmi va data type ci   data type va sonlar teng bo'lsa true chiqaradi aks holda esa folse 
/// += ..-> biror bir songa ikkinchi sonni qo'shish  ex: a=2 b=3 c=4  c += a  c=6
/// -= ..-> biror bir sondan ikkinchi sonni ayirish  ex: a=2 b=3 c=4  c -= a  c=2
/// ++ ..-> son nechchi bolishidan qatiy nazar qiymatni 1 ga oshiradi   a=1    a++;   a=2
/// -- ..-> son nechchi bolishidan qatiy nazar qiymatdan 1 ayriladi     a=5    a--;   a=4
/// ! ...-> teng emasmi deganin -- va inkor javobni chiqaradi   ex: a=2 b=3 console.log(a != b) True chiqadi consoleda 
/// || ..-> or (yoki) degan belgi 
/// && ..-> add (va)
/// \t ..-> tab tashlash
/// \n ..-> qator tashlash
/// \g ..-> global