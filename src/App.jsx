import { createContext, useState } from "react"
import Home from "./pages/Home"
import Layout from "./components/Layout"

export const ThemeContect = createContext()
export const UserContect = createContext()

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  return (
    <ThemeContect.Provider value={[isDarkTheme, setIsDarkTheme]}>
      <Layout>
        <Home />
      </Layout>
    </ThemeContect.Provider>
  )
}



export default App
