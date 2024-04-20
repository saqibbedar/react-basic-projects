import { useContext } from 'react'
import {userContext} from './ComponentA'

const ComponentC = () => {
    const user = useContext(userContext);

  return (
    <div>
      <h1>{`Good bye, ${user}`}</h1>
    </div>
  )
}

export default ComponentC
