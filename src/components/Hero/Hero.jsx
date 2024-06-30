import React from "react";
import styles from "./Hero.module.css"
import heroImage from "../../../assets/hero/heroImage.png";

function Hero () {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I am Abdel-Djalil</h1>
            <p className={styles.description}>I am a full stack developer. I would like to improve my technical skills. Reach me if you would like to learn more! </p>
            <a className={styles.contactBtn} href="mailto:adj.hamzaoui@gmail.com">Contact me</a>
        </div>
        <img className={styles.heroImg} src={heroImage} alt="" />
        <div className={styles.topBlur} > </div>
        <div className={styles.bottomBlur} > </div>

    </section>
    )
}
export default Hero;