import Reveal from '../atoms/Reveal.jsx'
import SectionEyebrow from '../atoms/SectionEyebrow.jsx'
import SectionHeading from '../atoms/SectionHeading.jsx'
import ServiceRow from './ServiceRow.jsx'
import styles from './Services.module.css'

const services = [
  {
    number: '01',
    name: (<>House &amp; <em>apartment</em></>),
    description: 'Regular and one-time residential cleans that leave your home spotless and fresh.',
  },
  {
    number: '02',
    name: (<>Commercial &amp; <em>office</em></>),
    description: 'Professional cleaning for offices, buildings, warehouses, and corporate spaces.',
  },
  {
    number: '03',
    name: (<>Deep <em>cleaning</em></>),
    description: 'A top-to-bottom transformation that reaches every corner of your space.',
  },
  {
    number: '04',
    name: (<>Move-in / <em>move-out</em></>),
    description: 'Start fresh or leave without stress — meeting and exceeding landlord standards.',
  },
  {
    number: '05',
    name: (<>Airbnb <em>turnover</em></>),
    description: 'Fast, reliable turnover cleaning for hosts who want five-star reviews with every guest.',
  },
  {
    number: '06',
    name: (<>Post-<em>construction</em></>),
    description: 'Dust, debris, and residue eliminated — your newly built space restored to perfection.',
  },
  {
    number: '07',
    name: (<>Window <em>cleaning</em></>),
    description: 'Crystal-clear windows inside and out — streak-free in the Nevada sunshine.',
  },
  {
    number: '08',
    name: (<>Carpet &amp; <em>upholstery</em></>),
    description: 'Deep cleaning that removes stains, allergens, and odors at the root.',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.head}>
          <Reveal>
            <SectionEyebrow>Our Services</SectionEyebrow>
          </Reveal>
          <Reveal delay={1}>
            <SectionHeading>
              Eight crafted ways<br />
              to <em>care for your space.</em>
            </SectionHeading>
          </Reveal>
          <Reveal as="p" delay={2} className={styles.lede}>
            Comprehensive cleaning for every kind of space — from a one-bedroom apartment to an
            entire corporate building.
          </Reveal>
        </div>

        <div className={styles.list}>
          {services.map((s) => (
            <ServiceRow key={s.number} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
