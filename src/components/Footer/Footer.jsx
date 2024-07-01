import mail from "../../../assets/footer/mail.png";
import linkedin from "../../../assets/footer/linkedin.png";
import github from "../../../assets/footer/github.png";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.footerIcon} src={mail} alt="" />
          <a href="mailto:adj.hamzaoui@gmail.com">adj.hamzaoui@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img className={styles.footerIcon} src={linkedin} alt="" />
          <a href="https://www.linkedin.com/in/ad-hamzaoui/">
            linkedin.com/ad-hamzaoui
          </a>
        </li>
        <li className={styles.link}>
          <img className={styles.footerIcon} src={github} alt="footerIcon" />
          <a href="https://github.com/AbdelDjalilH">github.com/AbdelDjalilH</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
