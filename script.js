
class ATM {
    constructor(balanse = 5000, pin = "123"){
        this.balanse = balanse
        this.pin = pin
    }

    checkPin(userPin){
        if (userPin === this.pin) {
            alert("Tizimga xush kelebsiz")
        }else{
            alert("Tizimga xato kod kirritingiz")
            console.log(userPin);
            console.log(this.pin);  
            
        }
    }

    de(){}

    
}

const myATM = new ATM()

function checkPin() {
    const userPin = document.getElementById("Pidpasword").value;
    myATM.checkPin(userPin)
}

function de() {
    const Userdeposit = document.getElementById("deposit-input").value
    myATM.de(Userdeposit)
}