## useContext()

useContext() is a react hook that allows us to share values between multiple levels of components without passing props through each level

#### PROVIDER COMPONENT

1. import {createContext} from 'react';
2. export const MyContext = createContext();
3. <MyContext.Provider value={value}>
   <child>
   </MyContext.Provider>
