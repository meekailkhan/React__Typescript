type HorizontalPossition = 'left' | 'center' | 'right'
type VerticalPossition = 'top' | 'center' | 'bottom' 

type ToastProps = {
    position : Exclude<`${HorizontalPossition}-${VerticalPossition}`,'center-center'> | 'center'
}

function Toast({position}:ToastProps) {
  return (
    <div>
      {position}
    </div>
  )
}

export default Toast
