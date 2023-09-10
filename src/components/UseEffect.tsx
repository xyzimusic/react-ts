import React, {useEffect, useState} from 'react';
import {clear} from '@testing-library/user-event/dist/clear';

export default {
    title: 'useEffect demo'
}
export const UseEffect = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('Simple Example')

    useEffect(() => {
        console.log('useEffect')
        //сайд эффекты
        //запрос на сервер
        //работа с базой данных локальной индекс дб
        //обращение к документу документ гетелемент бай айди
        //документ тайтл  = "Юзер"
    }, [counter])

    return (
        <div>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fff</button>
        </div>
    );
};


export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('Simple Example')

    useEffect(() => {

        const interval = setInterval(() => {
            setCounter((state) => (state + 1))
        })

        return ()=>{
            clearInterval(interval)
        }
    }, [counter])


    return (
        <div>
            Hello, {counter} {fake}
        </div>
    );
};

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
       const timeout =  setTimeout(()=>{
            document.title = counter.toString()
        })

        return ()=>{
            clearTimeout(timeout)
        }
    }, [counter])


    return (
        <div>
            Hello, {counter} {fake}
        </div>
    );
};


export const ResetEffectExample = () => {

    let [counter, setCounter] = useState(1)

    console.log('ResetEffectExample')

    useEffect(() => {
        console.log('Effect occurred ResetEffectExample')

        return () => {
            console.log('reset effect')
        }
    }, [counter])


    const increase = () => {
        setCounter(++counter)
    }
    return <>
        Hello, counter ResetEffectExample: {counter}
        <button onClick={increase}>+</button>
    </>

}


export const KeysTrackerExample = () => {

    let [text, setText] = useState('')

    console.log('ResetEffectExample')

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.document.addEventListener('keypress', handler)
        return () => {
            // window.document.removeEventListener('keypress',handler )
        }
    }, [text])


    return <>
        Typed text: {text}
    </>

}