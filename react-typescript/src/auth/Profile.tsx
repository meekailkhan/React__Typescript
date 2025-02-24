import React from 'react'

export type ProfileProps = {
    name : string
}

function Profile({name}:ProfileProps) {
  return (
    <div>
      Welcome {name}
    </div>
  )
}

export default Profile
