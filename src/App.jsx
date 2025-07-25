import Portfolio from "./components/Portfolio"
import { Outlet } from "react-router-dom"


function App() {


  return (
    <>
      <Outlet />
      <Portfolio/>
    </>
  )
}

export default App
