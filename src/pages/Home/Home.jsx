import { useEffect, useState } from "react"
import "./Home.css"

export default function Home() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const savedActivities =
      JSON.parse(localStorage.getItem("activities")) || []

    setActivities(savedActivities)
  }, [])

  return (
    <div className="home-page">
      <h1 className="home-title">
        Pickly
      </h1>

      <p className="home-subtitle">
        Encuentra algo para hacer según tu tiempo.
      </p>

      <div className="activities-list">
        {activities.length === 0 ? (
          <div className="card empty-state">
            <p className="empty-text">
              No hay actividades todavía ✨
            </p>
          </div>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="card activity-card"
            >
              <div className="activity-header">
                <h2 className="activity-title">
                  {activity.title}
                </h2>

                <span className="activity-duration">
                  {activity.duration}
                </span>
              </div>

              <p className="activity-category">
                {activity.category}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}