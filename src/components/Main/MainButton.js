import { ReactSVG } from 'react-svg'

export default function MainButton(props) {
    const handleClick = () => {
        props.onClick(!props.selected)
    }

    const backgroundGradient = {
        background: `linear-gradient(to right, ${[...props.gradient]})`,
    }

    const fillGradient = () => {
        return (
            <svg style={{width: 0,
                        height: 0,
                        position: "absolute"}}>
                    <linearGradient
                        id={props.id}
                        className="button-gradient"
                        gradientTransform="rotate(55)">
                            <stop
                                offset="0%"
                                stopColor={props.gradient[0]}>
                            </stop>
                            <stop
                                offset="100%"
                                stopColor={props.gradient[1]}>
                            </stop>
                    </linearGradient>
            </svg>
        )
    }

    return (
        <button
            onClick={handleClick}
            style={props.selected ? backgroundGradient: null}
            className={"button" + (props.selected ? "-selected" : "")}>
                    <div className="button-label">
                        <div className="button-logo">
                            {fillGradient()}

                            <ReactSVG
                                src={props.icon}
                                style={{fill: (props.selected ? "white" : `url(#${props.id})`)}}
                            />
                        </div>
                        
                        <span>{props.text}</span>
                    </div>
        </button>
    )
}
