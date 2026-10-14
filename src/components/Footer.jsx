import { EMAIL, LINKEDIN, GITHUB } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="foot" id="contact">
      <div className="wrap">
        <h2>Let's work together</h2>
        <p>I'm open to internships in software development, data, AI/ML and UI/UX. Send me an email and I'll get back to you.</p>
        <div className="cta">
          <a className="btn" href={`mailto:${EMAIL}`}>Email me</a>
          <a className="btn alt" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn alt" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className="copy">&copy; {new Date().getFullYear()} Shane S. Mendoza</p>
      </div>
    </footer>
  )
}
