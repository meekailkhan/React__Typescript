type inputProps = {
    value : string
    handleChange : (event:React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props : inputProps) {
    function handleInputChange(event:React.ChangeEvent<HTMLInputElement>){
        console.log(event)
    }
  return (
    <div>
      <input type="text"  value={props.value} onChange={props.handleChange} />
    </div>
  )
}

export default Input
