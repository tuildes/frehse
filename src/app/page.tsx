import styles from "./page.module.css";

import Introduction from "@/components/Introduction/introduction";

export default function Home() {
  return (
    <div className={styles.page}>
        <Introduction />
    </div>
  );
}
