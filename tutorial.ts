let id: number = 5;
let company: string = "Xtreme Station";
let isPublished: boolean = true;

let ids: number[] = [1, 2, 3, 4, 5];
let x: any[] = ["hello", 5, false];

//Node js doesnot know how to run typescript so we cover the ts file to js. Run "tsc" in terminal to build one.

const concatinateValues = (a: string, b: string): string => {
  return a + b;
};

console.log(concatinateValues("5", "10"));

// Interfaces

interface UserInterface {
  readonly id: number; // adding readonly will stop user from chaning the value again
  name: string;
  age?: number;
  greet(message: string): void;
}

const user: UserInterface = {
  id: 5,
  name: "Ali",
  greet(message) {
    console.log("hello");
  },
};

user.greet("hello");

// We can also define our own types and also have unions. Union are basically when
// you want to have multiple types for same fiels

type IdFieldType = string | number;

let myPhoneNumber: IdFieldType = 55165165;
console.log(myPhoneNumber);

myPhoneNumber = "asd123";
console.log(myPhoneNumber);

//Applying Intersection
interface BusinessPartner {
  name: string;
  creditScore: number;
}

interface UserIdentity {
  id: number;
  email: string;
}

type Employee = BusinessPartner & UserIdentity;

const signContract = (employee: Employee): void => {
  console.log(
    "Contract signed by " + employee.name + " with email " + employee.email
  );
};

signContract({
  name: "Ibrahim",
  creditScore: 700,
  id: 5678,
  email: "onlymuhammadibrahim@gmail.com",
});

// ENUMS. They are just like objects

enum LoginError {
  Unauthorized = "unauthorized",
  NoUser = "nouser",
  WrongCredentials = "wrongcredentials",
  Internal = "internal"
}

//Genric types for the classes

class StorageContainer <T> {
    
    private contents: T[];

    constructor() {
        this.contents = [];
    }

    addItem(item: T): void {
        this.contents.push(item);
    }

    getItem(idx: number): T | undefined {
        return this.contents[idx];
    }
}

const usernames = new StorageContainer <string>();
usernames.addItem("Ibrahim");
usernames.addItem("Ishaq");
console.log(usernames.getItem(1));

const friendsList = new StorageContainer <number>();
friendsList.addItem(500);
friendsList.addItem(600);
console.log(friendsList.getItem(0));
