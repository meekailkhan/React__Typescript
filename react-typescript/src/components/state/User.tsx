import {useContext} from 'react'
import { UserContext } from './UserContext'

function User() {
    const userContext = useContext(UserContext)
    function handleLogin(){
        if(userContext){
            userContext.setUser({
                name : 'meekail',
                email : 'meekail@gmail.com'
            })
        }

    }
    function handleLogout(){
        if(userContext){
            userContext.setUser(null)
        }
    }
  return (
    <div>
      <button onClick={()=> handleLogin()}>Login</button>
      <button onClick={()=> handleLogout()}>Logout</button>
      <h2>user name is {userContext?.user?.name}</h2>
      <h2>user email is {userContext?.user?.email}</h2>
    </div>
  )
}

export default User
