import React from 'react'
import Image from 'next/image';
import styles from "./page.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award winning expiriences
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we ?</h1>
          <p className={styles.description}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            perferendis veritatis iusto quia quas incidunt veniam amet
            consectetur asperiores eveniet exercitationem qui explicabo tempore
            magni quo modi iure distinctio tempora consequatur, vel maxime
            commodi saepe aliquid dolore. Eaque, provident exercitationem nemo
            sed recusandae error sit, earum voluptatum corporis necessitatibus
            quibusdam?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About