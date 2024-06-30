import mail from "../../../assets/mail.png";
import linkedin from "../../../assets/linkedin.png";
import github from "../../../assets/github.png";
import styles from "./Contact.module.css";
function Contact() {
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

export default Contact;
