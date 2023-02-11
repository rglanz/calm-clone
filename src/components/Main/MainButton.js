export default function MainButton(props) {
    const handleClick = () => {
        props.onClick(!props.selected)
    }
    
    // TODO: refactor into CSS classes
    const buttonStyle = props.selected ? {backgroundColor: "blue"} : {backgroundColor: "white"};

    return (
        <button onClick={handleClick} style={buttonStyle}>{props.text}</button>
    )
}
