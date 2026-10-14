import { aboutParagraphs, facts } from '../data/content.js'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-h">
      <h2 className="badge b-red" id="about-h">About me</h2>
      <div className="about">
        <div>
          {aboutParagraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <ul className="facts">
          {facts.map(([label, text]) => (
            <li key={label}><b>{label}</b>{text}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
