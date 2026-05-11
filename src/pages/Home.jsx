import { useEffect, useState } from "react"

export default function Home() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const savedActivities =
      JSON.parse(localStorage.getItem("activities")) || []

    setActivities(savedActivities)
  }, [])

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold">
        Pickly
      </h1>

      <p className="text-gray-600 mt-2">
        Encuentra algo para hacer según tu tiempo.
      </p>

      <div className="mt-8 grid gap-4">
        {activities.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl text-center">
            <p className="text-gray-500">
              No hay actividades todavía ✨
            </p>
          </div>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white p-5 rounded-3xl border border-[#ece7de]"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  {activity.title}
                </h2>

                <span className="text-sm text-gray-500">
                  {activity.duration}
                </span>
              </div>

              <p className="mt-2 text-gray-600">
                {activity.category}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}