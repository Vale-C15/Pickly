import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import AddActivity from "./pages/AddActivity"
import Roulette from "./pages/Roulette"

export default function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddActivity />} />
          <Route path="/roulette" element={<Roulette />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}