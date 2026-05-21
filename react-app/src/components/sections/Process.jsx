import Reveal from '../atoms/Reveal.jsx'
import SectionEyebrow from '../atoms/SectionEyebrow.jsx'
import SectionHeading from '../atoms/SectionHeading.jsx'
import ProcessCard from './ProcessCard.jsx'
import styles from './Process.module.css'

const steps = [
  {
    number: '01',
    title: (<>Tell us about<br />your space</>),
    body: 'Share a few details about your home or office, and what you need cleaned.',
  },
  {
    number: '02',
    title: (<>Receive your<br />quiet estimate</>),
    body: 'We respond within hours with a clear, no-obligation quote.',
    delay: 2,
  },
  {
    number: '03',
    title: (<>We arrive<br />and transform</>),
    body: 'Our vetted team works carefully, thoroughly, and leaves no trace but a fresh, clean space.',
    delay: 4,
  },
]

export default function Process() {
  return (
    <section id="process" className={styles.process}>
      <div className={styles.head}>
        <Reveal>
          <SectionEyebrow>The Process</SectionEyebrow>
        </Reveal>
        <Reveal delay={1}>
          <SectionHeading>
            Three quiet steps<br />
            to a <em>cleaner space.</em>
          </SectionHeading>
        </Reveal>
      </div>

      <div className={styles.grid}>
        {steps.map((s) => (
          <ProcessCard key={s.number} {...s} />
        ))}
      </div>
    </section>
  )
}
