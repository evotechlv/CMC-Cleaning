import Reveal from '../atoms/Reveal.jsx'
import PoemPhoto from '../atoms/PoemPhoto.jsx'
import PoemText from '../atoms/PoemText.jsx'
import poem from './PoemBlock.module.css'
import styles from './PoemBlockD.module.css'

const columns = [
  {
    delay: undefined,
    src: '/uploads/photos/sofa.jpg',
    alt: 'Sofa cleaning',
    text: (
      <>
        Apartments<br />
        and <em>family homes,</em><br />
        cleaned with care.
      </>
    ),
  },
  {
    delay: 2,
    src: '/uploads/photos/office-desk.jpg',
    alt: 'Office desk cleaning',
    text: (
      <>
        Offices<br />
        and <em>commercial spaces,</em><br />
        a quiet professionalism.
      </>
    ),
  },
  {
    delay: 4,
    src: '/uploads/photos/carpet-vacuum.jpg',
    alt: 'Carpet vacuum cleaning',
    text: (
      <>
        Airbnbs<br />
        and <em>turnover work,</em><br />
        five-star ready.
      </>
    ),
  },
]

export default function PoemBlockD() {
  return (
    <section className={poem.block}>
      <div className={`${poem.inner} ${styles.grid}`}>
        {columns.map((col, i) => (
          <Reveal key={i} className={styles.col} delay={col.delay}>
            <div className={styles.photo}>
              <PoemPhoto src={col.src} alt={col.alt} />
            </div>
            <PoemText>{col.text}</PoemText>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
