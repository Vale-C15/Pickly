import "./ActivityCard.css"

export default function ActivityCard({
  activity,
  onDelete,
  onToggle,
}) {
  return (
    <div className="card activity-card">
      <div className="activity-top">
        <div>
          <h2
            className={`activity-title ${
              activity.completed
                ? "completed"
                : ""
            }`}
          >
            {activity.title}
          </h2>

          <p className="activity-category">
            {activity.category}
          </p>
        </div>

        <span className="activity-duration">
          {activity.duration}
        </span>
      </div>

      <div className="activity-actions">
        <button
          onClick={() => onToggle(activity.id)}
          className="complete-button"
        >
          {activity.completed
            ? "Desmarcar"
            : "Completar"}
        </button>

        <button
          onClick={() => onDelete(activity.id)}
          className="delete-button"
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}