import LinkStack from './LinkStack';
import { links } from 'data/footer_links';
import { social } from 'data/social_icons';
import { nanoid } from 'nanoid';
import 'styles/Footer.css';

export default function Footer() {
    const linkStacks = links.map(stack => {
        return <LinkStack
                    key={nanoid()}
                    category={stack.title}
                    links={stack.links}
                />
    })

    const socialIcons = social.map(icon => {
        return <button 
                    key={nanoid()}
                    className="social-icons__icon">
                        {icon.icon}
                </button>
    })

    return (
        <div className="footer-container">
            {linkStacks}
            
            <div className="social-icons">{socialIcons}</div>

            <p className="copyright">
                Copyright © 2023 Calm. All rights reserved
            </p>
        </div>
    )
}
