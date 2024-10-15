import { Outlet } from "react-router-dom"
import UseContextProvider from "./contexts/UseContextProvider"
function App() {
  return (
      <UseContextProvider>
  <Outlet/>
  </UseContextProvider>
  )
}

export default App
