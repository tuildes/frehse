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
    date: string,
    showcaseImage: string,
    longDescription: string,
    principalType: string,
    skills: string[],
    links: string[]
 }[] = [
    {
        name: "Snow Impact (GAME)",
        image: "/portfolio/placeholder.image.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices neque eget nulla dignissim euismod. Donec interdum ipsum quis pellentesque lacinia. Nullam tincidunt id nunc. ",
        type: 2,
        date: "2024",
        showcaseImage: "/portfolio/placeholder.showcase.png",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat pretium lorem vel pellentesque. Pellentesque sed scelerisque orci. Sed volutpat neque sed ex pellentesque, in congue diam tincidunt. Ut mollis urna ut nisl placerat luctus. Duis eget pulvinar felis. Etiam at suscipit diam, non finibus ex. Vestibulum nec ligula a tortor commodo molestie at nec libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vel elit in mi varius suscipit. Ut condimentum bibendum purus sit amet efficitur. Mauris sit amet odio lacinia, viverra quam eget, sollicitudin nulla. Maecenas tempus, quam ac consectetur luctus, nisi. ",
        principalType: "C and Allegro5",
        skills: [ "C", "Allegro5" ],
        links: [ "https://github.com/tuildes/snow-impact" ]
    },
    // {
    //     name: "Juntos Pelo Miguel",
    //     image: "/portfolio/placeholder.jpg",
    //     description: "...",
    //     type: 1
    // },
    // {
    //     name: "JR Consultoria",
    //     image: "/portfolio/placeholder.jpg",
    //     description: "...",
    //     type: 1
    // },
    // {
    //     name: "Hero Simulator",
    //     image: "/portfolio/placeholder.jpg",
    //     description: "...",
    //     type: 2
    // },
    // {
    //     name: "SACI 2024 - Workshop",
    //     image: "/portfolio/placeholder.jpg",
    //     description: "...",
    //     type: 3
    // },
    // {
    //     name: "Scrum Master - Nostrosole",
    //     image: "/portfolio/placeholder.jpg",
    //     description: "...",
    //     type: 3
    // },
    // {
    //     name: "Retrozule",
    //     image: "/portfolio/placeholder.jpg",
    //     description: "...",
    //     type: 1
    // },
    // {
    //     name: "Landing Page GREATNESS",
    //     image: "/portfolio/placeholder.jpg",
    //     description: "...",
    //     type: 1
    // },
    // {
    //     name: "Notion templates",
    //     image: "/portfolio/placeholder.jpg",
    //     description: "...",
    //     type: 3
    // },
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
                                date={card.date}
                                showcaseImage={card.showcaseImage}
                                longDescription={card.longDescription}
                                principalType={card.principalType}
                                skills={card.skills}
                                links={card.links}
                            />
                    ))}
                </div>
            </div>
        </main>
    )
}