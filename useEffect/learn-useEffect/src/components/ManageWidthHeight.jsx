import { useState, useEffect} from 'react'

const ManageWidthHeight = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    function handleResize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

  return (
    <div>
      <h1>Window width: {width}px</h1>
      <h1>Window Height: {height}px</h1>
    </div>
  )
}

export default ManageWidthHeight
