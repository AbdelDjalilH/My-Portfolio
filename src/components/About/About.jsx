import bonhomme from "../../../assets/about/bonhomme.png";
import cursor from "../../../assets/about/cursor.png";
import laptop from "../../../assets/about/laptop.png";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.bonhomme}
          src={bonhomme}
          alt="A bonhomme with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.cursor} src={cursor} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend developer</h3>
              <p>
                I am a frontend eveloper with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.laptop} src={laptop} alt="laptop icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default About;
