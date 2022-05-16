import React from 'react';

export default function Footer({}) {
    return (
        <section className="footer-copyright spacer-double-sm bg-white text-center">
            <p className="text-uppercase small text-muted d-block mb-0">&copy; {new Date().getFullYear()} all right reserved<br/>contact@chrisandgeorgia.wedding</p>
            {/*<p className="text-muted small d-block mb-0"><br/></p>*/}
        </section>
    )
}
