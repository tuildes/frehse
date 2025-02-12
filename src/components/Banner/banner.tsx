import Styles from './banner.module.css'
import Image from 'next/image'

export default function Banner({
    title,
    subtitle,
    image,
}: {
    title: string
    subtitle: string
    image: string
}) {
    return (
        <div className={Styles.banner__wrapper}>
            <Image
                src={image}
                className={Styles.background}
                width="1920"
                height="1080"
                alt=""
            />
            <div className={Styles.banner__content}>
                <span className={Styles.title}>{title}</span>
                <span className={Styles.subtitle}>{subtitle}</span>
            </div>
        </div>
    )
}
