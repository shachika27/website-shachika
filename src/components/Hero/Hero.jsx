import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

export const Hero = () => {
    return (<section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hey, I'm Shachika -
            </h1>
            <p className={styles.description}>
                a UI/UX designer with an Engineering background, blending analytical thinking with a love for enchanting user experiences, based in Bangalore aiming to create intuitive user-friendly interfaces for evolving innovative technology!
            </p>
        </div>
        <div>
            <img src={getImageUrl("hero_image.png")} alt="Hero Image" className={styles.HeroImg} />
            <img src={getImageUrl("food.png")} alt="Food" className={styles.Food} />
            <img src={getImageUrl("sticker.png")} alt="Sticker" className={styles.Sticker} />
            <img src={getImageUrl("arrow.png")} alt="Arrow" className={styles.Arrow} />
        </div>
    </section>
    )
}