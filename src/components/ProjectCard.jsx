export default function ProjectCard({ project }) {
  const { title, kind, body, tags, href, className } = project
  return (
    <article className={`note${className ? ` ${className}` : ''}`}>
      <p className="kind">{kind}</p>
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="tags">
        {tags.map((t) => <span className="tag" key={t}>{t}</span>)}
      </div>
      {href && (
        <a className="go" href={href} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      )}
    </article>
  )
}
