type ListProps<T> = {
    items : T[]
    onClick : (value : T) => void
}

function List<T extends number | string >({items,onClick} : ListProps<T>) {
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
