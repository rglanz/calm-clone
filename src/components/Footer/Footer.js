import LinkStack from './LinkStack';
import { links } from 'data/footer_links';
import { social } from 'data/social_icons';
import { nanoid } from 'nanoid';

export default function Footer() {
    const linkStacks = links.map(stack => {
        return <LinkStack
                    key={nanoid()}
                    category={stack.title}
                    links={stack.links}
                />
    })

    const socialIcons = social.map(icon => {
        return <button key={nanoid()}>{icon.icon}</button>
    })

    return (
        <div>
            {linkStacks}
            {socialIcons}
            <p>Copyright © 2023 Calm. All rights reserved</p>
        </div>
    )
}
