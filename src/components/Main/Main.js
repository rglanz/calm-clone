import { useState } from "react";
import MainButton from "./MainButton";
import { desiredOutcomes } from "data/desired_outcomes";
import { nanoid } from "nanoid";
import 'styles/Main.css';


export default function Main() {
    const [isSelected, setIsSelected] = useState(
            new Array(desiredOutcomes.length).fill(false)
        )
    const [canContinue, setCanContinue] = useState(false)

    const outcomes = desiredOutcomes.map((outcome, index) => {
        return <MainButton
                    key={nanoid()}
                    id={index}
                    text={outcome.text}
                    icon={outcome.icon}
                    gradient={outcome.gradient}
                    selected={isSelected[index]}
                    onClick={() => handleClick(index)}
                />
    })

    const handleClick = (position) => {
        const updatedIsSelected = isSelected.map((item, index) => 
            index === position ? !item : item
        )

        setIsSelected(updatedIsSelected)
        setCanContinue(updatedIsSelected.some(item => item))
    }

    return (
        <div className="main-container">
            <h1>Find Your Calm</h1>
            <p>Our goal is to help you improve your health and happiness.</p>
            <p><strong>What can we help you with today?</strong></p>

        <div className="button-container">
            {outcomes}

            {canContinue && <button>Continue</button>}
        </div>
            
        </div>
    )
}
