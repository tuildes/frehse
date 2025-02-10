import Link from "next/link"
import Styles from "./not-found.module.css"

export default function NotFound() {
    return(
        <div>
            <main className={Styles.error}>
                <h1>Page not found</h1>
                <p>The page you are trying to access does not exist or has moved</p>
                <Link href="/">Return to home</Link>
            </main>
        </div>
    )
}