import { useState } from "react"

import "./RoulettePicker.css"

export default function RoulettePicker({
  activities,
}) {
  const [isSpinning, setIsSpinning] =
    useState(false)

  const [selectedActivity, setSelectedActivity] =
    useState(null)

  const spinRoulette = () => {
    if (!activities.length || isSpinning) return

    setIsSpinning(true)

    let counter = 0

    const interval = setInterval(() => {
      const randomActivity =
        activities[
          Math.floor(
            Math.random() * activities.length
          )
        ]

      setSelectedActivity(randomActivity)

      counter++

      if (counter > 15) {
        clearInterval(interval)

        const finalActivity =
          activities[
            Math.floor(
              Math.random() * activities.length
            )
          ]

        setSelectedActivity(finalActivity)

        setIsSpinning(false)
      }
    }, 100)
  }

  return (
    <div className="roulette-container">
      <div className="roulette-card card">
        <p className="roulette-label">
          Tu próxima actividad
        </p>

        <h2
            className={`roulette-result ${
                isSpinning ? "spinning" : ""
            }`}
        >
          {selectedActivity
            ? selectedActivity.title
            : "🎲"}
        </h2>

        {selectedActivity && (
          <div className="roulette-info">
            <span>
              {selectedActivity.category}
            </span>

            <span>
              {selectedActivity.duration}
            </span>
          </div>
        )}
      </div>

      <button
        onClick={spinRoulette}
        disabled={isSpinning}
        className="primary-button"
      >
        {isSpinning
          ? "Eligiendo..."
          : "Girar ruleta"}
      </button>
    </div>
  )
}