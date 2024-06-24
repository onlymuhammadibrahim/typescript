"use strict";
let id = 5;
let company = "Xtreme Station";
let isPublished = true;
let ids = [1, 2, 3, 4, 5];
let x = ["hello", 5, false];
//Node js doesnot know how to run typescript so we cover the ts file to js. Run "tsc" in terminal to build one.
const concatinateValues = (a, b) => {
    return a + b;
};
console.log(concatinateValues("5", "10"));
const user = {
    id: 5,
    name: "Ali",
    greet(message) {
        console.log("hello");
    },
};
user.greet("hello");
let myPhoneNumber = 55165165;
console.log(myPhoneNumber);
myPhoneNumber = "asd123";
console.log(myPhoneNumber);
const signContract = (employee) => {
    console.log("Contract signed by " + employee.name + " with email " + employee.email);
};
signContract({
    name: "Ibrahim",
    creditScore: 700,
    id: 5678,
    email: "onlymuhammadibrahim@gmail.com",
});
// ENUMS. They are just like objects
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "nouser";
    LoginError["WrongCredentials"] = "wrongcredentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
//Genric types for the classes
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const usernames = new StorageContainer();
usernames.addItem("Ibrahim");
usernames.addItem("Ishaq");
console.log(usernames.getItem(1));
const friendsList = new StorageContainer();
friendsList.addItem(500);
friendsList.addItem(600);
console.log(friendsList.getItem(0));
