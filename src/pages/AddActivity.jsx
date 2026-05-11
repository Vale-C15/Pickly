import { useState } from "react"
import { categories, durations } from "../data/options"

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

    const savedActivities =
      JSON.parse(localStorage.getItem("activities")) || []

    localStorage.setItem(
      "activities",
      JSON.stringify([...savedActivities, newActivity])
    )

    setTitle("")

    alert("Actividad creada ✨")
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Nueva actividad
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-3xl border border-[#ece7de] space-y-5"
      >
        <div>
          <label className="block mb-2 font-medium">
            Nombre
          </label>

          <input
            type="text"
            placeholder="Ej: Dibujar, estudiar React..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Categoría
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300"
          >
            {categories.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Tiempo estimado
          </label>

          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300"
          >
            {durations.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button
          className="w-full bg-[#2f5249] text-white py-3 rounded-xl hover:opacity-90 transition"
        >
          Guardar actividad
        </button>
      </form>
    </div>
  )
}