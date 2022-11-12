import React from 'react'
import ExternalLink from '../components/ExternalLink'

const FooterSection = () => {
    return (
        <footer>
            <div className="social-media">
                <ExternalLink link="https://www.facebook.com" icon="fa-brands fa-facebook-f" />
                <ExternalLink link="https://www.instagram.com" icon="fa-brands fa-instagram" />
                <ExternalLink link="https://www.twitter.com" icon="fa-brands fa-twitter" />
                <ExternalLink link="https://www.google.com" icon="fa-brands fa-google" />
                <ExternalLink link="https://www.linkedin.com" icon="fa-brands fa-linkedin" />
            </div>
            <div className="copyright">© 2022 Fixxo. All Rights Reserved.</div>
        </footer>
    )
}

export default FooterSection





