// var name = "Martin";
// var age = 23;
// var shootingScore = 45.6;
//
// var message = "Hi, my name is " + name + " and i am " + age + " years old.";

// alert(message);

// var firstName = "Martin";
// var lastName = "Nnachi";
// var dob = "06-09-79";
// var age = 39;
// var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";
//
// var loginWelcomeMessage = "Welcome, " + firstName + " " + lastName + ". Happy " + age + "th" + " birthday!";
//
// alert(loginWelcomeMessage)
// console.log(loginWelcomeMessage)

// var myAccountBalance = 1200
// var nikeAirMax = 7459.98
// var coupon = 7000

// === ??

// var val1 = 23
// var val2 = "23"
//
// if (val1 === val2)
//     console.log("These are the same")
// else
//     console.log("One of these is not like the other")

// if (nikeAirMax <= myAccountBalance) {
//     myAccountBalance -= nikeAirMax
//     console.log("I just bought some dope shoes")
//     console.log("Account Balance: " + myAccountBalance)
// } else if (nikeAirMax - coupon <= myAccountBalance) {
//     console.log("We just bought these shoes with a coupon")
//     myAccountBalance -= nikeAirMax - coupon
//     console.log(myAccountBalance)
// } else {
//     console.log("Not enough money in your account!")
// }

/*var students = ["Timmy", "Ann", "Martin", "Ken"]

var naughtyList = []

naughtyList.push(students[0])

var index = naughtyList.indexOf("Timmy")

if (index > -1) {
    naughtyList = naughtyList.splice(index, 1)
}


console.log(naughtyList)
console.log(students)*/

function area(length, width) {
    return length * width;
}

var area1 = area(10, 15);
console.log(area1);

var rectangleArea = [];
rectangleArea.push(area(12, 67));
rectangleArea.push(area(45, 22));
rectangleArea.push(area(82, 96));

console.log(rectangleArea);

var bankBalance = 1000;

function makeTransaction(priceOfSale) {
    if (priceOfSale <= bankBalance) {
        bankBalance -= priceOfSale;
        console.log("Purchase Successful!")
    } else {
        console.log("Insufficient funds")
    }
}

console.log(bankBalance);
makeTransaction(34.77);
console.log(bankBalance);
makeTransaction(2.99);
console.log(bankBalance);
makeTransaction(147);
console.log(bankBalance);

console.log("========================================");

/*Objects*/

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greeting = function () {
        return "Hi, i'm " + this.firstName + " " + this.lastName + " and i'm " + this.age + " years old"
    }
}

var students = [];

students.push(new Student("Martin", "Nnachi", 39));
students.push(new Student("Ken", "Coleman", 29));
students.push(new Student("Gloria", "Giramiya", 28));
students.push(new Student("Jasmine", "Sijuade", 26));

var student = students[0];

for (var key in student) {
    console.log(student[key])
}


// var s1 = new Student("Martin", "Nnachi", 39);
// console.log(s1);
// console.log(s1.greeting());


// var student0 = {
//     firstName: "Elesie",
//     lastName: "Nnachi",
//     age: 40,
// };

// console.log(student0.firstName);
// console.log(student0.lastName);
// console.log(student0.greeting());

/*Creates a new empty object*/
// var student1 = new Object();
// student1.firstName = "Martin";
// student1.lastName = "Nnachi";
//
// var student2 = {};
// student2.firstName = "Gloria";
// student2.lastName = "Giramiya";
// student2.age = 28;


// students.push(student0);
// students.push(student1);
// students.push(student2);

// for (var index = 0; index < students.length; index++) {
//     var student = students[index];
//     console.log(student.greeting());
//}
























