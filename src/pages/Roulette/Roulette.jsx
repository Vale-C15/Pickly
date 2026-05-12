import { useEffect, useState } from "react"

import Filters from "../../components/Filters/Filters"
import RoulettePicker from "../../components/RoulettePicker/RoulettePicker"

import { getActivities } from "../../utils/activityStorage"

import "./Roulette.css"

export default function Roulette() {
  const [activities, setActivities] = useState([])

  const [selectedCategory, setSelectedCategory] =
    useState("")

  const [selectedDuration, setSelectedDuration] =
    useState("")

  useEffect(() => {
    setActivities(getActivities())
  }, [])

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
    <div className="roulette-page">
      <div className="roulette-header">
        <h1 className="roulette-title">
          No sabes qué hacer?
        </h1>

        <p className="roulette-subtitle">
          Deja que Pickly decida por ti ✨
        </p>
      </div>

      <Filters
        selectedCategory={selectedCategory}
        selectedDuration={selectedDuration}
        onCategoryChange={setSelectedCategory}
        onDurationChange={setSelectedDuration}
      />

      <div className="roulette-options">
        {filteredActivities.map((activity) => (
          <div
            key={activity.id}
            className="roulette-option"
          >
            <p className="roulette-option-title">
              {activity.title}
            </p>
          </div>
        ))}
      </div>

      {filteredActivities.length > 0 ? (
        <RoulettePicker
          activities={filteredActivities}
        />
      ) : (
        <div className="card roulette-empty">
          No hay actividades disponibles 🎲
        </div>
      )}
    </div>
  )
}