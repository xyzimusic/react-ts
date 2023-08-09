import React, {ButtonHTMLAttributes, DetailedHTMLProps, useState} from 'react';
import styled from 'styled-components'

type OnOffPropsType = {
    on: boolean
    setOnOfButton:()=>void
}

const MyOnOff = (props: OnOffPropsType) => {

    // let [onOfButton, setOnOfButton] = useState<string>(props.on ? '#179c20' : '#9c172a')

    // function onButtonHandler() {
    //     props.setOnOfButton()
    // }
    //
    // function offButtonHandler() {
    //     setOnOfButton('#9c172a')
    // }

    return (
        <div>
            <OnButton testProps={props.on ? '#179c20' : '#9c172a'} onClick={props.setOnOfButton}>On</OnButton>
            <OfButton testProps={props.on ? '#179c20' : '#9c172a'} onClick={props.setOnOfButton}>Of</OfButton>
            <Bulb color={props.on ? '#179c20' : '#9c172a'}></Bulb>

            {/*<OnButton color={onOfButton=='#179c20'?'#179c20':'#fafbf2'} onClick={onButtonHandler}>On</OnButton>*/}
            {/*<OfButton color={onOfButton == '#9c172a' ? '#9c172a' : '#fafbf2'} onClick={offButtonHandler}>Of</OfButton>*/}

        </div>
    );
};


type DefaultProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type BulbPropsType = DefaultProps & {
    testProps: string
}

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

export default MyOnOff;