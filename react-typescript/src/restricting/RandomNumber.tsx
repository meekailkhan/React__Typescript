type RandomNumberType = {
  value : number
}

type isPossitive = RandomNumberType & {
  isPossitive : boolean
  isNegative? : never
  isZero? : never
}

type isNegative = RandomNumberType & {
  isNegative : boolean
  isPossitive : never
  isZero : never
}

type isZero = RandomNumberType & {
  isZero : boolean
  isPossitive : never
  isNegative : never
}

type RandomNumberProps = isPossitive | isNegative | isZero

function RandomNumber({value,isPossitive,isNegative,isZero} : RandomNumberProps) {
  return (
    <div>
      {value} is {isPossitive && 'possitive'} {isNegative && 'negative'}  {isZero && 'zero'}
    </div>
  )
}

export default RandomNumber
