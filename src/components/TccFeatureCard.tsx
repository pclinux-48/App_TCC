interface TccFeatureCardProps {
  categoryLabel: string
  title: string
  description: string
  details: string[]
  isHighlighted?: boolean
  alertMessage?: string
  showDetails?: boolean
}

export function TccFeatureCard({
  categoryLabel,
  title,
  description,
  details,
  isHighlighted = false,
  alertMessage,
  showDetails = true,
}: TccFeatureCardProps) {
  return (
    <article className="card h-100 border-0 shadow-sm project-card">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
          <span className="badge rounded-pill text-bg-primary">{categoryLabel}</span>
          {isHighlighted && <span className="badge text-bg-warning">Destaque</span>}
        </div>

        <h3 className="h5">{title}</h3>
        <p className="text-secondary mb-3">{description}</p>

        {alertMessage && <div className="alert alert-info py-2 px-3 small mb-3">{alertMessage}</div>}

        {showDetails ? (
          <ul className="ps-3 mb-0">
            {details.map((detail) => (
              <li key={detail} className="small text-secondary">
                {detail}
              </li>
            ))}
          </ul>
        ) : (
          <p className="small text-secondary mb-0">
            Mais detalhes deste módulo ainda serão definidos nas próximas etapas do TCC.
          </p>
        )}
      </div>
    </article>
  )
}
