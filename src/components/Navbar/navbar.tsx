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
      <header className="header__wrapper">
        <div className="header__content"> 
            <span className={'title ' + moirai.className}>
                t.
            </span>
            <div className="links">
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