'use client'

import { useState } from 'react'
import Styles from './portfolio.module.css'
import Card from '@/components/Card/card'
import Banner from '@/components/Banner/banner'

const types: string[] = [
    // Tipos de portfolios, all (default)
    'all',
    'front-end',
    'softwares',
    'others',
]

const cards: {
    name: string
    image: string
    description: string
    type: number
    date: string
    showcaseImage: string
    longDescription: string
    principalType: string
    skills: string[]
    links: string[]
}[] = [
    // {
    //     name: "Snow Impact (GAME)",
    //     image: "/portfolio/placeholder.image.png",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices neque eget nulla dignissim euismod. Donec interdum ipsum quis pellentesque lacinia. Nullam tincidunt id nunc. ",
    //     type: 2,
    //     date: "2024",
    //     showcaseImage: "/portfolio/placeholder.showcase.png",
    //     longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat pretium lorem vel pellentesque. Pellentesque sed scelerisque orci. Sed volutpat neque sed ex pellentesque, in congue diam tincidunt. Ut mollis urna ut nisl placerat luctus. Duis eget pulvinar felis. Etiam at suscipit diam, non finibus ex. Vestibulum nec ligula a tortor commodo molestie at nec libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vel elit in mi varius suscipit. Ut condimentum bibendum purus sit amet efficitur. Mauris sit amet odio lacinia, viverra quam eget, sollicitudin nulla. Maecenas tempus, quam ac consectetur luctus, nisi. ",
    //     principalType: "C and Allegro5",
    //     skills: [ "C", "Allegro5" ],
    //     links: [ "https://github.com/tuildes/snow-impact" ]
    // },
    // {
    //     name: "Juntos Pelo Miguel",
    //     image: "/portfolio/juntos.image.png",
    //     description: "The project is a website in Vue.Js and Laravel for the Juntos Pelo Miguel Lorenzo fundraising campaign. It is one of my first projects in the area and participation in Ecomp ",
    //     type: 1,
    //     date: "2024",
    //     showcaseImage: "/portfolio/placeholder.showcase.png",
    //     longDescription: "",
    //     principalType: "Website (Front End)",
    //     skills: [ "..." ],
    //     links: [ "..." ]
    // },
    // {
    //     name: "JR Consultoria",
    //     image: "/portfolio/jr.image.png",
    //     description: "The project is a website, which will serve to publicize all the services provided and means of contact by JR Consultoria. This website contains pages to tell about the history of the company in general, as well as links that redirect to the Landing Contact pages, in general, capture “leads”.",
    //     type: 1,
    //     date: "2024",
    //     showcaseImage: "/portfolio/placeholder.showcase.png",
    //     longDescription: "...",
    //     principalType: "Website (Front End)",
    //     skills: [ "Vue 2", "Nuxt 2", "Scrum", "GTM", "Laravel", "PHP 7.4" ],
    //     links: [ "http://jrconsultoria.com.br/" ]
    // },
    // {
    //     name: "Image Comparison (LBP)",
    //     image: "/portfolio/placeholder.image.png",
    //     description: "Software written in C for comparisons between a PGM database (P2 or P5) and another PGM image using LBP (Local Binary Pattern).",
    //     type: 2,
    //     date: "2024",
    //     showcaseImage: "/portfolio/placeholder.showcase.png",
    //     longDescription: "...",
    //     principalType: "Software written in C",
    //     skills: [ "C", "Image Comparison", "LBP" ],
    //     links: [ "https://github.com/tuildes/image-comparison" ]
    // },
    // {
    //     name: "Landing Page Greatness",
    //     image: "/portfolio/greatness.image.png",
    //     description: "Landing Page made in Vue 2 and Nuxt.js based on a greatness layout. Made as a project to fix and train in the language at Ecomp. It is fully responsive, also featuring a dashboard for editing certain dynamic content on the page. ",
    //     type: 1,
    //     date: "2023",
    //     showcaseImage: "/portfolio/placeholder.showcase.png",
    //     longDescription: "",
    //     principalType: "Landing Page (Front End)",
    //     skills: [ "Vue 2", "Nuxt 2", "Vuetify", "Json-server" ],
    //     links: [ "https://github.com/tuildes/landing-page-vue2" ]
    // },
    {
        name: 'Retrozule',
        image: '/portfolio/retrozule.image.png',
        description:
            'A web puzzle game involving easy url and html manipulation challenges in a retro theme, using vue.js, nuxt.js and vuetify. ',
        type: 1,
        date: '2024',
        showcaseImage: '/portfolio/placeholder.showcase.png',
        longDescription:
            'This was a project to test a new technology for implementation in early 2024 at Ecomp. Made entirely by me after testing, mainly to find errors and inconsistencies for later use in the company. The theme and style of the game is an old idea of ​​mine to make a "mini NOTPRON" with a retro anime theme. ',
        principalType: 'Web game (Front End)',
        skills: ['Front End', 'Vue 3', 'Nuxt 3', 'Technology migration'],
        links: ['https://github.com/tuildes/Retrozule'],
    },
    // {
    //     name: "Notion Templates",
    //     image: "/portfolio/notion.image.png",
    //     description: "...",
    //     type: 3,
    //     date: "2024",
    //     showcaseImage: "/portfolio/placeholder.showcase.png",
    //     longDescription: "",
    //     principalType: "Templates to free usage on Notion",
    //     skills: [ "..." ],
    //     links: [ "https://www.notion.so/@tuildes" ]
    // },
    // {
    //     name: "Nostrosole (Scrum Master)",
    //     image: "/portfolio/nostrosole.image.png",
    //     description: "...",
    //     type: 3,
    //     date: "2024",
    //     showcaseImage: "/portfolio/placeholder.showcase.png",
    //     longDescription: "...",
    //     principalType: "...",
    //     skills: [ "Vue 3", "Nuxt 3", "Vuetify", "Pinia", "Laravel", "PHP 7.4",
    //               "SCRUM", "Team management", "Organization", "Project documentation"],
    //     links: []
    // },
    // {
    //     name: "...",
    //     image: "/portfolio/saci.image.png",
    //     description: "...",
    //     type: 3,
    //     date: "2024",
    //     showcaseImage: "/portfolio/placeholder.showcase.png",
    //     longDescription: "",
    //     principalType: "...",
    //     skills: [ "..." ],
    //     links: [ "..." ]
    // },
    // {
    //     name: "...",
    //     image: "/portfolio/hero.image.png",
    //     description: "...",
    //     type: 2,
    //     date: "2024",
    //     showcaseImage: "/portfolio/placeholder.showcase.png",
    //     longDescription: "",
    //     principalType: "...",
    //     skills: [ "..." ],
    //     links: [ "..." ]
    // },
]

export default function Portfolio() {
    const [selected, setSelected] = useState(0)

    return (
        <div>
            <Banner
                title="Portfolio"
                subtitle="Code works, notion templates and others"
                image="/banner.portfolio.png"
            />
            <main className={Styles.portfolio__wrapper}>
                <div className={Styles.portfolio__content}>
                    <div className={Styles.portfolio__buttons}>
                        {types.map((btn, index) => (
                            <button
                                key={index}
                                className={
                                    index == selected ? Styles.selected : ''
                                }
                                onClick={() => setSelected(index)}
                            >
                                {btn}
                            </button>
                        ))}
                    </div>
                    <div className={Styles.portfolio__cards}>
                        {cards
                            .filter(
                                (card) =>
                                    selected === 0 || card.type === selected
                            )
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
        </div>
    )
}
