import React, {ButtonHTMLAttributes, DetailedHTMLProps, useState} from 'react';
import styled from 'styled-components'

type OnOffPropsType = {
    on: boolean
}

const OnOff = (props: OnOffPropsType) => {

    let [onOfButton, setOnOfButton] = useState<string>(props.on ? '#179c20' : '#9c172a')

    function onButtonHandler() {
        setOnOfButton('#179c20')
    }

    function offButtonHandler() {
        setOnOfButton('#9c172a')
    }

    return (
        <div>
            {/*<OnButton color={onOfButton=='#179c20'?'#179c20':'#fafbf2'} onClick={onButtonHandler}>On</OnButton>*/}
            <OnButton testProps={onOfButton} onClick={onButtonHandler}>On</OnButton>
            <OfButton testProps={onOfButton} onClick={offButtonHandler}>Of</OfButton>
            {/*<OfButton color={onOfButton == '#9c172a' ? '#9c172a' : '#fafbf2'} onClick={offButtonHandler}>Of</OfButton>*/}
            <Bulb color={onOfButton}></Bulb>
        </div>
    );
};


type DefaultProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type BulbPropsType = DefaultProps & {
    testProps: string
}
// type BulbPropsType = Omit<DefaultProps, 'type'> & {
//     testProps: boolean
// }

// const OnButton = styled.button`
//   margin: 5px;
//   padding: 10px;
//   background-color: ${props => props.color};
// `
const OnButton = styled.button<BulbPropsType>`
  margin: 5px;
  padding: 10px;
  background-color: ${props => props.testProps ==='#179c20' ? '#179c20' : '#fafbf2'};
`

const OfButton = styled.button<BulbPropsType>`
  margin: 5px;
  padding: 10px;
  background-color: ${props => props.testProps  ==='#9c172a'? '#9c172a' : '#fafbf2'};
`

const Bulb = styled.button`
  margin-left: 10px;
  width: 15px;
  height: 15px;
  background-color: ${props => props.color};
  border-radius: 50%;
`

export default OnOff;