import { useEffect, useState } from "react"

import ActivityCard from "../../components/ActivityCard/ActivityCard"
import Filters from "../../components/Filters/Filters"

import {
  getActivities,
  deleteActivity,
  toggleActivityStatus,
} from "../../utils/activityStorage"

import "./Home.css"

export default function Home() {
  const [activities, setActivities] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedDuration, setSelectedDuration] = useState("")

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
  
  const filteredActivities = activities.filter(
    (activity) => {
      const matchesCategory =
        selectedCategory === "" ||
        activity.category === selectedCategory

      const matchesDuration =
        selectedDuration === "" ||
        activity.duration === selectedDuration

      return matchesCategory && matchesDuration
    }
  )

  return (
    <div className="home-page">
      <p className="home-greeting">
        Qué te gustaría hacer hoy? ✨
      </p>

      <h1 className="home-title">
        Pickly
      </h1>

      <p className="home-subtitle">
        Encuentra algo para hacer según tu tiempo.
      </p>

      <Filters
        selectedCategory={selectedCategory}
        selectedDuration={selectedDuration}
        onCategoryChange={setSelectedCategory}
        onDurationChange={setSelectedDuration}
      />

      <div className="activities-list">
        {filteredActivities.length === 0 ? (
          <div className="card empty-state">
            <p className="empty-text">
              Tu lista está vacía ✨
              Guarda ideas para esos momentos donde no sabes qué hacer.
            </p>
          </div>
        ) : (
          filteredActivities.map((activity) => (
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