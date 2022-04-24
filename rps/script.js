const one = document.getElementById("one")
const two = document.getElementById("two")
const result = document.getElementById("result-text")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const playBtn = document.getElementById("play")

class Game{
    constructor(){
        this.myPoints = 0
        this.enemyPoints = 0
        this.playable = false;
        this.playedOnce = false;
    }

    letsPlay(){
        if (this.playedOnce) {
            this.myPoints = 0
            this.enemyPoints = 0
            this.update()
        }
        if (this.playable === false){
            this.playable = true;
            result.innerHTML = ""
            one.innerHTML = "0"
            two.innerHTML = "0"
            playBtn.innerHTML = "Reset"
            this.playedOnce = true;
            playBtn.style.backgroundColor = "rgb(109, 172, 16)"
        } 
 
    }
    generateMove(){
        let choices = ["rock","paper","scissors"]
        let num = parseInt(Math.random() * 3)
        let result = choices[num]
        return result
    }
    checkWinCondition(){
        if(this.enemyPoints === 3){
            result.innerHTML = "Enemy wins!"
            this.playable = false
        } else if(this.myPoints === 3){
            result.innerHTML = "You win!"
            this.playable =  false;
        }
    }
    update(){
        one.innerHTML = this.myPoints;
        two.innerHTML = this.enemyPoints;
    }
    lose(enemyMove){
        if (this.myPoints > 0){
            this.myPoints -= 1
        }
        this.enemyPoints += 1
        result.innerHTML = "Enemy selects " + enemyMove + ". You lose a point"
    }
    win(enemyMove){
        if (this.enemyPoints > 0){
            this.enemyPoints -= 1
        }
        this.myPoints += 1
        result.innerHTML = "Enemy selects " + enemyMove + ". You win a point"
    }
    play(move){
        if (this.playable){
            const enemyMove = this.generateMove();
            if(move === "rock"){   
                if(enemyMove === "rock"){
                    result.innerHTML = "Enemy selects rock. It's a tie"
                } else if (enemyMove === "paper"){
                    this.lose(enemyMove)
                } else if (enemyMove === "scissors"){
                    this.win(enemyMove)
                }
            } else if(move === "paper"){
                if(enemyMove ==="rock"){
                    this.win(enemyMove)
                } else if(enemyMove==="paper"){
                    result.innerHTML = "Enemy selects paper. It's a tie"
                } else if(enemyMove === "scissors"){
                    this.lose(enemyMove)
                }
            } else if(move === "scissors"){
                if(enemyMove ==="rock"){
                    this.lose(enemyMove)
                } else if(enemyMove==="paper"){
                    this.win(enemyMove)
                } else if(enemyMove === "scissors"){
                    result.innerHTML = "Enemy selects scissors. It's a tie"
                }

            }
            this.checkWinCondition()
            this.update()
        }
    }
}

var game = new Game();

rock.addEventListener("click", function(){
    game.play("rock")
})

paper.addEventListener("click", function(){
    game.play("paper")
})


scissors.addEventListener("click", function(){
    game.play("scissors")
})

playBtn.addEventListener("click", function(){
    game.letsPlay();
})
