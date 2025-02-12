import Image from 'next/image'

import Styles from './gallery.module.css'

import Banner from '@/components/Banner/banner'

const content: { image: string; alt: string }[] = [
    { image: '/gallery/cat.jpg', alt: 'Cat in chair' },
]

export default function Gallery() {
    return (
        <div className={Styles.gallery__wrapper}>
            <Banner
                title="Gallery"
                subtitle="Photos and small works"
                image="/banner.gallery.png"
            />
            <main className={Styles.gallery__content}>
                <div className={Styles.gallery__cols}>
                    {content.map((item, index) =>
                        index % 3 == 0 ? (
                            <div key={index} className={Styles.item__wrapper}>
                                <Image
                                    src={item.image}
                                    width={1000}
                                    height={1000}
                                    alt={item.alt}
                                    className={Styles.item}
                                />
                            </div>
                        ) : undefined
                    )}
                </div>
                <div className={Styles.gallery__cols}>
                    {content.map((item, index) =>
                        index % 3 == 1 ? (
                            <div key={index} className={Styles.item__wrapper}>
                                <Image
                                    src={item.image}
                                    width={1000}
                                    height={1000}
                                    alt={item.alt}
                                    className={Styles.item}
                                />
                            </div>
                        ) : undefined
                    )}
                </div>
                <div className={Styles.gallery__cols}>
                    {content.map((item, index) =>
                        index % 3 == 2 ? (
                            <div key={index} className={Styles.item__wrapper}>
                                <Image
                                    src={item.image}
                                    width={1000}
                                    height={1000}
                                    alt={item.alt}
                                    className={Styles.item}
                                />
                            </div>
                        ) : undefined
                    )}
                </div>
            </main>
        </div>
    )
}
