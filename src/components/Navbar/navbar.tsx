import Link from 'next/link'
import Styles from './navbar.module.css'

import { Moirai_One } from 'next/font/google'
const moirai = Moirai_One({ weight: '400', subsets: ['latin'] })

const linksNavbar: { name: string; link: string }[] = [
    { name: 'Home', link: '/' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Portfolio', link: '/portfolio' },
]

export default function NavBar() {
    return (
        <header className={Styles.header__wrapper}>
            <div className={Styles.header__content}>
                <Link
                    href="/"
                    className={Styles.title + ' ' + moirai.className}
                >
                    <span>tuildes</span>.
                </Link>
                <div className={Styles.links}>
                    {linksNavbar.map((item, index) => (
                        <Link key={index} href={item.link}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}
