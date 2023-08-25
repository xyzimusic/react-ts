import React, {useCallback, useMemo, useState} from 'react';

export default {
    title:'useState demo'
}


function generateData(){
    console.log('generate Data')
    return 3424234234
}

export const Example1 = () => {

    const changer = (state:number) => state+1

    const initValue = useMemo(generateData,[])
    console.log('Example')
    const [counter,setCounter] = useState(generateData) //


    return <>

        <button onClick={()=>setCounter(changer)}>+</button>
        {counter}
    </>
}