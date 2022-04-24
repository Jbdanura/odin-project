const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const del = document.querySelector(".del")
const clear = document.querySelector(".clear");
const current = document.querySelector(".current");
const buttons = document.querySelectorAll("button");

class Calculator{
    
    constructor(){
        this.num = "";  
        
    }
    add(n){
        if(!isNaN(n) ){
            if(current.innerHTML === "0"){
                this.num = "";
            }
            this.num += n;
            current.innerHTML = this.num;
        } else if (n === "="){
            current.innerHTML = eval(this.num);
            this.num = eval(this.num);
        } else if ("ACDEL".includes(n)){
            if (n==="AC"){
                this.num = "0";
                current.innerHTML = "0";
            } else {
                current.innerHTML = current.innerHTML.substring(0,current.innerHTML.length - 1);
                this.num = current.innerHTML;
            }
        } else if ("+-/*.".includes(n)){
            if ("+-/*".includes(this.num[this.num.length-1]) || this.num.length == 0){
                return;
            }
            this.num += n;
            current.innerHTML = this.num;
        }
    }

}

let calculator = new Calculator();

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        calculator.add(button.innerHTML.toString());
    })
    
})