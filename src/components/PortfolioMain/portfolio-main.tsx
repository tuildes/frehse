"use client"

import { useState } from "react"
import Styles from "./portfolio-main.module.css"
import Card from "@/components/Card/card"

const types: string[] = [ // Tipos de portfolios, all (default)
    "all",
    "front-end",
    "softwares",
    "others",
]

const cards: { 
    name: string,
    image: string,
    description: string,
    type: number,
 }[] = [
    {
        name: "Snow Impact (GAME)",
        image: "/portfolio/placeholder.jpg",
        description: "...",
        type: 2
    },
    {
        name: "Juntos Pelo Miguel",
        image: "/portfolio/placeholder.jpg",
        description: "...",
        type: 1
    },
    {
        name: "JR Consultoria",
        image: "/portfolio/placeholder.jpg",
        description: "...",
        type: 1
    },
    {
        name: "Hero Simulator",
        image: "/portfolio/placeholder.jpg",
        description: "...",
        type: 2
    },
    {
        name: "SACI 2024 - Workshop",
        image: "/portfolio/placeholder.jpg",
        description: "...",
        type: 3
    },
    {
        name: "Scrum Master - Nostrosole",
        image: "/portfolio/placeholder.jpg",
        description: "...",
        type: 3
    },
    {
        name: "Retrozule",
        image: "/portfolio/placeholder.jpg",
        description: "...",
        type: 1
    },
    {
        name: "Landing Page GREATNESS",
        image: "/portfolio/placeholder.jpg",
        description: "...",
        type: 1
    },
    {
        name: "Notion templates",
        image: "/portfolio/placeholder.jpg",
        description: "...",
        type: 3
    },
 ]

export default function PortfolioMain() {

    const [selected, setSelected] = useState(0)

    return(
        <main className={Styles.portfolio__wrapper}>
            <div className={Styles.portfolio__content}>
                <div className={Styles.portfolio__buttons}>
                    {types.map((btn, index) => (
                        <button 
                            key={index} 
                            className={(index == selected) ? Styles.selected : ''}
                            onClick={() => setSelected(index)}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
                <div className={Styles.portfolio__cards}>
                    {cards.filter(card => ((selected === 0) || (card.type === selected)))
                        .map((card, index) => (
                            <Card 
                                key={index}
                                name={card.name}
                                image={card.image}
                                description={card.description}
                            />
                    ))}
                </div>
            </div>
        </main>
    )
}