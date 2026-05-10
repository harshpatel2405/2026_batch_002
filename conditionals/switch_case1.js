let laptop = parseInt(prompt("1. Dell\n2. HP\n3. MSI\n4. Lenovo\nSelect Your choice"))

switch (laptop) {
    case 1: console.log("You won Dell Laptop..")
        break;
    case 2: console.log("You won Hp Laptop")
        break;
    case 3: console.log("You won MSI Laptop..")
        break;
    case 4: console.log("You won Lenovo Laptop")
        break;
    default: console.log("Enter option between 1 and 4 only")
}

// nested conditionals
// ATM 

let balance = 100000
 let amount ;

let choice = parseInt(prompt("1. Deposit\n2. Withdraw\n3. Check Balance\nEnter Your Operation"))

switch (choice) {
    case 1:
       amount= parseInt(prompt("Enter amount to deposit : "))
        balance += amount;
        console.log(amount + " rs depositted successfully..")
        break;
    case 2:
         amount = parseInt(prompt("Enter amount to withdraw : "))

        if (amount <= balance) {
            balance -= amount;
            console.log(amount + " rs withdrawn successfully..")
        }
        else {
            console.log("Enter proper amount to withdraw")
        }
        break;
    case 3:
        console.log("Current Account Balance : " + balance)

}