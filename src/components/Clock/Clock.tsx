import React, {FC, useEffect, useState} from 'react';
import {DigitalClockView} from './DigitalClockView/DigitalClockView';
import {AnalogClockView} from './AnalogClockView/AnalogClockView';

type PropsType = {
    mode?: 'digigtal' | 'analog'
}

export const Clock: FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const idInterval = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1000)

        return () => {
            console.log(`cleanUp`)
            clearInterval(idInterval)
        }
    }, [])


    let view;
    switch (props.mode) {
        case 'analog': {
            view = <AnalogClockView date={date}></AnalogClockView>
            break;
        }
        case 'digigtal':
        default: {
            view = <DigitalClockView date={date}></DigitalClockView>
            break;
        }

    }

    return (
        <div>
            {view}
        </div>
    );
};


