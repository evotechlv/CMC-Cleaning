import Reveal from '../atoms/Reveal.jsx'
import SectionHeading from '../atoms/SectionHeading.jsx'
import styles from './BigStatement.module.css'

export default function BigStatement() {
  return (
    <section className={styles.statement}>
      <Reveal>
        <SectionHeading tone="big">
          We don't just clean.<br />
          <em>We transform spaces.</em>
        </SectionHeading>
      </Reveal>
      <Reveal className={styles.sub} delay={2}>
        — Our promise, since day one
      </Reveal>
    </section>
  )
}
