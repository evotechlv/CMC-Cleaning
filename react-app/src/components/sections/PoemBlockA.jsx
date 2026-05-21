import Reveal from '../atoms/Reveal.jsx'
import PoemPhoto from '../atoms/PoemPhoto.jsx'
import PoemText from '../atoms/PoemText.jsx'
import poem from './PoemBlock.module.css'
import styles from './PoemBlockA.module.css'

/** Editorial photo + text intro block. */
export default function PoemBlockA() {
  return (
    <section className={poem.block}>
      <div className={`${poem.inner} ${styles.grid}`}>
        <Reveal className={styles.p1}>
          <PoemPhoto
            src="/uploads/man-doing-professional-home-cleaning-service.jpg"
            alt="Detail of professional cleaning"
          />
        </Reveal>
        <Reveal className={styles.textA} delay={1}>
          <PoemText>
            How far<br />
            does a <em>clean home</em><br />
            really reach?
          </PoemText>
        </Reveal>
        <Reveal className={styles.p2} delay={2}>
          <PoemPhoto src="/uploads/photos/kitchen-table.jpg" alt="Kitchen table cleaning" />
        </Reveal>
        <Reveal className={styles.p3} delay={3}>
          <PoemPhoto src="/uploads/photos/bathroom.jpg" alt="Bathroom cleaning detail" />
        </Reveal>
      </div>
    </section>
  )
}
