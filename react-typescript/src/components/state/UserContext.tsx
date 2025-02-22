import { createContext,useState } from "react";

export type AuthenUser = {
    name : string
    email : string
}

type ContextProviderProps = {
    children : React.ReactNode
}

type UserContextType = {
    user : AuthenUser | null,
    setUser : React.Dispatch<React.SetStateAction<AuthenUser | null>>
}

export const  UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({children} : ContextProviderProps)=> {
    const [user,setUser] = useState<AuthenUser | null>(null);
    return <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
}