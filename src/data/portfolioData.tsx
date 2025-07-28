import { Card } from './cardModel'
import { ReactElement } from 'react'

export const cards: {
    name: string
    image: string
    description: string
    date: string
    showcaseImage: string
    longDescription: ReactElement
    principalType: string
    skills: string[]
    links: {
        name: string
        url: string
    }[]
}[] = [
    // PITADA - Apple Developer Academy
    Card(
        'App Pitada',
        '/frehse/portfolio/pitada.image.png',
        'Pitada is a personal recipe book with widgets that allows you to share from social networks to within the app',
        1,
        'July/2025',
        '/frehse/portfolio/pitada.showcase.png',
        <>
            <p>
                The essence of inspiration, the finishing touch, the detail that
                transforms the ordinary into something special.
                <br />
                A Pitada doesnt just offer help, it is a help.
                <br />
                Its the very <strong>Pitada</strong> of creativity your kitchen
                was missing.
                <br />
                What are you looking for in the app? A <strong>Pitada</strong>.
                What do you save from Reels?
                <br />A Pitada. The apps function is to capture and deliver
                these culinary inspiration techniques quickly and impactfully.
            </p>

            <br />
            <h2>Features</h2>
            <ul>
                <li>Sharing recipes and Reels videos</li>
                <li>Widgets for recipes and videos</li>
                <li>Search for recipes and videos</li>
                <li>Favorite recipes and videos</li>
                <li>Sharing recipes and videos</li>
            </ul>

            <br />
            <h2>Technologies used</h2>
            <ul>
                <li>Swift</li>
                <li>SwiftUI and UIKit</li>
                <li>Swift Data</li>
                <li>Unsplash API</li>
            </ul>
        </>,
        'swift',
        ['Swift', 'SwiftUI', 'Swift Data', 'iOS Development'],
        [
            {
                name: 'App Store',
                url: 'https://apps.apple.com/ph/app/pitada/id6747889796',
            },
        ]
    ),

    // Fisiologia em ação

    // Card(
    //     "Snow Impact (GAME)",
    //     "/frehse/portfolio/placeholder.image.png",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices neque eget nulla dignissim euismod. Donec interdum ipsum quis pellentesque lacinia. Nullam tincidunt id nunc. ",
    //     2,
    //     "2024",
    //     "/portfolio/placeholder.showcase.png",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat pretium lorem vel pellentesque. Pellentesque sed scelerisque orci. Sed volutpat neque sed ex pellentesque, in congue diam tincidunt. Ut mollis urna ut nisl placerat luctus. Duis eget pulvinar felis. Etiam at suscipit diam, non finibus ex. Vestibulum nec ligula a tortor commodo molestie at nec libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vel elit in mi varius suscipit. Ut condimentum bibendum purus sit amet efficitur. Mauris sit amet odio lacinia, viverra quam eget, sollicitudin nulla. Maecenas tempus, quam ac consectetur luctus, nisi.",
    //     "C and Allegro5",
    //     ["C", "Allegro5"],
    //     ["https://github.com/tuildes/snow-impact"]
    // ),
    // Card(
    //     "Juntos Pelo Miguel",
    //     "/frehse/portfolio/juntos.image.png",
    //     "The project is a website in Vue.Js and Laravel for the Juntos Pelo Miguel Lorenzo fundraising campaign. It is one of my first projects in the area and participation in Ecomp ",
    //     1,
    //     "2024",
    //     "/portfolio/placeholder.showcase.png",
    //     "...",
    //     "Website (Front End)",
    //     ["..."],
    //     ["..."]
    // ),
    // Card(
    //     "JR Consultoria",
    //     "/frehse/portfolio/jr.image.png",
    //     "Website which will serve to publicize all the services provided and means of contact by JR Consultoria.",
    //     1,
    //     "2024",
    //     "/frehse/portfolio/placeholder.showcase.png",
    //     "...",
    //     "Website (Front End)",
    //     ["..."],
    //     ["..."]
    // ),
    // Card(
    //     "Image Comparison (LBP)",
    //     "/frehse/portfolio/placeholder.image.png",
    //     "Software written in C for comparisons between a PGM database (P2 or P5) and another PGM image using LBP (Local Binary Pattern).",
    //     2,
    //     "2024",
    //     "/frehse/portfolio/placeholder.showcase.png",
    //     "...",
    //     "Software written in C",
    //     ["C", "Image Comparison", "LBP"],
    //     ["https://github.com/tuildes/image-comparison"]
    // ),
    // Card(
    //     "Landing Page Greatness",
    //     "/frehse/portfolio/greatness.image.png",
    //     "Landing Page made in Vue 2 and Nuxt.js based on a greatness layout. It is fully responsive, also featuring a dashboard for editing certain dynamic content on the page. ",
    //     1,
    //     "2023",
    //     "/frehse/portfolio/greatness.showcase.png",
    //     "...",
    //     "Landing Page (Front End)",
    //     ["Vue 2", "Nuxt 2", "Vuetify", "Json-server"],
    //     ["https://github.com/tuildes/landing-page-vue2"]
    // ),
    // Card(
    //     "Retrozule",
    //     "/frehse/portfolio/retrozule.image.png",
    //     "A web puzzle game involving easy url and html manipulation challenges in a retro theme, using vue.js, nuxt.js and vuetify.",
    //     1,
    //     "2024",
    //     "/frehse/portfolio/placeholder.showcase.png",
    //     "This was a project to test a new technology for implementation in early 2024 at Ecomp. Made entirely by me after testing, mainly to find errors and inconsistencies for later use in the company. The theme and style of the game is an old idea of ​​mine to make a \"mini NOTPRON\" with a retro anime theme.",
    //     "Web game (Front End)",
    //     ["Front End", "Vue 3", "Nuxt 3", "Technology migration"],
    //     ["https://github.com/tuildes/Retrozule"],
    // ),
    // Card(
    //     "Notion Templates",
    //     "/frehse/portfolio/notion.image.png",
    //     "...",
    //     3,
    //     "2024",
    //     "/portfolio/placeholder.showcase.png",
    //     "",
    //     "Templates to free usage on Notion",
    //     ["..."],
    //     ["https://www.notion.so/@tuildes"]
    // ),
    // Card(
    //     "Nostrosole (Scrum Master)",
    //     "/frehse/portfolio/nostrosole.image.png",
    //     "...",
    //     3,
    //     "2024",
    //     "/portfolio/placeholder.showcase.png",
    //     "...",
    //     "...",
    //     ["Vue 3", "Nuxt 3", "Vuetify", "Pinia", "Laravel", "PHP 7.4",
    //         "SCRUM", "Team management", "Organization", "Project documentation"],
    //     []
    // ),
    // Card(
    //     "Workshop SACI (2024)",
    //     "/frehse/portfolio/saci.image.png",
    //     "...",
    //     3,
    //     "2024",
    //     "/portfolio/placeholder.showcase.png",
    //     "",
    //     "...",
    //     ["..."],
    //     ["..."]
    // ),
    // Card(
    //     "Artigo",
    //     "/frehse/portfolio/hero.image.png",
    //     "...",
    //     3,
    //     "2024",
    //     "/portfolio/placeholder.showcase.png",
    //     "",
    //     "...",
    //     ["..."],
    //     ["..."]
    // ),
    // Card(
    //     "Artigo",
    //     "/frehse/portfolio/hero.image.png",
    //     "...",
    //     3,
    //     "2024",
    //     "/portfolio/placeholder.showcase.png",
    //     "",
    //     "...",
    //     ["..."],
    //     ["..."]
    // )
]
