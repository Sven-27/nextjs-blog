"use client"
import { useState } from 'react'
import styles from "./links.module.css"
import NavLink from '../navLink/NavLink'
import { links } from '@/data/links/links.js' 
import Image from 'next/image'

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
      <Image className={styles.menuButton} src="/media/images/menu.png" width="30" height="30" alt="" onClick={() => setOpen(prev => !prev)} /> 
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