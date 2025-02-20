import { useState } from "react"

function LoggedIn() {
    const [loggedIn,setLoggedIn] = useState(true)
    function handleLogIn() {
        setLoggedIn(true)
    }

    function handleLogOut(){
        setLoggedIn(false)
    }
  return (
    <div>
      <button onClick={()=> handleLogIn()}>Loggin</button>
      <button onClick={()=> handleLogOut()}>Loggout</button>

      <div>{loggedIn ? 'user logged in' : 'user loggedout'}</div>
    </div>
  )
}

export default LoggedIn
