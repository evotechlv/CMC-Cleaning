import Reveal from '../atoms/Reveal.jsx'
import styles from './Manifesto.module.css'

export default function Manifesto() {
  return (
    <section className={styles.manifesto}>
      <Reveal as="p">
        A clean home is not just<br />
        what you can <span className={styles.em}>see.</span>
      </Reveal>
      <Reveal className={styles.divider} delay={1} />
      <Reveal as="p" delay={2}>
        It is the air you breathe,<br />
        the calm you feel,<br />
        the <span className={styles.em}>first-time feeling</span> when<br />
        you walk through the door.
      </Reveal>
    </section>
  )
}
