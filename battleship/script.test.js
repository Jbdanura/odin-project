const classes = require("./classes")
const Ship = classes.Ship
const Gameboard = classes.Gameboard


describe("ship", () => {
    let shipTest = new Ship(2)
    let shipOne = new Ship(2)
    shipOne.hit(1)
    let shipTwo = new Ship(2)
    shipTwo.hit(0)
    shipTwo.hit(1)
    test("ship not sunk", () => {
        expect(shipTest.isSunk()).toBe(false)
    })
    
    test("ship not sunk after 1 hit ", () =>{
        expect(shipOne.isSunk()).toBe(false)
    })

    test("ship sunk", () => {
        expect(shipTwo.isSunk()).toBe(true)
        })
    }
)

describe("gameboard", () => {
    let board = []
    let row = []
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            row.push({ship:undefined,index:undefined})
        }
        board.push(row)
        row = []
    }

    let boardTest = new Gameboard()
    test("board works", ()=>{
        expect(boardTest.getBoard()).toEqual(board) 
    })
    let ship = new Ship(4)

    test("valid placement", () => {
        expect(boardTest.validPlacement(ship,6,5)).toBe(true)
        expect(boardTest.validPlacement(ship,6,7)).toBe(false)
        expect(boardTest.validPlacement(ship,0,11)).toBe(false)
    })
})