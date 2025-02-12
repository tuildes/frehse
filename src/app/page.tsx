import styles from './page.module.css'

import Introduction from '@/components/Introduction/introduction'
import About from '@/components/About/about'

export default function Home() {
    return (
        <div className={styles.page}>
            <Introduction />
            <main>
                <About />
            </main>
        </div>
    )
}
