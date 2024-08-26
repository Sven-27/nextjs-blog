import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thought Agency</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem sint laborum recusandae molestias. Beatae, laborum. Vel modi sed laudantium.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn more</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image className={styles.brandImg} src="/media/images/brands.png" fill alt="brand" />
       </div>
    </div>
    <p className={styles.imageContainer}>
       <Image className={styles.brandImg} src="/media/images/hero.gif" fill alt="puzzle gif of lightbolt" />
    </p>
  </div>
}

export default Home;