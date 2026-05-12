const STORAGE_KEY = "activities"

export const getActivities = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
}

export const saveActivities = (activities) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(activities)
  )
}

export const addActivity = (activity) => {
  const activities = getActivities()

  saveActivities([...activities, activity])
}

export const deleteActivity = (id) => {
  const activities = getActivities()

  const updatedActivities = activities.filter(
    (activity) => activity.id !== id
  )

  saveActivities(updatedActivities)
}

export const toggleActivityStatus = (id) => {
  const activities = getActivities()

  const updatedActivities = activities.map((activity) =>
    activity.id === id
      ? {
          ...activity,
          completed: !activity.completed,
        }
      : activity
  )

  saveActivities(updatedActivities)
}