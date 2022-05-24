import React from 'react'
import Card from './Card'
import style from "./Cards.module.css"

function Cards({elements}) {
  return (
    <div className={style.cardsContainer}>
        {
            elements?.map((e , i)=> (
                <Card  
                title={e.title} 
                image={`${e.image}?random=${i}`}
                id={e.id}
                slug={e.slug}
                key={e.id}
                />
            ))
        }
    </div>
  )
}

export default Cards