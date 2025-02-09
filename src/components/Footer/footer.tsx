import { ReactElement } from 'react';
import Styles from "./footer.module.css"

import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, 
         IconBrandNotion, IconBrandGmail } from '@tabler/icons-react';

const contactIcons: { icon: ReactElement, link: string }[] = [
    { icon: <IconBrandGithub size={32} color="#000" />, link: "https://github.com/tuildes" },
    { icon: <IconBrandLinkedin size={32} color="#000" />, link: "https://linkedin.com/in/gfrehse" },
    { icon: <IconBrandGmail size={32} color="#000" />, link: "" },
    { icon: <IconBrandInstagram size={32} color="#000" />, link: "" },
    { icon: <IconBrandNotion size={32} color="#000" />, link: "" },
]

const pages: { name: string, link: string }[] = [
    { name: "Home", link: "/" },
    { name: "Gallery", link: "/gallery" },
    { name: "Portfolio", link: "/portfolio" }
]

export default function Footer() {
    return(
        <footer className={Styles.footer__wrapper}>
            <div className={Styles.footer__content}>
                <div className={Styles.footer__contact}>
                    {contactIcons.map((item, index) => (
                        <a href={item.link} target="__blank" key={index} className={Styles.icon}>
                            {item.icon}
                        </a>
                    ))}
                </div>
                <small className={Styles.footer__citation}>
                    <i>"Estações..."</i> - Makalister, em BARKA EP
                </small>
                <div className={Styles.footer__routers}>
                    {pages.map((item, index) => (
                        <a className={Styles.link} key={index} href={item.link}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}