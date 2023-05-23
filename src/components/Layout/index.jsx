import { useContext } from "react"
import { ThemeContect } from "../../App"

export default function Layout({ children }) {
   const [, setDark] = useContext(ThemeContect)

   const changeTheme = () => setDark(prev => !prev)
   return (
      <div>
         <nav>
            <button onClick={changeTheme}>change theme</button>
         </nav>
         {children}
         <footer>
            all right
         </footer>
      </div>
   )
}
