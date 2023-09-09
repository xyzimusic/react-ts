import React, {FC, useEffect, useState} from 'react';

type PropsType = {}

const get2DigitsString = (number:number)=> number < 10 ? '0' + number : number
export const Clock: FC<PropsType> = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const idInterval = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1000)

        return ()=>{
            console.log(`cleanUp`)
            clearInterval(idInterval)
        }
    }, [])

    const secondsString = get2DigitsString(date.getSeconds())
    const minutesString = get2DigitsString(date.getMinutes())
    const hoursString = get2DigitsString(date.getHours())

    return (
        <div>
            <span>
                {hoursString}
            </span>
            :
            <span>
                {minutesString}
            </span>
            :
            <span>
                {secondsString}
            </span>
        </div>
    );
};
