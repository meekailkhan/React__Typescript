
type TestOwnProps<E extends React.ElementType>  = {
    children : React.ReactNode
    size? : 'sm' | 'md' | 'xl'
    color? : 'primary' | 'secondry' |'random'
    as? : E

}

type TestProps<E extends React.ElementType> = TestOwnProps<E> & Omit<React.ComponentProps<E> , keyof TestOwnProps<E>>

const Test = <E extends React.ElementType = 'div'>({children,color,size,as}:TestProps<E>) => {
    const Component = as || 'div'
  return (
    <Component className={`class with ${color} ${size}`}>
      {children}
    </Component>
  )
}

export default Test
