// 01.08.2021

var cuntry = "israel";
var firstName = "liel";
var numberOne = 1;
var numberTwo = 2;
var numberThree = 3;
var numberFore = 4;
var numberFive = 5;
var all = numberOne + numberTwo + numberThree + numberFore;
//  let cuntry = canada;
// let age  = 3;
var avg = all / 4;

console.log("im live in " + cuntry + " " + firstName);
console.log(numberOne, numberTwo, numberThree, numberFore, numberFive);

//תרגיל 4

console.log(all, avg);

// תרגיל  5
var langth = 2;
var area = 4;
console.log(langth * area);
// תרגיל 6

var num1 = 1;
var num2 = 2;
var temp;
temp = num2;
num2 = num1;
num1 = temp;
console.log(typeof firstName);

cump = 4 > 6;

console.log(typeof cump);
var age = 21;
var fullName = "liel itzchak";
var curlyHair = true;
var dad = "moshe";
var mom = "orly";
var sister = "shilat";
var numberOne = 1;
var numberTow = 2;
var numberTree = 3;
var numberFore = 4;
var numberFive = 5;
var numberSix = numberOne * numberTow;
var numberSeven = numberTree / numberFore;
var total = numberOne + numberTow;

if (numberOne < 10) {
  console.log("smaller then 10");
}
console.log(fullName);
console.log(age);
console.log(curlyHair);
console.log(
  "my name is " +
    fullName +
    " " +
    " and i " +
    " " +
    age +
    " years old" +
    " " +
    " and i have" +
    " " +
    curlyHair +
    " to my dad and mom u can call them " +
    dad +
    " and " +
    mom +
    " and to my sister u cand call " +
    sister
);

var kids = 70;
var ageAdam = 14;
var ageCenter = 20;

if (ageAdam < ageCenter) {
  console.log("can get in.");
} else {
  kids > ageCenter;
  console.log("can't get in.");
}

var clayentAge = 18;
var clayentAgeTwo = 30;
var minAge = 18;
var maxAge = 30;
var block = true;

if (clayentAge >= 18 && clayentAge >= maxAge) {
  console.log("welcome");
}
alert("huu");
var age = 21;
var fullName = "liel itzchak";
var curlyHair = true;
var dad = "moshe";
var mom = "orly";
var sister = "shilat";
var numberOne = 1;
var numberTow = 2;
var numberTree = 3;
var numberFore = 4;
var numberFive = 5;
var numberSix = numberOne * numberTow;
var numberSeven = numberTree / numberFore;
var total = numberOne + numberTow;

if (numberOne < 10) {
  console.log("smaller then 10");
}
console.log(fullName);
console.log(age);
console.log(curlyHair);
console.log(
  "my name is " +
    fullName +
    " " +
    " and i " +
    " " +
    age +
    " years old" +
    " " +
    " and i have" +
    " " +
    curlyHair +
    " to my dad and mom u can call them " +
    dad +
    " and " +
    mom +
    " and to my sister u cand call " +
    sister
);

var kids = 70;
var ageAdam = 14;
var ageCenter = 20;

if (ageAdam < ageCenter) {
  console.log("can get in.");
} else {
  kids > ageCenter;
  console.log("can't get in.");
}

var clayentAge = 18;
var clayentAgeTwo = 30;
var minAge = 18;
var maxAge = 30;
var block = true;

if (clayentAge >= 18 && clayentAge >= maxAge) {
  console.log("welcome");
}
alert("huu");

// ............................................................................................................
// חלק 2   01.08.2021
// ............................................................................................................

var age = 21;
var fullName = "liel itzchak";
var curlyHair = true;
var dad = "moshe";
var mom = "orly";
var sister = "shilat";
var numberOne = 1;
var numberTow = 2;
var numberTree = 3;
var numberFore = 4;
var numberFive = 5;
var numberSix = numberOne * numberTow;
var numberSeven = numberTree / numberFore;
var total = numberOne + numberTow;

if (numberOne < 10) {
  console.log("smaller then 10");
}
console.log(fullName);
console.log(age);
console.log(curlyHair);
console.log(
  "my name is " +
    fullName +
    " " +
    " and i " +
    " " +
    age +
    " years old" +
    " " +
    " and i have" +
    " " +
    curlyHair +
    " to my dad and mom u can call them " +
    dad +
    " and " +
    mom +
    " and to my sister u cand call " +
    sister
);

var kids = 70;
var ageAdam = 14;
var ageCenter = 20;

if (ageAdam < ageCenter) {
  console.log("can get in.");
} else {
  kids > ageCenter;
  console.log("can't get in.");
}

var clayentAge = 18;
var clayentAgeTwo = 30;
var minAge = 18;
var maxAge = 30;
var block = true;

if (clayentAge >= 18 && clayentAge >= maxAge) {
  console.log("welcome");
}
alert("huu");
// ....................................................................................
// 02.08.2021

// ...........................................................................................

// var userInput;
// userInput = prompt("age")

// if (userinput) {
//     console.log(userInput)
// }

var userInput,
  chossenNumber = 3,
  guessCounter = 0;
userInput = Number(prompt("guess the number"));

if (userInput == chossenNumber) {
  Number(alert("good job"));
  guessCounter++;
  console.log("good job");
} else {
  userInput = Number(prompt("try again"));
  console.log("try again");

  if (userInput == chossenNumber) {
    userInput = Number(prompt("try again"));

    console.log("good job");
  } else {
    console.log("try one");
    userInput = Number(prompt("try again"));

    if (userInput == chossenNumber) {
      console.log("good job");
      Number(alert("good job"));
    } else {
      console.log("try again");
      userInput = Number(prompt("try again"));
    }
  }
}

// ..................................................................................
// homework
// ...................................................................................
// תרגיל 1

// var first;
// var second;
// first= Number (prompt("number"))
// second= Number( prompt("num2"))

// var result = first % second;
// console.log(result , first , second)

// .................................................................

// // תרגיל 2
// var minAge = 18;
// var userAge;

// userAge = Number( prompt("what is ur age?"))

// if (userAge >= minAge) {
//     console.log("welcome")

// }
// else {
//     console.log ("go home")
// }

// .................................................................

// תרגיל 3

// var player1;
// var player1Age;
// var player2;
// var player2Age;
// var player3;
// var playe3Age;
// var avg= player1Age +player2Age + playe3Age /3

//  player1= prompt(" 1 what U name?")
//  console.log(player1)
//  player1Age= Number( prompt(" 1 what ur age?"))
//  console.log(player1Age)

// player2= prompt(" 2 what is U name?")
// console.log(player2)
// player2Age= Number( prompt(" 2 what ur age?"))
// console.log(player2Age)

// player3= prompt(" 3 whatis U seceund name?")
// console.log(player3)
// playe3Age= Number( prompt(" 3 what ur age?"))
// console.log(playe3Age)

// console.log(player1 + " "  + player1Age  + ", "  +  player2  + " "  + player2Age  + " ,"  +  player3  + " "  +  playe3Age)

// console.log(Number( avg)) // משהו לא עובד בזה

//..............................................................

// תרגיל 4
// var num1;
// var num2;
// var num3;
// prompt

// ...............................................................................................................................................
//  home work 03.08.2021
// ......................................................................................................................................................

// var num1;
// var num2;
// num1 = Number(prompt("1"))
// num2 = Number(prompt("2"))
// console.log(num1, num2)
// if (num1 + num2 >= 10) {
//     console.log("bigger")

// }
// else {
//     console.log("smaller")
// }
// // document.getElementById("demo")

// var start = 0
// while (start < 7) {
//     console.log("hi")
//     start++
// }
// while (num1 > 0){
// console.log("bye")
// num1--
// }

//.................................................................
// for (var x=0 ; x < 10; x++ ) {
//     console.log("hello world")
// }
//..................................................................
// var userName;
//  var userNumber;

// userName=prompt("name")
// userNumber=prompt("number")

// // console.log(userName)
// // console.log(userNumber)
// // console.log(userName , userNumber)
// //.................................................................
// for ( i = 0; i < userNumber; i++) {
//     console.log(userName)

// // }
// var x = 0;
// while (x < 51) {
//     if(x % 2 == 0 ) {
//         console.log (x)
//     }
//     x++
// }
var num1;
num1 = prompt("put a  number");

// ......................................................................................................................
// 04.08.2021 תגבור
// .................................................................................................................................
// תרגיל 1
// כתבו תכנית  אשר קולטת מהמשתמש שני מספרים ומדפיסה את המשתנים לconsole . אם סכום המשתנים גדול או שווה ל13, הדפיסו "bar-mitzva" ,אם 12 הדפיסו "bat-mitzva" , אחרת הדפיסו "kid".
// var num1 = +prompt("type your first number");
// var num2 = Number(prompt("type your secucend number"));
// console.log(`number one is ${num1}`);
// console.log(`number one is ${num2}`);
// var result = num1 + num2;
// if (result >= 13) {
//     console.log("this is bar mitzva")
// }
// else if (result == 12) {
//     console.log(" this is btmitzva")
// }
// else (
//     console.log("this is a kid")
// )
// ============================================================================================================================
// תרגיל 2
// צרו לולאת while שמדפיסה "yes" 100 פעמים.
// תרגיל 2
// var i = 0;
// while(i<100){
//     console.log(i,"yes")
//     i++
// }
// ============================================================================================================================
// תרגיל 3
// צרו לולאה while  שמדפיסה "no" לפי מספר מהמשתמש.
// var i = 0;
// var nimFromUser =Number (prompt("type your number"))
// while(i < nimFromUser){
//     console.log(i, "no")
//     i++
// }
// ============================================================================================================================

// // תרגיל 4
// צרו לולאת FOR שמדפיסה "javascript is not JAVA" 1000 פעמים.
// for(var i=0; i < 1000 ;i++){
// console.log(i," JAVASCRIPT is not JAVA")
// }
// ============================================================================================================================
// תרגיל 5
// x = prompt("put a name");
// y = +prompt("put a number");
// for  (var i =0 ; i< y; i++ ){
// console.log(x)
// }
// ============================================================================================================================
// // תרגיל 6
// var firstName = prompt("first name");
// var email = prompt("first email");
// var age = +prompt("what is your age");
// console.log(firstName, email , age);
// ============================================================================================================================
// תרגיל 7
// var otherNumber = +prompt("type your secund to");
// for (var i = 0; i < otherNumber; i++) {
//     if (age > 18) {
//         console.log(`my name is ${firstName} ,\n and my email is ${email} ,\n and my age is ${age}`);
//     }
// }
// ============================================================================================================================
// תרגיל 8
// var numArry = [ 8, 5, 7, 2, 9,]
// for (var i = 0 ; i< numArry.length; i++){
//     console.log(numArry[i])
// }
// ============================================================================================================================
// תרגיל 9
// var numbrFromUser =Number (prompt("enter your number?"));
// var i = 0;
// while (i < numbrFromUser) {
//     var userName = prompt("what is your name?");
//         i++
//     if (userName == "liel") {
//         console.log("hi boss liel");
//     }
//     else{
//         console.log("no entry");
//     }
// }
// ============================================================================================================================
// תרגיל 10
// להדפיס את הלולאה של I-J
// var num1 = +prompt("number one");
// var num2 = +prompt("nmber 2");
// for(i = 0; i<num1; i++){
//     for(j = 0; j < num2; j++){
//         console.log(i*j)
//     }
// }
// ============================================================================================================================
// תרגיל 11
// צור מערכך של 5 מספרים והדפיסו לקונסול
// var number = [4,5,7,9,4];
// console.log(number);
// ============================================================================================================================
// תרגיל 12
// var names = ["liel", "or", "maor", "nati", "hila"];
// var i = 0 ;
// while (i < names.length) {
//     for (i = 0; i < names.length; i++) {
//         console.log(names[i]);
//     }
// }
// ============================================================================================================================
// תרגיל 13
// var numbrs = [52, 74, 85, 96, 41, 52, 63, 91];
// i = 0;
// for (var i = 0; i < numbrs.length; i++) {
//     if (numbrs[i] % 2 == 0);
//     console.log(numbrs[i])
// }
// ============================================================================================================================
// תרגיל 14
// var numFromUser = [];
// var nams = ["dvora", "rivka", "tikva", "liel", "shilat"];
//     // var i = o;
// for (i = 0; i < nams.length; i++) {
//     if (nams.length % 2 != 0) {
//         console.log(nams[i])
//     }
// }
// ============================================================================================================================
// תרגיל 15
// צור לולאה שמאכלת מערך של 7 מספרים, שקולטים מהמשמש והדפיסו
//  לקונסול, באופן נפרד, רק את המספרים האי-זוגיים
// var numFromUser = [];
// for (i = 0; i < 7; i++) {
//     numFromUser[i] = prompt("some text")
//     if (numFromUser[i] % 2 != 0) {
//         console.log(numFromUser[i])
//     }
// }
// ============================================================================================================================
// תרגיל 16
// צרו מערך אקראי של 6 מספרים ומילים.
//
//  צרו לולאה שעוברת על המערך ומחליפה את המילים במילה "not_number".
// var numAndWord = ["name", 45, "daba", 584, "kjnhbg", 541];
// for (var i = 0; i < numAndWord.length; i++) {
//     if (numAndWord[i] * 0 != 0) {
//         numAndWord[i]=("not a number")
//         console.log(numAndWord)
//     }
// }
// ============================================================================================================================
// תרגיל 17
// צרו לולאת while שמקבלת מהמשתמש מספר, ומאכלסת מערך של 10 מספרים רק זוגיים.
// var i = 0 ;
// while (i<9){
// var
// }
// ============================================================================================================================

// תרגיל 18
// קלטו מהמשתמש רוחב וגובה של מלבן וחשב שטח הקיף הנח עי הקלט תקיןץ
// var width = +prompt ("what the width?");
//  var height = +prompt("that the height?");
//  console.log(width* height)
// ============================================================================================================================
// תרגיל 19
// קבלו 3 מספרים מהמשתמש, אם המספרים הם בסדר יורד הדפיסו סדר יורד, במידה ואין סדר הדפיסו אין סדר
// var mistane1 = +prompt("משתנה 1");
// var mistane2 = +prompt("משתנה 2");
// var mistane3 = +prompt("משתנה 3");
// if (mistane1 < mistane2 && mistane2 < mistane3 && mistane1 < mistane3) {
//     console.log("סדר עולה");
// } else if(mistane1 > mistane2 && mistane2 > mistane3 && mistane1 > mistane3){
//     console.log("סדר יורד");
// }else{
//     console.log("אין סדר ");
// }
// ============================================================================================================================
// תרגיל 20
// כתבו תוכנית אשר קולטת מספר שלם וחיובי מהמשתמש ומדפיסה
// את ספרויתיוץ לדוגמה אם המשתמש הכניס 673, אז התוכנית
//  תדפיס 3 ואחרכך 7 אחרכך 6 לצורך עיגול עטוף את המספר ב
// var numbrss = + prompt("give a number;");
// while(numbrss > 0){
//     var modulus = numbrss % 10;
//     numbrss = (numbrss/10) - (modulus / 10);
//     console.log(modulus);
// }
// ============================================================================================================================
// תרגיל 21
// בצעו את משימה מספר 2 שתרוף 5 פעמים
// var i = 0;
// while (i < 100) {
//     console.log(i, "yes")
//     console.log(i, "yes")
//     i++
// }
// ......................................................................................................................................

// homeWork
// ..............................................................................................................................................

// כתבו פונקציה המקבלת פרמטר של טמפרטורה ומדפיסה לקונסול כיצד כדאי להתלבש היום.
// var minTem = 30;
// var maxTem = 80;
// userTem = prompt("what is the weather ?")
// if (userTem < minTem) {
//     console.log("u need hot close")

// }
// else {
//     console.log("u don't need hot close")

// }

// כתבו פונקציה המקבלת 3 קלטים ומדפיסה את תוצאת הכפל שלהם.

// num1 = Number(prompt("num1"));
// num2 = Number(prompt("num2"));
// num3 = Number(prompt("num3"));
// console.log(num1*num2*num3);

// כתבו פונקציה המקבלת שני מספרים a ו- b ומחזירה את הגדול מבינהם. הציגו את התשובה המחוזרת ב alert.

// var a = Number (prompt("number a"));
// var b = Number(prompt("number b"));
// if (a>b){
// console.log("a")
// }
// else {
//     console.log("b")
// }

// כתבו פונקציה הקולטת מידע מהמשתמש ומדפיסה אותו 10 פעמים בלולאת for

// for (i = 0 ; i< 10 ; i++){
//   console.log(  prompt("some text"))
// }

// כתבו פונקציה הקולטת מספר מהמשתמש x ומדפיסה Hello שוב ושוב x פעמים.

var numbr = Number(prompt("give me a number"));
var start = 0;
while (start > numbr) {
  console.log("hello");
}

// .....................................................................................................................
// in class
// .....................................................................................................................

// var firstName = prompt("name");
// var lastName = prompt("last name");
// var otherNumber = Number(prompt("other Number"));

// var UserAge = Number(prompt("age"));
// console.log(firstName, lastName, UserAge);

// for (var i = 0; x < otherNumber; x++) {
//     console.log(`${firstName} ${lastName} ${UserAge}`);
// }

// UserAge = Number(prompt("ageWelcom"));
// if (UserAge > 18)
//     for (var i = 0; i < otherNumber; i++) {
//         console.log(`${firstName} number age`)
//     }

// var userNumber = Number(prompt("Number"));

// for (i = 0; i < userNumber; i++) {
//     var userName = prompt("name");
//     console.log(userName);

//     if (userName == "liel" ) {
//         console.log(`hi boss ${userName}`);
//     }
//     else {
//         console.log("no entry");
//     }
// }

// for (i = 0; i < 4; i++) {
//     for (j = 0; j < 2; j++) {
//         console.log(`  i = ${i} j = ${j}`)
//     }
// }

// var numbeOne = Number(prompt("number1"));
// var numberTwo = Number(prompt("number2"));

// for (i = 0; i < numbeOne; i++) {
//     for (j = 0; j < numberTwo; j++) {
//         console.log(i * j);
//     }
// }
// var numbrs = [1, 7, 3, 4, 5];

// // for (i = 0; i < numbrs.length; i++) {
// //     console.log(numbrs[i]);

// // }
// // console.log(numbrs[0]);
// // console.log(numbrs[1]);
// // console.log(numbrs[2]);
// // console.log(numbrs[3]);
// // console.log(numbrs[4]);

// // var names = ["liel", "dani", "eden" , "yossi", "matam" , "blabla", "lala"];

// // for (i = 0 ; i < names.length; i++){
// // console.log(names[i]);
// // }

// var numbrs = [74, 85, 64, 65, 72, 47, 98, 74, 1, 32];
// for (i = 0; i < numbrs.length; i++) {
//     if (numbrs[i] % 2 == 0) {

//         console.log(numbrs[i]);
//     }
// }

// var names = [];
// for (i = 0; i < 10; i++) {
//     names[i] = prompt("n");
// }
// console.log(names);

// var numbrs = [];
// for (i = 0; i < 10; i++) {
//     numbrs[i] = Number(prompt("text"))
//     if (numbrs[i] % 2 != 0) {
//         console.log(numbrs[i]);

//     }
// }

// var stuff = ["mnb", 4, 88, "bv", "mnb", 514, 52, "bv", "mnb", 5421];
// for (i = 0; i < stuff.length; i++) {
//     if (stuff[i]*0 == 0) {

//     }
// }         console.log("number"])

var i = 0;
var somthing = [];
// while () {
if (somthing) {
}
i++;
// }

// .........................................................................................
// 05.08.2021
// .........................................................................................
// var ages = [415 ,12, 23, 45, 56, 78, 96, 41, 21]; //8
// var minAge = ages[0];
// for (var i = 0; i < ages.length; i++) {
//     if (ages[i] < minAge) {

//         minAge=ages[i];
//     }
// }
// console.log(minAge);

// var ages = [415 ,12, 23, 45, 56, 78, 96, 41, 21]; //8
// var minAge = ages[0];
// for (var i = 0; i > ages.length; i++) {
//     if (ages[i] < minAge) {

//     }
// }
// console.log(minAge);

// var ages = [12, 415, 12, 23, 2, 45, 56, 78, 96, 41, 21];
// var allAges = 0;
// for (var i = 0; i < ages.length; i++) {
//     allAges = allAges + ages[i];

// }
// console.log(allAges);
// var ages = [12, 415, 12, 23, 2, 45, 56, 78, 96, 41, 21];
// var allAges = 0;
// ages.length - 1 /2;
// console.log(ages);

// var userNumbrs = [];

// for (var i = 0; i < 5; i++) {
//     var temp = +prompt("put a number");
//     userNumbrs.push = (temp);
// }
// console.log(userNumbrs);
// ........................................................................................
// 05.08.2021 class work
// ...................................................................................................
// var ages = [415 ,12, 23, 45, 56, 78, 96, 41, 21]; //8
// var minAge = ages[0];
// for (var i = 0; i < ages.length; i++) {
//     if (ages[i] < minAge) {

//         minAge=ages[i];
//     }
// }
// console.log(minAge);

// var ages = [415 ,12, 23, 45, 56, 78, 96, 41, 21]; //8
// var minAge = ages[0];
// for (var i = 0; i > ages.length; i++) {
//     if (ages[i] < minAge) {

//     }
// }
// console.log(minAge);

// var ages = [12, 415, 12, 23, 2, 45, 56, 78, 96, 41, 21];
// var allAges = 0;
// for (var i = 0; i < ages.length; i++) {
//     allAges = allAges + ages[i];

// }
// console.log(allAges);
// var ages = [12, 415, 12, 23, 2, 45, 56, 78, 96, 41, 21];
// var allAges = 0;
// ages.length - 1 /2;
// console.log(ages);

// var userNumbrs = [];

// for (var i = 0; i < 5; i++) {
//     var temp = +prompt("put a number");
//     userNumbrs.push = (temp);
// }
// console.log(userNumbrs);

// ..........................................................................................
// home work

// .....................................................................................................
// תרגיל 1.1
// var ages = [415 ,12, 23, 45, 56,1, 78, 96, 41, 21]; //8
// var minAge = ages[0];
// for (var i = 0; i < ages.length; i++) {
//     if (ages[i] < minAge) {
//         minAge=ages[i];
//     }
// }
// console.log(minAge);
//========================================================================================================
// תרגיל 1.2
// var ages = [415 ,12, 23, 45 , 10000 ,56,1, 78, 96, 41, 21]; //8
// var minAge = ages[0];
// for (var i = 0; i < ages.length; i++) {
//     if (ages[i] > minAge) {
//         minAge=ages[i];
//     }
// }
// console.log(minAge);
//========================================================================================================
// תרגיל 1.3
// var ages = []; //==778
// // var allAges;
// for (var i = 0; i < 5; i++) {
//     var allAges = Number=(prompt  ("put a number"));
//     ages.push(allAges);

// }

// console.log(ages);
// ========================================================================================================
// תרגיל 1.4

//========================================================================================================
// תרגיל 1.5
// ========================================================================================================
//תרגיל 1.6
//========================================================================================================
// תרגיל 1.7
//========================================================================================================
//תרגיל 2.1
//========================================================================================================
// תרגיל 2.2
// ========================================================================================================
// תרגיל 3.1
// ========================================================================================================
// תרגיל 3.1.1

var names = ["liel", "dani", "rachel", "sara", "shilat"];
console.log(names);
var tempOne = names[4];
names[0] = tempOne;
// temp = names[0];
// names[4 = temp];
var tempTwo = names[0];
names[4] = tempTwo;
console.log(names);
l;
// ========================================================================================================
// תרגיל 3.1.2
// ========================================================================================================
// תרגיל 4
// ========================================================================================================
// תרגיל 5
// ========================================================================================================
// תרגיל 6
// ========================================================================================================
// תרגיל 7
// ========================================================================================================
// תרגיל 8
// var num= [];
// var i = 0;
// while (i<3){
//      num[i] = +prompt("giva ma a nimmbr");
//      console.log(num)

// i++
// }

// ========================================================================================================
// תרגיל 8.1.1
// var num= [];
// var i = 0;
// while(i<3){
//      num[i] = +prompt("giva ma a nimmbr");
//      console.log(num)

// i++
// }
// ========================================================================================================
// תרגיל 8.1.2
// ========================================================================================================
// תרגיל 8.1.2
// ========================================================================================================
// תרגיל 8.1.3
// ========================================================================================================
// תרגיל 8.1.4
// ========================================================================================================
// תרגיל 9
// ========================================================================================================
// תרגיל 10
// ========================================================================================================
// תרגיל 10.1
// ========================================================================================================
// תרגיל 10.2
// ========================================================================================================
//  תרגיל 10.3
// ========================================================================================================
// תרגיל 11
// for (var i = 0; i < 50; i++) {
//     if ( i % 7 != 0 ) {
//         console.log(i)

//     }
//     else if ( i % 7 == 0 ||"7"){
//         console.log("boom")
//     }

// }
// ========================================================================================================
