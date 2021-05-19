import { useState } from 'react';

const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState(initialState) // 10

    const increment = () => {
        setCounter( prevCount => prevCount + 1 );
    }
    

    const decrement = () => {
        setCounter( prevCount => prevCount - 1 );
    }

    const reset =  () => {
        setCounter(  initialState );
    }
    
    return {
        counter,
        increment,
        decrement,
        reset
    }
    
}

export default useCounter
