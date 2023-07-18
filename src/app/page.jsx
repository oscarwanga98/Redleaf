import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.contianer}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Best platform for your digital ideas products
        </h1>
        <p className={styles.description}>
          Turning your Ideas into Reality. We Bring together the team with from
          the global tech Industry{" "}
        </p>
        <button className={styles.btn}>See our works</button>
      </div>
      <div className={styles.item}></div>
      <Image src={Hero} alt=" hero" className={styles.img} />
    </div>
  );
}
