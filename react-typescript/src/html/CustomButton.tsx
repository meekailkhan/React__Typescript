type CustomButtonProps = {
    variante : 'primary' | 'secondry'
    children : string
} & Omit <React.ComponentProps<'button'>,'children'>

function CustomButton({variante,children} : CustomButtonProps) {
  return (
    <button className={`class-with-${variante}`}>{children}</button>
  )
}

export default CustomButton
