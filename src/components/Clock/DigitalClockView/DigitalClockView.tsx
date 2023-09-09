import React, {FC} from 'react';

export const get2DigitsString = (number: number) => number < 10 ? '0' + number : number
type DigitalClockViewType = {
    date: Date
}
export const DigitalClockView: FC<DigitalClockViewType> = ({date}) => {
    return (
        <>
            <span>
                    {get2DigitsString(date.getHours())}
            </span>:
            <span>
                    {get2DigitsString(date.getMinutes())}
            </span>:
            <span>
                    {get2DigitsString(date.getSeconds())}
            </span>
        </>
    )
}