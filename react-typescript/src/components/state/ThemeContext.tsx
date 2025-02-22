import {createContext} from 'react'
import { theme } from './theme'


type ContextProviderProps = {
    children : React.ReactNode
}

type themType = typeof theme

export const ThemeContext = createContext<themType>(theme)

function ThemeContextProvider({children}: ContextProviderProps) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider
