import React from "react";

function Footer() {

    const date = new Date().getFullYear()

    return (
        <footer><p>Copyrighting @Szymon Kwiecinski {date}</p></footer>
    )
}

export default Footer;