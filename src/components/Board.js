import React, {useState, useEffect} from 'react'

export const Board = () => {

const [player, setPlayer] = useState(1)
const [mark, setMark] = useState("X")

const [one, setOne] = useState("")
const [two, setTwo] = useState("")    
const [three, setThree] = useState("")  
const [four, setFour] = useState("")  
const [five, setFive] = useState("")  
const [six, setSix] = useState("")  
const [seven, seteven] = useState("")  
const [eigth, setEight] = useState("")  
const [nine, setNine] = useState("")  





const select = (meth) => {
    meth(mark)
    if (player === 1){
        setMark("O")
        setPlayer(2)
    } else {
        setMark("X")
        setPlayer(1)
    }

}


    return (
    <div className="container">
        <div className="Row">
            <div className="square one" onClick={() => select(setOne)}>
                <p>{one}</p>
                </div>   
            <div className="square two" onClick={() => select(setTwo)}><p>{two}</p></div>   
            <div className="square three"></div>
        </div>
        <div className="Row">
            <div className="square four"></div>   
            <div className="square five"></div>   
            <div className="square six"></div>
        </div> 
        <div className="Row"> 
            <div className="square seven"></div>   
            <div className="square eight"></div>   
            <div className="square nine"></div>
        </div> 
    </div>
    )}