import { categories, durations } from "../../data/options"

import "./Filters.css"

export default function Filters({
  selectedCategory,
  selectedDuration,
  onCategoryChange,
  onDurationChange,
}) {
  return (
    <div className="filters-container">
      <select
        value={selectedCategory}
        onChange={(e) =>
          onCategoryChange(e.target.value)
        }
        className="select-field"
      >
        <option value="">
          Todas las categorías
        </option>

        {categories.map((category) => (
          <option key={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        value={selectedDuration}
        onChange={(e) =>
          onDurationChange(e.target.value)
        }
        className="select-field"
      >
        <option value="">
          Todos los tiempos
        </option>

        {durations.map((duration) => (
          <option key={duration}>
            {duration}
          </option>
        ))}
      </select>
    </div>
  )
}