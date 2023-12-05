import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Leftbar from "./components/Leftbar"
import Rightbar from "./components/Rightbar"
import AddEvent from "./components/AddEvent"
import { useSelector } from "react-redux"

function App() {
  const {isOpen} = useSelector(state => state.modal)

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        <Leftbar />
        {isOpen && <AddEvent />}
        <Outlet />
        <Rightbar />
      </main>
    </>
  )
}

export default App
