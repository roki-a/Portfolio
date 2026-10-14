import { useState } from 'react'
import { filters, projects, GITHUB } from '../data/content.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  const [active, setActive] = useState('all')
  const visible = projects.filter((p) => active === 'all' || p.cats.includes(active))

  return (
    <section id="projects" aria-labelledby="projects-h">
      <h2 className="badge b-gold" id="projects-h">Projects</h2>
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map(([key, label]) => (
          <button
            key={key}
            className="chip"
            type="button"
            aria-pressed={active === key}
            onClick={() => setActive(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid" id="grid">
        {visible.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
      <p style={{ marginTop: '2rem' }}>
        <a className="go" href={GITHUB} target="_blank" rel="noopener noreferrer">See all repositories on GitHub</a>
      </p>
    </section>
  )
}
