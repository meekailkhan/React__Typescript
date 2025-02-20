type containerProps = {
    styles? : React.CSSProperties
}

function Container(props:containerProps) {
  return (
    <div style={props.styles}>
      this is styling text
    </div>
  )
}

export default Container
