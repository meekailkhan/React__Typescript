type ListProps = {
    items : string[]
    onClick : (value : string) => void
}

function List({items,onClick} : ListProps) {
  return (
    <div>
      <h2>List Of Items</h2>
      {items.map((item,index)=>{
        return (
            <div key={index} onClick={() => onClick(item)}>{item}</div>
        )
      })}
    </div>
  )
}

export default List
