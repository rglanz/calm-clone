import { nanoid } from "nanoid"

export default function LinkStack(props) {
    const links = props.links.map(link => {
        return <button key={nanoid()}>{link}</button>      // Styled button > empty link
    })

    return (
        <div>
            <p>{props.category}</p>
            {links}
        </div>
    )
}