import { categoryStyles } from "../../data/categoryStyles"

import "./ActivityCard.css"

export default function ActivityCard({
  activity,
  onDelete,
  onToggle,
}) {
  const style =
    categoryStyles[activity.category]

  return (
    <div
      className="activity-card"
      style={{
        backgroundColor: style.color,
      }}
    >
      <div>
        <div className="activity-emoji">
          {style.emoji}
        </div>

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

      <div className="activity-footer">
        <span className="activity-duration">
          {activity.duration}
        </span>

        <div className="activity-actions">
          <button
            onClick={() =>
              onToggle(activity.id)
            }
            className="complete-button"
          >
            {activity.completed
              ? "Desmarcar"
              : "Completar"}
          </button>

          <button
            onClick={() =>
              onDelete(activity.id)
            }
            className="delete-button"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}