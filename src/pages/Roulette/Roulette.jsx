import { useEffect, useState } from "react"

import Filters from "../../components/Filters/Filters"
import RoulettePicker from "../../components/RoulettePicker/RoulettePicker"

import { getActivities } from "../../utils/activityStorage"

import { categoryStyles } from "../../data/categoryStyles"

import "./Roulette.css"

export default function Roulette() {
  const [activities, setActivities] = useState([])

  const [selectedActivity, setSelectedActivity] = useState(null)

  const [selectedCategory, setSelectedCategory] = useState("")

  const [selectedDuration, setSelectedDuration] = useState("")

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
            className={`roulette-option ${
              selectedActivity?.id === activity.id
                ? "selected-option"
                : ""
            }`}
            style={{
              backgroundColor:
                categoryStyles[activity.category]
                  ?.color,
            }}
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
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
        />
      ) : (
        <div className="card roulette-empty">
          Tu lista está vacía ✨
          Guarda ideas para esos momentos donde no sabes qué hacer.
        </div>
      )}
    </div>
  )
}