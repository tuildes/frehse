import { ReactElement } from 'react';
import Styles from './footer.module.css'
import Link from 'next/link'
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, 
         IconBrandNotion, IconBrandGmail } from '@tabler/icons-react';

const contactIcons: { icon: ReactElement, link: string }[] = [
    { icon: <IconBrandGithub size={32} color='#000' />, link: 'https://github.com/tuildes' },
    { icon: <IconBrandLinkedin size={32} color='#000' />, link: 'https://linkedin.com/in/gfrehse' },
    { icon: <IconBrandGmail size={32} color='#000' />, link: 'mailto:frehsegustavo@gmail.com' },
    { icon: <IconBrandInstagram size={32} color='#000' />, link: 'https://www.instagram.com/gustfrehse/' },
    { icon: <IconBrandNotion size={32} color='#000' />, link: 'https://www.notion.so/@tuildes' },
]

const pages: { name: string, link: string }[] = [
    { name: 'Home', link: '/' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Portfolio', link: '/portfolio' }
]

export default function Footer() {
    return(
        <footer className={Styles.footer__wrapper}>
            <div className={Styles.footer__content}>
                <div className={Styles.footer__contact}>
                    {contactIcons.map((item, index) => (
                        <Link href={item.link} target='__blank' key={index} className={Styles.icon}>
                            {item.icon}
                        </Link>
                    ))}
                </div>
                <small className={Styles.footer__citation}>
                    <i>&quot;Todas as coisas mudam com o passar do tempo. E eu não sei por que insisto em dizer que sou o mesmo&quot;</i> - Makalister on Estações
                </small>
                <div className={Styles.footer__routers}>
                    {pages.map((item, index) => (
                        <Link className={Styles.link} key={index} href={item.link}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}