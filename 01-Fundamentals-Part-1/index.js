console.log("Hello world!");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

// 2 ** 3 adalah 2 pangkat 3
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Asignment operator
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operator (<, >, >=, <=)
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // false
const isFullAge = ageSarah >= 18;
console.log(isFullAge);
console.log(now - 1991 > now - 2018);

// Template literal
const firstName = "Jonas";
const job = "teacher";
const birthYear = "1991";
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string`);
console.log(
  "String with \n\
multiple \n\
lines"
);
console.log(`String
multiple
line`);

// If else statement
const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start a driving license");
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young, Wait another ${yearLeft} years :)`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + " Years old"); // 23 diubah menjadi string
console.log("23" - "10" - 3); // 23 dan 10 diubah ke number
console.log("23" + "10" + 3); // 3 diubah jadi string
console.log("10" * "2"); // diubah ke number

// Quiz
let n = "1" + 1; // diubah ke string > 11
n = n - 1; // diubah ke number > 11 - 1
console.log(n); // sehingga hasilnya jadi 10

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");

// Truthy & Falsy value
// Lima flasy value yaitu: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

const money = 100;
// money di if statement diubah menjadi boolean
if (money) {
  console.log("dont spend it all");
} else {
  console.log("you should get a job");
}

// height disini adalah undefined, sehingga nilainya false
let height; // undefined, sehingga nilainya false
// let height = 0 // nilai 0 merupakn falsy value > false
// let height = 100 // height bukan falsy > true
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

const age = 18;
if (age === 18) console.log("You just became an adult (strict)");
if (age == 18) console.log("You just became an adult (loose)");

// === membandingkan tipe jenis nilainya
// ==  tidak membandingkan tipe jenis nilainya
console.log(18 === 18); //true
console.log(19 == 19); // true
console.log("18" == 18); // true
console.log("18" === 18); // false

const favorite = Number(prompt("Whats is your favorites number?"));
console.log(favorite);
console.log(typeof favorite); // tipenya number

// Jika kita memasukan angka favorite 23
// "23" == 23 > nilainya true
// if (favorite == 23)

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log("Why not 23 ?");

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else shoudl drive...");
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired); // true

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else shoudl drive...");
}

// Switch statement
// Kode akan jalan kebawah jika tidak ada break
const day = "friday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break; // jika break ini tidak ada, maka console log tuesday akan dijalankan sampai bertemu break
  case "tuesday":
    console.log("Prepare theory video");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory video");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

// expressions menghasilkan nilai
// statement yang menjelaskan tindakan kita
if (23 > 10) {
  const str = "23 is bigger";
}

const me = "jonas"; // ini adalah expressions
console.log(`I'am ${2037 - 1991} years odl`);

// Ternary operator
const age = 23;
age >= 18
  ? console.log("I like to drink wine") // true, jadi ini ditampilkan
  : console.log("I like to drink water"); // false, tidak ditampilkan

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
