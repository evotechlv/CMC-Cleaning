import Reveal from '../atoms/Reveal.jsx'
import SectionHeading from '../atoms/SectionHeading.jsx'
import ArrowLink from '../atoms/ArrowLink.jsx'
import styles from './Areas.module.css'

const areas = [
  'Las Vegas', 'Summerlin', 'Henderson', 'Green Valley', 'Boulder City',
  'Blue Diamond', 'Pahrump', 'Laughlin', 'North Las Vegas', 'Enterprise',
  'Spring Valley', 'Paradise', 'Whitney',
]

export default function Areas() {
  return (
    <section id="areas" className={styles.areas}>
      <Reveal>
        <SectionHeading tone="areas">
          We come to <em>you.</em>
        </SectionHeading>
      </Reveal>
      <Reveal as="p" delay={1} className={styles.lede}>
        Based in Las Vegas, we cover the entire valley and beyond.
      </Reveal>
      <Reveal className={styles.list} delay={2}>
        {areas.map((a) => (
          <span key={a}>{a}</span>
        ))}
      </Reveal>
      <Reveal delay={3}>
        <ArrowLink href="#contact" tone="light">
          Check My Area
        </ArrowLink>
      </Reveal>
    </section>
  )
}
