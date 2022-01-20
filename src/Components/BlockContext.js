import React,{ createContext, useState} from "react"
import jsonData from './Data.json'
export const BlockContext = createContext();
export const BlockProvider = (props) =>{
    const [data, setData] = useState(jsonData)
   
    return (
        <BlockContext.Provider value={[data,setData]}>
            {props.children}
        </BlockContext.Provider>
    )
}