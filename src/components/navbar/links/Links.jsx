"use client"
import { useState } from 'react'
import styles from "./links.module.css"
import NavLink from '../navLink/NavLink'

const links = [
  { 
    path: '/', 
    title: 'Home'
 },
  { 
    path: '/about', 
    title: 'About' 
  },
  { 
    path: '/contact', 
    title: 'Contact' 
  },
  { 
    path: '/blog', 
    title: 'Blog' 
  }
]

const Links = () => {
  const [open, setOpen] = useState(false)
 
  //temporary
  const session = true
  const isAdmin = true

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {
          links.map((link, index) => (
            <NavLink key={index} item={link} />
          ))
        }{
          session ? (
            <>
            {
              isAdmin && (
                <NavLink item={{ path: '/admin', title: 'Admin' }} />
              ) 
            }
            <button className={styles.logout}>Logout</button>
              </>
          ) : (
            <NavLink item={{ path: '/login', title: 'Login' }} />
          )
        }
      </div>
      <button className={styles.menu} onClick={() => setOpen(prev => !prev)}>Menu</button>
      {
        open && (
          <div className={styles.mobileLinks}>
            {
              links.map((link, index) => (
                <NavLink key={index} item={link} />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Links