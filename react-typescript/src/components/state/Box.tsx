import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Box() {
    const theme = useContext(ThemeContext)
  return (
    <h1 style={{backgroundColor : theme.primary.main,color:theme.primary.text}}>
      Theme context
    </h1>
  )
}

export default Box
