import { useState } from 'react'
import styles from './QuoteForm.module.css'

const services = [
  'House / Apartment Cleaning',
  'Commercial / Office Cleaning',
  'Deep Cleaning',
  'Move-In / Move-Out Cleaning',
  'Airbnb / Short-Term Rental',
  'Post-Construction Cleaning',
  'Window Cleaning',
  'Carpet & Upholstery Cleaning',
]

const cities = [
  'Las Vegas', 'Summerlin', 'Henderson', 'Green Valley',
  'Boulder City', 'Blue Diamond', 'Pahrump', 'Laughlin',
  'North Las Vegas', 'Other',
]

export default function QuoteForm() {
  const [done, setDone] = useState(false)
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    area: '',
    notes: '',
  })

  const update = (key) => (e) =>
    setValues((v) => ({ ...v, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // The original form simply showed the thank-you state. Wire to a real
    // backend (Formspree, email, etc.) here if/when needed.
    setDone(true)
  }

  return (
    <div className={styles.qform}>
      <div className={styles.h}>
        Request a <em>quote.</em>
      </div>
      <div className={styles.s}>We respond within hours.</div>

      {!done ? (
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.fg}>
              <label>First Name</label>
              <input
                type="text"
                placeholder="Maria"
                required
                value={values.firstName}
                onChange={update('firstName')}
              />
            </div>
            <div className={styles.fg}>
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Garcia"
                required
                value={values.lastName}
                onChange={update('lastName')}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.fg}>
              <label>Phone</label>
              <input
                type="tel"
                placeholder="(702) 000-0000"
                required
                value={values.phone}
                onChange={update('phone')}
              />
            </div>
            <div className={styles.fg}>
              <label>Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                value={values.email}
                onChange={update('email')}
              />
            </div>
          </div>

          <div className={styles.fg}>
            <label>Service</label>
            <select required value={values.service} onChange={update('service')}>
              <option value="">Select a service…</option>
              {services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className={styles.fg}>
            <label>Your Area</label>
            <select required value={values.area} onChange={update('area')}>
              <option value="">Select your city…</option>
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className={styles.fg}>
            <label>Anything Else</label>
            <textarea
              placeholder="Property size, date preference, special requests…"
              value={values.notes}
              onChange={update('notes')}
            />
          </div>

          <button type="submit" className={styles.submit}>
            Send Request <span>→</span>
          </button>
        </form>
      ) : (
        <div className={styles.done}>
          <div className={styles.doneMark}>✓</div>
          <h3 className={styles.doneH}>
            Thank <em>you.</em>
          </h3>
          <p className={styles.doneP}>
            We'll be in touch shortly.<br />
            For the fastest reply, WhatsApp us at (702) 782-2493
          </p>
        </div>
      )}
    </div>
  )
}
