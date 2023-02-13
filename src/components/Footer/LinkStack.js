import { nanoid } from "nanoid"

export default function LinkStack(props) {
    const links = props.links.map(link => {
        return <button 
                    key={nanoid()}
                    className="link-stack__link">
                        {link}
                </button>
    })

    return (
        <div className="link-stack">
            <p className="link-stack__title">{props.category}</p>
            {links}
        </div>
    )
}