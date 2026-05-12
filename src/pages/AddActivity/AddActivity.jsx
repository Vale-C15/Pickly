import "./AddActivity.css"
import { useState } from "react"
import { categories, durations } from "../../data/options"
import { addActivity } from "../../utils/activityStorage"

export default function AddActivity() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState(categories[0])
  const [duration, setDuration] = useState(durations[0])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newActivity = {
      id: crypto.randomUUID(),
      title,
      category,
      duration,
      completed: false,
    }

    addActivity(newActivity)

    setTitle("")

    alert("Actividad creada ✨")
  }

  return (
    <div className="add-page">
      <h1 className="add-title">
        Qué quieres guardar para después?
      </h1>

      <form
        onSubmit={handleSubmit}
        className="card add-form"
      >
        <div className="form-group">
          <label className="form-label">
            Nombre
          </label>

          <input
            type="text"
            placeholder="Ej: Dibujar, estudiar React..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Categoría
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select-field"
          >
            {categories.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">
            Tiempo estimado
          </label>

          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="select-field"
          >
            {durations.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button className="primary-button">
          Guardar actividad
        </button>
      </form>
    </div>
  )
}