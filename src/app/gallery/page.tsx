import Image from "next/image"

import Styles from "./gallery.module.css"

import Banner from "@/components/Banner/banner"

const content: { image: string, alt: string }[] = [
    { image: '/gallery/cat.jpg', alt: 'Cat in chair' },
    { image: '/gallery/notion-night.jpg', alt: 'Notion in the evening' },
    { image: '/gallery/cat.jpg', alt: 'Cat in chair' },
    { image: '/gallery/cat.jpg', alt: 'Cat in chair' },
    { image: '/gallery/cat.jpg', alt: 'Cat in chair' },
    { image: '/gallery/cat.jpg', alt: 'Cat in chair' },
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
            // Colocar 3 colunas separadas para as imagens
            {content.map((item, index) => (
                <div key={index} className={Styles.item__wrapper}>
                    <Image
                        src={item.image}
                        width={1000}
                        height={1000}
                        alt={item.alt}
                        className={Styles.item}
                    />
                </div>
            ))}
        </main>
    </div>
  );
}
