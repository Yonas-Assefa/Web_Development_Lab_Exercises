let personal_account = {
    name:"",
    deposite:0,
    Account_ID:0
}
//function to deposite
function deposite(amount){
    if(amount >=10){
        personal_account.deposite = Number.parseFloat(personal_account.deposite) + Number.parseFloat(amount);
        console.log(typeof personal_account.deposite)
        console.log("your operation has been completed successfully. Your balance is: " + personal_account.deposite + "birr");
    }
    else console.log("sorry! the minimum amount to deposite is 10 birr. Try again");
       

}


//function to withdraw
function withdraw(amount){
    if(personal_account.deposite >=amount){
        if(amount >=5 && amount <=5000){
            personal_account.deposite = personal_account.deposite - Number.parseFloat(amount);
            console.log("your operation has been completed successfully. Your balance is: " + personal_account.deposite + "birr");
        }
        else console.log("sorry! the you can only withdraw between 50birr and 5000birr  Try again");
    } else console.log("sorry! your balance is insufficient. try again")
    

}


//function to display balance
function balance(){
    console.log("Your account balance is: " + personal_account.deposite + "birr");
}


//function to transfer
function transfer(amount, reciver_ID){
    console.log(personal_account.deposite);
    if(personal_account.deposite >= amount){
        let intermidate = personal_account.deposite - amount;
        console.log(amount + " birr has benn transferd to a  bank account " + reciver_ID + " successfully. your remaining balance is: " + intermidate);
    } else console.log("sorry you dont have enough balance. try again.");
}


//function to generate a random account number
function account_number() { 
    var minm = 10000; 
    var maxm = 99999; 
    return Account_num = Math.floor(Math 
    .random() * (maxm - minm + 1)) + minm; 
}