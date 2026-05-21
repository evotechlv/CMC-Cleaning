import Reveal from '../atoms/Reveal.jsx'
import PoemPhoto from '../atoms/PoemPhoto.jsx'
import PoemText from '../atoms/PoemText.jsx'
import poem from './PoemBlock.module.css'
import styles from './PoemBlockC.module.css'

export default function PoemBlockC() {
  return (
    <section className={poem.block}>
      <div className={`${poem.inner} ${styles.grid}`}>
        <Reveal className={styles.photo}>
          <PoemPhoto src="/uploads/photos/tools.jpg" alt="Professional cleaning tools" />
        </Reveal>
        <Reveal className={styles.text} delay={2}>
          <PoemText>
            From the moment<br />
            we step inside,<br />
            we treat your space<br />
            <em>as our own.</em>
          </PoemText>
        </Reveal>
      </div>
    </section>
  )
}
