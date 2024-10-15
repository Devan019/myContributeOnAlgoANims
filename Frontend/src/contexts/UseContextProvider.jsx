import  { useRef, useState } from 'react'
import Context from './context';
function UseContextProvider({children}) {
    
    const [allData,setAllData] = useState({});
    const UserName = useRef("");
    return (
    <Context.Provider value={{allData,setAllData,UserName}}>
        {children}
    </Context.Provider>
  )
}

export default UseContextProvider
