import { EMAIL, LINKEDIN, GITHUB } from '../data/content.js'

export default function Cover() {
  return (
    <div className="cover" id="top">
      <div className="wrap">
        <p className="cover-note">Portfolio 2026<br /></p>
        <div className="env">
          <div className="env-back"></div>
          <div className="env-card">
            <strong>Let's contact!</strong>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn: shane-mendoza</a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub: roki-a</a>
          </div>
          <div className="env-front"></div>
        </div>
      </div>
    </div>
  )
}
