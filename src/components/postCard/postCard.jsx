import Link from 'next/link'
import styles from './postCard.module.css'
import Image from 'next/image'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/media/images/druppels.jpg" alt="" fill />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.title}>Title</h2>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magnam quod incidunt quasi, ex ut ipsum, optio laborum est laudantium obcaecati odio voluptate! Officia quis illum harum sequi dignissimos deleniti?</p>
        <Link className={styles.link} href="/blog/post">Read More</Link>
      </div>
    </div>
  )
}

export default PostCard