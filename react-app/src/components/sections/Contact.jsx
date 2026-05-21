import Reveal from '../atoms/Reveal.jsx'
import SectionEyebrow from '../atoms/SectionEyebrow.jsx'
import SectionHeading from '../atoms/SectionHeading.jsx'
import ArrowLink from '../atoms/ArrowLink.jsx'
import WhatsAppIcon from '../atoms/WhatsAppIcon.jsx'
import QuoteForm from './QuoteForm.jsx'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <Reveal>
            <SectionEyebrow>Contact</SectionEyebrow>
          </Reveal>
          <Reveal delay={1}>
            <SectionHeading className={styles.h}>
              Let's <em>talk.</em>
            </SectionHeading>
          </Reveal>
          <Reveal as="p" delay={2} className={styles.lede}>
            Fill in the form and we'll respond within hours with a free, no-obligation quote.
          </Reveal>

          <div className={styles.infoList}>
            <Reveal className={styles.cinfo} delay={3}>
              <div className={styles.label}>Phone</div>
              <div className={styles.body}>
                <a href="tel:+17027822493">(702) 782-2493</a>
                <small>Mon–Sat · 7am – 5pm · Fastest via WhatsApp</small>
              </div>
            </Reveal>
            <Reveal className={styles.cinfo} delay={4}>
              <div className={styles.label}>Hours</div>
              <div className={styles.body}>
                <span>Monday – Saturday</span>
                <small>7am – 5pm · Different time? Just call.</small>
              </div>
            </Reveal>
            <Reveal className={styles.cinfo} delay={5}>
              <div className={styles.label}>Area</div>
              <div className={styles.body}>
                <span>Las Vegas &amp; surrounding Nevada</span>
                <small>Summerlin, Henderson, Boulder City, Pahrump, Laughlin &amp; more</small>
              </div>
            </Reveal>
          </div>

          <Reveal delay={6}>
            <ArrowLink
              href="https://wa.me/17027822493"
              external
              icon={<WhatsAppIcon />}
            >
              Message on WhatsApp
            </ArrowLink>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  )
}
