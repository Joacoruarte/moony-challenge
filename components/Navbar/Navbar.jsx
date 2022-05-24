
import React from 'react'
import style from "./Navbar.module.css"
import {AiFillHeart} from "react-icons/ai"
import {GiHouse} from "react-icons/gi"
import Link from 'next/link'


function Navbar() {
  return (
    <header className={style.headerContainer}>
      <div className={style.divMoonyImg}> 
        <img src='/moony.jpg' alt='moony challenge' className={style.moonyImg}/>
        <h3>Moony App</h3>
      </div>
      <div className={style.linksContainer}> 
        <Link href={"/"} className> 
          <a><GiHouse className={style.icon}/><p>Home</p></a>
        </Link>
        <Link href={"/favourites"}> 
          <a><AiFillHeart className={style.icon}/><p>Favourites</p></a>
        </Link>
      </div>
    </header>
  )
}

export default Navbar