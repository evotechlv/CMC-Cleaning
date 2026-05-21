import Reveal from '../atoms/Reveal.jsx'
import styles from './Reviews.module.css'

export default function ReviewCard({ text, name, location, initial, avatarGradient, delay }) {
  return (
    <Reveal className={styles.review} delay={delay}>
      <div className={styles.quote}>"</div>
      <p className={styles.text}>{text}</p>
      <div className={styles.author}>
        <div className={styles.av} style={{ background: avatarGradient }}>
          {initial}
        </div>
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.loc}>{location}</div>
        </div>
      </div>
    </Reveal>
  )
}
