"use client"
import React from 'react'
import Link from 'next/link'
import style from './navbar.module.css'
 
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

export const Navbar = () => {
  return (
    <div className={style.container}>
      <Link href='/' className={style.logo}>Red Leaf</Link>
      <div className={style.links}>
        {links.map(link=>(
          <Link key={link.id} href={link.url} className={style.link}>{link.title}</Link>
        ))}
        <button onClick={()=>{
          console.log('Logged out')
        }} className={style.logout}>Logout</button>
      </div>
    </div>
  )
}
