import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faInstagram, faTwitter)

export const social = [
    {
        "platform": "facebook",
        "icon": <FontAwesomeIcon icon="fa-brands fa-facebook-f" />,
    },
    {
        "platform": "instagram",
        "icon": <FontAwesomeIcon icon="fa-brands fa-instagram" />
    }
    ,
    {
        "platform": "twitter",
        "icon": <FontAwesomeIcon icon="fa-brands fa-twitter" />
    },
]
