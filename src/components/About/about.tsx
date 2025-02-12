import Styles from './about.module.css'

// Permitir novas variaveis de react
import 'react'
declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number
    }
}

const infos: {
    color: string
    time: string
    title: string
    description: string
    skills: string
}[] = [
    {
        title: 'Informática Biomédica',
        color: '#FF9D00',
        time: '2024 ~ now',
        description: '...',
        skills: 'C, Pascal, R, ...',
    },
    {
        title: 'Diretor de Projetos & desenvolvedor Front End',
        color: '#FF005E',
        time: '2023 ~ 2024',
        description: '...',
        skills: 'Front End, Vue, Laravel, Nuxt, React, Project Management, ...',
    },
    {
        title: 'Apple Developer Academy (ADA)',
        color: '#945aff',
        time: '2025 ~ now',
        description: '...',
        skills: 'T.B.A.',
    },
]

export default function About() {
    return (
        <div className={Styles.about__wrapper}>
            <hr />
            <div className={Styles.about__content}>
                <h1 className={Styles.about__title}>About me</h1>
                <div className={Styles.about__items}>
                    {infos.map((item, index) => (
                        <div key={index} className={Styles.item}>
                            <i
                                style={{
                                    borderColor: item.color,
                                    '--first-color': item.color,
                                    '--second-color':
                                        infos[
                                            index != infos.length - 1
                                                ? index + 1
                                                : 0
                                        ].color,
                                }}
                                className={
                                    Styles.item__dot +
                                    ' ' +
                                    (index + 1 != infos.length
                                        ? Styles.item__timeline
                                        : '')
                                }
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
                                    <strong style={{ color: item.color }}>
                                        Tecnologias
                                    </strong>
                                    : {item.skills}
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
