"use client"

import { useState} from "react"
import Styles from "./card.module.css"
import Image from "next/image"

export default function Card(
    {name, image, description}:
    {name: string, image: string, description: string}) {

    const [opened, setOpened] = useState(false)

    return(
        <div className={Styles.card__wrapper}>
            <div className={Styles.card__content} onClick={() => setOpened(true)}>
                <span className={Styles.title}>
                    {name}
                </span>
                <Image
                    className={Styles.image} 
                    src={image} 
                    alt={name} 
                    width={600} 
                    height={1000} 
                />
                <span className={Styles.description}>
                    {description}
                </span>
            </div>
            <dialog open={opened} onClick={() => setOpened(false)} className={Styles.dialog__wrapper}>
                <div className={Styles.dialog__container}>
                    <div className={Styles.dialog__content}>
                        teste
                    </div>
                </div>
            </dialog>
        </div>
    )

}