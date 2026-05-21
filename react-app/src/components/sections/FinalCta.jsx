import Reveal from '../atoms/Reveal.jsx'
import SectionHeading from '../atoms/SectionHeading.jsx'
import ArrowLink from '../atoms/ArrowLink.jsx'
import styles from './FinalCta.module.css'

export default function FinalCta() {
  return (
    <section className={styles.cta}>
      <Reveal>
        <SectionHeading tone="final">
          Shall we<br />
          <em>begin?</em>
        </SectionHeading>
      </Reveal>
      <Reveal className={styles.actions} delay={2}>
        <ArrowLink href="#contact">Request a Quote</ArrowLink>
        <ArrowLink href="https://wa.me/17027822493" external>
          Message on WhatsApp
        </ArrowLink>
      </Reveal>
    </section>
  )
}
