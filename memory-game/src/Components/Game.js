import React, {useState, useEffect} from "react"
import cards from "./Cards"
import Card from "./Card"

function Game(){
    const [deck,setDeck] = useState([])
    const [score,setScore] = useState(0)
    const [highestScore, setHighestScore] = useState(0)
    const [used,setUsed] = useState([])
    
    const initDeck = () => {
        setDeck(cards)
    }
    const shuffleDeck = () =>{
        const newDeck = [...deck]
        for(let i = 0; i < newDeck.length; i++){
            const aux = newDeck[i]
            const rand = Math.floor(Math.random()* 10 )
            newDeck[i] = newDeck[rand]
            newDeck[rand] = aux
        }
        setDeck(newDeck) 
    }
    const handleClick = (event) => {
        const name = event.target.id
        if (!used.includes(name)){
            shuffleDeck()
            const newList = used.concat(name)
            setUsed(newList)
            setScore(score + 1)

        } else {
            shuffleDeck()
            if(score >= highestScore){
                setHighestScore(score)
            }
            setScore(0)
            setUsed([])
        }

    }
    useEffect(()=>{
        initDeck()
    },[])

    useEffect(()=>{
        if(score === 10){
            alert("You win!")
            setHighestScore(10)
            setScore(0)
            setUsed([])
        }
    },[score])
    return(
        <div className="container">
            <div className="score">
                <p>Score: {score}</p>
                <p>Max score: {highestScore}</p>
            </div>
            <div className="card-container">
                {deck.map((card)=>(
                    <Card key={card.title} title={card.title} src={card.src} handleClick={handleClick}/>)
                )}
            </div>
        </div>
    )
}

export default Game