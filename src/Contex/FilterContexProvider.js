import React, { useState } from 'react';
export const MinContext =React.createContext()
export const MaxContext=React.createContext()

const FilterContexProvider = ({children}) => {
    const[min,setMin]=useState()
    const[max,setMax]=useState()
    return (
        <div>
            <MinContext.Provider value={{min,setMin}}>
                <MaxContext.Provider value={{max,setMax}}>
                    {children}
                </MaxContext.Provider>
            </MinContext.Provider>
          
        </div>
    );
};

export default FilterContexProvider;