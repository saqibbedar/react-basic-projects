import { useState, createContext } from 'react'
import ComponentB from './ComponentB'

export const userContext = createContext()

const ComponentA = () => {

const [user] = useState("Saqib Bedar")

return (
    <>
    <h1>{`Hello, ${user}`}</h1>
    <userContext.Provider value={user}>
      <ComponentB user={user}/>
    </userContext.Provider>
    </>
  )
}

export default ComponentA
