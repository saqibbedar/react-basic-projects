import {useEffect, useState} from 'react'


const ComponentA = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("springgreen");

    // this will update on every render
    // useEffect(() => {
    //     document.title = `Count: ${count}`
    // })

    // this will update only on first render
    // useEffect(() => {
    //     console.log('rendered')
    // }, [])

    // when our component mounts + variable state get changed
    useEffect(()=>{
        document.title = `Count: ${count}`;
        document.body.style.backgroundColor = color;
    }, [count, color])

    function addCount(){
        setCount(c => c+1)
    }
    function subtractCount(){
        setCount(c => c-1)
    }
    function changeColor(){
        setColor(c => c === "springgreen" ? "tomato" : "springgreen")
    }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change Background Color </button>
    </div>
  )
}

export default ComponentA
