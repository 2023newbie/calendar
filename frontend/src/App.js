import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Leftbar from "./components/Leftbar"
import Rightbar from "./components/Rightbar"
import AddEvent from "./components/AddEvent"

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        <Leftbar />
        <AddEvent />
        <Outlet />
        <Rightbar />
      </main>
    </>
  )
}

export default App
