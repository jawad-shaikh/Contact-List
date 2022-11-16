import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur,
        saepe sunt, vero, nam quis cum adipisci aperiam harum dolorem
        dignissimos voluptas cumque magnam ex accusantium. Laboriosam adipisci
        delectus voluptatibus?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur,
        saepe sunt, vero, nam quis cum adipisci aperiam harum dolorem
        dignissimos voluptas cumque magnam ex accusantium. Laboriosam adipisci
        delectus voluptatibus?
      </p>
      <Link className={styles.btn} href="/ninjas">
        See Ninja Listing
      </Link>
    </div>
  );
}
