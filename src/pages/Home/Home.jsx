import { useEffect, useState } from "react"

import ActivityCard from "../../components/ActivityCard/ActivityCard"

import {
  getActivities,
  deleteActivity,
  toggleActivityStatus,
} from "../../utils/activityStorage"

import "./Home.css"

export default function Home() {
  const [activities, setActivities] = useState([])

  const loadActivities = () => {
    setActivities(getActivities())
  }

  useEffect(() => {
    loadActivities()
  }, [])

  const handleDelete = (id) => {
    deleteActivity(id)
    loadActivities()
  }

  const handleToggle = (id) => {
    toggleActivityStatus(id)
    loadActivities()
  }

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
            <ActivityCard
              key={activity.id}
              activity={activity}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          ))
        )}
      </div>
    </div>
  )
}