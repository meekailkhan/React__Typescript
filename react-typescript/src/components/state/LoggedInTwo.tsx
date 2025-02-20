import {useState} from 'react'

type AuthUser = {
    name : string
    email : string
}

function LoggedInTwo() {
    const [user,setUser] = useState<AuthUser | null>(null)
    function handleLogin(){
        setUser({
            name : 'meekail',
            email : 'meekail@gmail.com'
        })
    }
    function handleLogout(){
        setUser(null)
    }
    
  return (
    <div>
      <button onClick={()=> handleLogin()}>Loggin</button>
      <button onClick={()=> handleLogout()}>Loggout</button>
      <h2>user name is {user?.name}</h2>
      <h2>user email is {user?.email}</h2>
    </div>
  )
}

export default LoggedInTwo
