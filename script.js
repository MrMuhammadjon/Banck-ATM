class ATM {
    constructor(balanse = 0, pin = "0000") {
        this.balanse = balanse;
        this.pin = pin;
        this.authenticated = false;
    }

    checkPin(userPin) {
        if (userPin === this.pin) {
            alert("Tizimga xush kelebsiz");
            this.authenticated = true;
            const showBalance = document.getElementById("showBalance");
            showBalance.innerText = this.balanse;
        } else {
            alert("Tizimga xato kod kirritingiz");
        }
    }

    De(depositFromUser) {
        if (this.authenticated === true) {
            if (depositFromUser > 0) {
                const showDeposite = document.getElementById("showDeposite");
                showDeposite.innerText = depositFromUser;
                let a = Math.floor(depositFromUser);
                let b = Math.floor(this.balanse);
                this.balanse = a + b;
                const showBalance = document.getElementById("showBalance");
                showBalance.innerText = this.balanse;
                alert("Operatsiya muvaffaqiyatli bajarildi");
            } else {
                alert("siz kiritgan sum 1$dan ko'p bo'lishi kerak");
            }
        } else {
            alert("Tizimga hali siz kirmagan siz");
        }
    }

    wi(WithdrawfromUser) {
        if (this.authenticated === true) {
            if (WithdrawfromUser > 0 && WithdrawfromUser <= this.balanse) {
                this.balanse -= WithdrawfromUser;
                const showBalance = document.getElementById("showBalance");
                showBalance.innerText = this.balanse;
                const showWithdraw = document.getElementById("showWithdraw");
                showWithdraw.innerText = WithdrawfromUser;
                alert("Operatsiya muvaffaqiyatli bajarildi");
            } else {
                alert("Siz kiritgan summa balansdan ko'p bo'lmasligi kerak");
            }
        } else {
            alert("Tizimga hali siz kirmagan siz");
        }
    }
}

const myATM = new ATM();

function checkPin() {
    const userPin = document.getElementById("Pidpasword").value;
    myATM.checkPin(userPin);
}

function De() {
    const depositFromUser = parseFloat(document.getElementById("deposit-input").value);
    myATM.De(depositFromUser);
}

function wi() {
    const WithdrawfromUser = parseFloat(document.getElementById("withdraw-input").value);
    myATM.wi(WithdrawfromUser);
}