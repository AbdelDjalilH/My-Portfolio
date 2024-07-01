import skills from "../../data/skills.js";
import history from "../../data/history.js";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div className={styles.skill} key={id}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li className={styles.historyItem} key={id}>
                <img
                  className={styles.companyImg}
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} logo`}
                />
                <div className={styles.itemdetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate}- ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experience.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default Experience;
