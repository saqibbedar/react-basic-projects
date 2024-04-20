import {useContext} from 'react';
import { userContext } from './ComponentA'

const ComponentB = () => {
  const user = useContext(userContext);
  return (
    <div>
      <h1 style={{color: 'red'}}>{`Hello, ${user}`}</h1>
    </div>
  )
}

export default ComponentB
