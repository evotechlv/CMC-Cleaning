import Reveal from '../atoms/Reveal.jsx'
import styles from './Services.module.css'

/** One row in the services list. */
export default function ServiceRow({ number, name, description }) {
  return (
    <Reveal className={styles.row}>
      <div className={styles.num}>
        <em>{number}</em>
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.desc}>{description}</div>
      <div className={styles.arrow}>↗</div>
    </Reveal>
  )
}
