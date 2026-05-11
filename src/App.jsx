import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"

import Home from "./pages/Home/Home"
import AddActivity from "./pages/AddActivity/AddActivity"
import Roulette from "./pages/Roulette/Roulette"

export default function App() {
  return (
    <BrowserRouter>
      <main className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddActivity />} />
          <Route path="/roulette" element={<Roulette />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}