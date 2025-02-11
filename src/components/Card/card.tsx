"use client"

import { useState} from "react"
import Styles from "./card.module.css"
import Image from "next/image"
import Link from "next/link"

import { IconX } from '@tabler/icons-react'

export default function Card(
    {name, image, description, date, showcaseImage, longDescription, principalType, skills, links}:
    {   
        name: string, image: string, description: string,
        date: string, showcaseImage: string, longDescription: string,
        principalType: string, skills: string[], links: string[]
    }) {

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
            <dialog open={opened} className={Styles.dialog__wrapper}>
                <div className={Styles.dialog__container}>
                    <div className={Styles.dialog__content}>
                        <div className={Styles.dialog__header}>
                            <div className={Styles.leftContent}>
                                <Image
                                    className={Styles.image} 
                                    src={image} 
                                    alt={name} 
                                    width={64} 
                                    height={64} 
                                />
                                <div className={Styles.title}>
                                    <div>
                                        <h2>{name}</h2>
                                        <small>{date}</small>
                                    </div>
                                    {principalType}
                                </div>
                            </div>
                            <button>
                                <IconX 
                                    onClick={() => setOpened(false)}
                                    color="#fff" 
                                    size={24} 
                                />
                            </button>
                        </div>
                        <div className={Styles.dialog__scroll}>
                            <div className={Styles.dialog__showcase}>
                                <Image
                                    className={Styles.image} 
                                    src={showcaseImage} 
                                    alt={name} 
                                    width={1920} 
                                    height={1080} 
                                />
                            </div>
                            <div className={Styles.dialog__description}>
                                {longDescription}
                            </div>
                            <div className={Styles.dialog__skills}>
                                {skills.map((chip, subIndex) => (
                                    <span key={subIndex} className={Styles.chip}>
                                        {chip}
                                    </span>
                                ))}
                            </div>
                            <div className={Styles.dialog__links}>
                                <h3>Links:</h3>
                                {links.map((link, subIndex) => (
                                    <Link key={subIndex} href={link} target="_blank">
                                        {link}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )

}