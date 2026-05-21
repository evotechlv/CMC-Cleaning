import Reveal from '../atoms/Reveal.jsx'
import PoemPhoto from '../atoms/PoemPhoto.jsx'
import PoemText from '../atoms/PoemText.jsx'
import poem from './PoemBlock.module.css'
import styles from './PoemBlockB.module.css'

export default function PoemBlockB() {
  return (
    <section className={poem.block}>
      <div className={`${poem.inner} ${styles.grid}`}>
        <Reveal className={styles.p1}>
          <PoemPhoto src="/uploads/photos/stove.jpg" alt="Cleaning ceramic stove with steam" />
        </Reveal>
        <Reveal className={styles.textB1} delay={1}>
          <PoemText>
            A clean space<br />
            isn't <em>just within</em><br />
            these walls.<br />
            <br />
            It is the <em>memory</em><br />
            of how it felt<br />
            the day you arrived.
          </PoemText>
        </Reveal>
        <Reveal className={styles.p2} delay={2}>
          <PoemPhoto
            src="/uploads/office-cleaning-disinfecting.jpg"
            alt="Office cleaning at work"
          />
        </Reveal>
        <Reveal className={styles.p3}>
          <PoemPhoto src="/uploads/photos/floor-mop.jpg" alt="Mopping floor" />
        </Reveal>
        <Reveal className={styles.p4} delay={2}>
          <PoemPhoto src="/uploads/photos/counter.jpg" alt="Cleaning kitchen counter" />
        </Reveal>
        <Reveal className={styles.textB2} delay={3}>
          <PoemText>
            We restore.<br />
            We <em>transform.</em><br />
            We give it back<br />
            to you, new.
          </PoemText>
        </Reveal>
      </div>
    </section>
  )
}
