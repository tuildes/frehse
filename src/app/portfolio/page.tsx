'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Styles from './portfolio.module.css'
import Card from '@/components/Card/card'
import Banner from '@/components/Banner/banner'

import { cards } from '@/data/portfolioData'
import { types } from '@/data/cardModel'

export default function Portfolio() {
    const [selected, setSelected] = useState(0)

    return (
        <div>
            <Banner
                title="Portfolio"
                subtitle="Front end works, softwares and others"
                image="/frehse/banner.portfolio.png"
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
                        <AnimatePresence>
                            {cards
                                .filter(
                                    (card) =>
                                        selected === 0 || card.type === selected
                                )
                                .map((card, index) => (
                                    <motion.div
                                        key={card.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.25 }}
                                    >
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
                                    </motion.div>
                                ))}
                        </AnimatePresence>
                    </div>
                </div>
            </main>
        </div>
    )
}
