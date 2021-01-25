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