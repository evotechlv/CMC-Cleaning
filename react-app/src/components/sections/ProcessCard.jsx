import Reveal from '../atoms/Reveal.jsx'
import styles from './Process.module.css'

export default function ProcessCard({ number, title, body, delay }) {
  return (
    <Reveal className={styles.card} delay={delay}>
      <div className={styles.num}>
        <em>{number}</em>
      </div>
      <h3 className={styles.h}>{title}</h3>
      <p className={styles.p}>{body}</p>
    </Reveal>
  )
}
