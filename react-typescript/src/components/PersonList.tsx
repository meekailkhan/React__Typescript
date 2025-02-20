type personListProp = {
    names : {
        first : string
        last : string
    }[]
}

function PersonList(props:personListProp) {
  return (
    <div>
      {props.names.map((name,index) => {
            return <div key={index}>{name.first} {name.last}</div>
      })}
    </div>
  )
}

export default PersonList
