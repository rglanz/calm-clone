export default function MainButton(props) {
    const handleClick = () => {
        props.onClick(!props.selected)
    }

    const gradient = {background: `linear-gradient(to right, ${[...props.gradient]})`}

    return (
        <button 
            onClick={handleClick}
            style={props.selected ? gradient : null} 
            className={"button" + (props.selected ? "-selected" : "")}>
                {props.text}
        </button>
    )
}
