import { useState } from "react"

const Counter = () => {
    const [number,setNumber]=useState("0")
    const [isShow,setIsShow]=useState(true)

    const clickHandler=()=>{
        setNumber(number=>number + 1)
    }
    const clickHandler2=()=>{
        setNumber(number=>number + 1)
        setNumber(number=>number + 1 )
        setNumber(number=>number + 1 )
        setNumber(number=>number + 1)
    }
    const stopHandler=()=>setNumber("-----")

    const showHandler=()=>setIsShow(true)
    const hideHandler=()=>setIsShow(false)
  return (
    <>
    <button onClick={showHandler}>Show</button>
    <button onClick={hideHandler}>Hide</button>
    {
        isShow && <div>
      <h1>{number}</h1>
      <button onClick={clickHandler}>Increase +</button>
      <button onClick={clickHandler2}>Increase 2</button>
      <button onClick={stopHandler}>Stop</button>
    </div>
    
    }
    </>
    
  )
}

export default Counter
