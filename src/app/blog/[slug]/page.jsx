import Image from 'next/image'
import styles from './singlePost.module.css'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/media/images/druppels.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detailContainer}>
          <Image src="/media/images/druppels.jpg" alt="" width="50" height="50" className={styles.avatar} />
          <div className={styles.detailsPerson}>
            <span className={styles.creator}>Author</span>
            <span className={styles.person}>Sven Notermans</span>
          </div>
          <div className={styles.detailsPost}>
            <span className={styles.published}>Published</span>
            <span className={styles.date}>01.01.2024</span>
          </div>
        </div>
         <div className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam rem dignissimos nemo dolores et dolore natus! Amet exercitationem odit natus ad molestias repudiandae incidunt dolorem deleniti dolorum, cupiditate accusantium?  
      </div>
      </div>
     
    </div>
  )
}

export default SinglePostPage