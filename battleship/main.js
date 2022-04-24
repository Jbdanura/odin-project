const playBtn = document.querySelector(".play-btn")
const playerContainer = document.querySelector(".player-container")
const enemyContainer = document.querySelector(".enemy-container")



function createBoard(Gameboard){
    let div = document.createElement("div")
    div.classList.add("player-board")

}

function Game(){
    const player = new Player()
    const playerBoard = new Gameboard()
    const enemy = new Enemy(player,playerBoard)
    const enemyBoard = new Gameboard()
    populateBoard(playerBoard)
    populateBoard(enemyBoard)
    let playable = true
    /*playBtn.addEventListener("click",()=>{
        if(!playable){
            playable = true
            playBtn.innerHTML = "Reset"
        } else {
            location.reload()
        }
    })*/
        

    renderBoard(playerBoard, playerContainer)
    renderBoard(enemyBoard, enemyContainer)
    const playerEmptyParts = document.querySelectorAll(".empty-part")
    const playerShipParts = document.querySelectorAll(".ship-part")
    const enemyEmptyParts = document.querySelectorAll(".empty-part-enemy")
    const enemyShipParts = document.querySelectorAll(".ship-part-enemy")
    player.turnOn()
    let enemyHits = 0
    let playerHits = 0

    if (!(playerBoard.allShipsSunk() || enemyBoard.allShipsSunk())){
        if(playable){

            enemyEmptyParts.forEach((part) => {
                part.addEventListener("click", () => {
                    if(player.getTurn()){
                        player.attack(enemyBoard,part.dataset.x,part.dataset.y,enemy)
                        part.style.backgroundColor = "grey"
                        const attacked = enemy.generateAttack()

                        playerEmptyParts.forEach(part => {  

                            if(part.dataset.x == attacked.x && part.dataset.y == attacked.y){
                                part.style.backgroundColor = "grey"
                            }
                        })
                        playerShipParts.forEach(part => {  

                            if(part.dataset.x == attacked.x && part.dataset.y == attacked.y){
                                part.style.backgroundColor = "red"
                                enemyHits += 1
                            }
                        })
                        if (enemyHits === 17){
                            alert("Enemy wins!")
                        } 
                        if (playerHits === 17){
                            alert("Player wins!")
                        }
                    }
        
                })
            })
            enemyShipParts.forEach(part => {
                part.addEventListener("click", () => {
                    if(player.getTurn()){
                        player.attack(enemyBoard,part.dataset.x, part.dataset.y, enemy)
                        part.style.backgroundColor = "red"
                        playerHits += 1
                        console.log(playerHits)
                        const attacked = enemy.generateAttack()
                        console.log("attacked",attacked.x,attacked.y)
                        playerEmptyParts.forEach(part => {

                            if(part.dataset.x === attacked.x && part.dataset.y === attacked.y){
                                part.style.backgroundColor = "grey"
                            }
                        })
                        playerShipParts.forEach(part => {    

                            if(part.dataset.x === attacked.x && part.dataset.y === attacked.y){
                                part.style.backgroundColor = "red"
                                enemyHits += 1
                            }
                        })
                        if (enemyHits === 17){
                            alert("Enemy wins!")
                        } 
                        if (playerHits === 17){
                            alert("Player wins!")
                        }
                    }
                })
            })
        }
        
    } else {
        if (enemyBoard.allShipsSunk()){
            alert("You win!")
        } else {
            alert("Enemy wins!")
        }
    }
}

function renderBoard(Gameboard, container){
    const board = Gameboard.getBoard()
    container.innerHTML = ""
    let domBoard = document.createElement("div")
    for(let i = 0; i < board.length; i++){
        let domRow = document.createElement("div")
        domRow.classList.add("row")
        for(let j = 0; j < board[i].length; j++){
            let part = board[i][j]
            let domPart = document.createElement("div")
            domPart.dataset.x = j
            domPart.dataset.y = i
            if(part.ship != undefined){
                if(container == enemyContainer){ 
                    domPart.classList.add("ship-part-enemy")
                } else {
                    domPart.classList.add("ship-part")
                }
            } else {
                if(container == enemyContainer){
                    domPart.classList.add("empty-part-enemy")
                } else {
                    domPart.classList.add("empty-part")
                }
            }
            domRow.appendChild(domPart)
            domBoard.appendChild(domRow)
        }
    }
    container.appendChild(domBoard)

}

function populateBoard(Gameboard){
    let ships = []
    const carrier = new Ship(5)
    const battleship = new Ship(4)
    const cruiser = new Ship(3)
    const submarine = new Ship(3)
    const destroyer = new Ship(2)
    ships.push(carrier,battleship,cruiser,submarine,destroyer)
    ships.forEach((ship) => {
        while(true){
            let posX = Math.floor(Math.random() * 10)
            let posY = Math.floor(Math.random() * 10)
            let valid = Gameboard.placeShip(ship,posX,posY)
            if(valid){
                break
            }
        }
    })
}

function printBoard(Gameboard){
    let board = Gameboard.getBoard()
    let printable = []
    for(let row = 0; row < board.length; row++){
        let printableRow = []
        for(let column = 0; column < board[row].length; column++){
            if(board[row][column].ship != undefined){
                printableRow.push("1")
            } else {
                printableRow.push("0")
            }
        }
        console.log(printableRow)
    }
    
}

Game()