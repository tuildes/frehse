import Image from 'next/image'
import Styles from './gallery.module.css'
import Banner from '@/components/Banner/banner'

const content: { image: string; alt: string }[] = [
    { image: '/frehse/gallery/notion-night.jpg', alt: 'Notion at evening' },
    { image: '/frehse/gallery/cat.jpg', alt: 'Cat in chair' },
    { image: '/frehse/gallery/barbixas.jpg', alt: 'Armchairs and a stage' },
    { image: '/frehse/gallery/ecomp.jpg', alt: 'Ecomp headquarters' },
    { image: '/frehse/gallery/fire.jpg', alt: 'Fire' },
    { image: '/frehse/gallery/landscape.jpg', alt: 'Landscape with houses and trees' },
    { image: '/frehse/gallery/ring.jpg', alt: 'Wedding ring' },
    { image: '/frehse/gallery/grana-azul.jpeg', alt: 'Brazilian note in blue, from the album Grana Azul by Rodrigo Zin' },
    { image: '/frehse/gallery/roblox.png', alt: 'Florest in roblox' },
    { image: '/frehse/gallery/setup.jpg', alt: 'Laptop and monitor' },
    { image: '/frehse/gallery/imersao.jpg', alt: 'House and people' },
    { image: '/frehse/gallery/vein.jpg', alt: 'Vein' },
    { image: '/frehse/gallery/bedroom.jpg', alt: 'Bedroom' },
    { image: '/frehse/gallery/iguacu.jpg', alt: 'Cataratas do Iguaçu' },
    { image: '/frehse/gallery/stones.jpg', alt: 'Stones and water' },
    { image: '/frehse/gallery/quati.jpg', alt: 'Quati' },
    { image: '/frehse/gallery/bittersweet.jpg', alt: 'Disk of bittersweet memories' },
    { image: '/frehse/gallery/post.violet.png', alt: 'Violet evergarden with citation' },
]

export default function Gallery() {
    return (
        <div className={Styles.gallery__wrapper}>
            <Banner
                title="Gallery"
                subtitle="Photos and small works"
                image="/frehse/banner.gallery.png"
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
