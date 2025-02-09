import Styles from "./about.module.css"

// Permitir novas variaveis de react
import 'react';
declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number
    }
}

const infos: {
    color: string,
    time: string,
    title: string,
    description: string,
    skills: string
}[] = [
    {
        title: "...",
        color: "#FF9D00",
        time: "2024 ~ now",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu volutpat nibh." +
        "Maecenas facilisis neque condimentum vestibulum imperdiet. Nulla  tempus pretium massa commodo" +
        "blandit. Fusce luctus eros quis ligula  consequat blandit. Praesent tristique condimentum metus," +
        "vel pulvinar  dolor dictum non. Duis in viverra ante. Nunc vitae tincidunt ex.  Phasellus eget" +
        "augue vitae arcu ultrices hendrerit ut non justo. Sed  vitae purus non justo ornare luctus ut id quam." +
        "Nunc eget malesuada  risus. Pellentesque gravida vitae dui elementum pulvinar.",
        skills: "C++, R, ..."
    },
    {
        title: "...",
        color: "#FF005E",
        time: "...",
        description: "...",
        skills: "..."
    },
    {
        title: "Apple Developer Academy (ADA)",
        color: "#00B2FF",
        time: "...",
        description: "...",
        skills: "..."
    }
]

export default function About() {
    return(
        <div className={Styles.about__wrapper}>
            <hr />
            <div className={Styles.about__content}>
                <h1 className={Styles.about__title}>About me</h1>
                <div className={Styles.about__items}>
                    {infos.map((item, index) => (
                        <div key={index} className={Styles.item}>
                            <i 
                                style={{borderColor: item.color, 
                                        "--first-color": item.color, 
                                        "--second-color": infos[((index != (infos.length - 1)) ? (index + 1) : 0)].color}} 
                                className={Styles.item__dot + ' ' + ((index + 1) != infos.length ? Styles.item__timeline : '')}
                            />
                            <div className={Styles.item__content}>
                                <div className={Styles.item__title}>
                                    <h2>{item.title}</h2>
                                    <h6>{item.time}</h6>
                                </div>
                                <p className={Styles.item__description}>
                                    {item.description}
                                </p>
                                <span className={Styles.item__skills}>
                                    <strong style={{color: item.color}}>Tecnologias</strong>: c++, r, ...
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </div>
    )
}