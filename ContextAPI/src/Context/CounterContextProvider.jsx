import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterContextProvider = (props) =>{

    const [count, setCount] = useState(0);
    return(
        <>
        <CounterContext.Provider
        //this value is accessible by all the components inside contextProvider
        value = {{count, setCount}}
        > 
           { props.children  }
        </CounterContext.Provider>
        </>
    )
}