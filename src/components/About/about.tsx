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
        title: "Bachelor's degree in biomedical informatics (UFPR)",
        color: '#FF9D00',
        time: '2024 ~ now',
        description:
            "The Biomedical Informatics course at UFPR is a bachelor's degree that combines and provides students with a curriculum that provides solid and integrated training in the areas of Computing, Biosciences and Health. The Biomedical Informatics course at UFPR has as a differential a predominant training in the area of ​​Computing. The dynamics of the student's training include conceptual knowledge in Exact Sciences, Biological Sciences and Health. Thus, the three major areas that represent the fields of greatest evidence of this combination of knowledge are: Bioinformatics, Medical Image Processing, Clinical Records Management and Public Health. Therefore, it is a computer science with additional study in the aforementioned medical areas.",
        skills: 'C, Bioinformatic, Pascal',
    },
    {
        title: 'Diretor de Projetos & desenvolvedor Front End',
        color: '#FF005E',
        time: '2023 ~ 2024',
        description:
            'I spent 2 full years at a junior company, learning how to manage projects, provide training, manage groups, work in leadership and the executive side of the company, and deal with new technology and migrations. In addition, I was the director of the project board during 2024, achieving high goals during my management. I also participated in the development of several projects as a front-end developer and managed other projects with scrum.',
        skills: 'Front End, Vue, Laravel, Nuxt, React, Project Management, Team management, Scrum',
    },
    {
        title: 'Apple Developer Academy (ADA)',
        color: '#945aff',
        time: '2025 ~ now',
        description: '[...]',
        skills: '[...].',
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
