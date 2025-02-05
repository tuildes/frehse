import Styles from "./navbar.module.css"

import { Moirai_One } from 'next/font/google'
const moirai = Moirai_One({ weight: "400" })

const linksNavbar: { name:string, link:string }[] = [
    { name: "Home", link: "/" },
    { name: "Gallery", link: "/gallery" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/#contact" },
]

export default function NavBar() {
    return (
      <header className={Styles.header__wrapper}>
        <div className={Styles.header__content}> 
            <span className={Styles.title + ' ' + moirai.className}>
                <span>t</span>.
            </span>
            <div className={Styles.links}>
                {linksNavbar.map((item, index) => (
                    <a key={index} href={item.link}>
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
      </header>
    );
}