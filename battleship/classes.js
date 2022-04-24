class Ship{
    constructor(length){
        this.length = length
        this.parts = []
        for(let i = 0; i < length; i++){
            this.parts.push(1)
        }
    }
    hit(index){
        this.parts[index] = 0
    }
    isSunk(){
        return this.parts.every(part => part == 0)
    }
    getLength(){
        return this.length
    }
}

class Gameboard{
    constructor(){
        this.board = []
        this.missedShots = []
        for(let i = 0; i < 10; i++){
            let row = []
            for(let j = 0; j < 10; j++){
                row.push({ship: undefined, shipPart: undefined})
            }
            this.board.push(row)
            row = []
        }
      
    }
    validPlacement(ship,x,y){
        let length = ship.getLength()
        if(x < 0 || x > 10 || y < 0 || y > 10){
            return false
        }
        if(length + y > 10){
            return false
        }

        for(let i = y; i < y + length; i++){
            if(this.board[i][x].ship != undefined){
                return false
            }
        }

        return true
    }

    placeShip(ship,x,y){
        if(this.validPlacement(ship,x,y)){
            let length = ship.getLength()
            for(let i = 0; i < length; i++){
                this.board[y+i][x].ship = ship
                this.board[y+i][x].shipPart = i
            }
            return true;
        }
        return false;
    }
    
    receiveAttack(x,y){
        if(this.board[x][y].ship === undefined){
            this.missedShots.push({x:x,y:y})
        } else {
            console.log(this.board[x][y])
            this.board[x][y].ship.hit(this.board[x][y].shipPart)
        }
    }
    allShipsSunk(){
        for(let row = 0; row < this.board.length; row++){
            for(let column = 0; column < this.board[row].length; column++){
                if(this.board[row][column].ship !== undefined){
                    let ship = this.board[row][column].ship
                    if(!ship.isSunk()){
                        return false
                    }
                }
            }
        }
        return true
    }
    getBoard(){
        return this.board
    }
    getMissedAttacks(){
        return this.missedShots
    }
}

class Player{
    constructor(){
        this.turn = false
    }
    turnOn(){
        this.turn = true
    }
    turnOff(enemy){
        this.turn = false
        enemy.turnOn()
    }
    attack(Gameboard, x, y, enemy){
        if(this.turn){
            Gameboard.receiveAttack(x,y)
            this.turnOff(enemy)
            return true
        }
        return false
    }
    getTurn(){
        return this.turn
    }
}

class Enemy extends Player{
    constructor(enemy,enemyBoard){
        super()
        this.attacked = []
        this.enemy = enemy
        this.enemyBoard = enemyBoard
    }
    generateAttack(){
        if(this.getTurn()){
            let pos = {x: undefined, y: undefined}
            while(true){
                let x = Math.floor(Math.random()*10)
                let y = Math.floor(Math.random()*10)
                pos.x = x
                pos.y = y
                let repeated = false
                for(let i = 0; i < this.attacked.length; i++){
                    if((this.attacked[i].x === x && this.attacked[i].y === y)){
                        repeated = true
                        break
                    }
                }
                if(!repeated){
                    this.attack(this.enemyBoard,x,y,this.enemy)
                    this.attacked.push(pos)
                    return pos
                }
            }
        }
    }
    
}

