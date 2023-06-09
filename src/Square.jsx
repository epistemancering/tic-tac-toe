import React from "react"
let Square = (props) => {
    function handleClick() {
        if (!props.squareValue) {
            if (props.player) {
                props.squares[props.index] = "X"
            } else {
                props.squares[props.index] = "O"
            }
            props.setSquares(props.squares)
            props.setPlayer(!props.player)
        }
    }
    return <div className = "square" onClick = {handleClick}>
        {props.squareValue === "O" ? <img alt = "" src = "https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" /> : props.squareValue}
    </div>
}
export default Square