import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './Reducer';

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}


const SelfControlledAccordion  = (props: AccordionPropsType) => {

    const [state, dispatch] = useReducer(reducer, {collapsed:false})

    return (
        <>
            {/*<AccordionTitle setCollapsed={setCollapsed} collapsed={collapsed} title={props.titleValue}/>*/}
            <AccordionTitle setCollapsed={()=>{

                dispatch({type:TOGGLE_COLLAPSED})}} collapsed={state.collapsed} title={props.titleValue}/>
            {!state.collapsed && <AccordionBody/>}
        </>
    )
};

type AccordionTitlePropsType = {
    title: string
    setCollapsed:(collapsed:boolean)=>void
    collapsed:boolean
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={()=>{props.setCollapsed(!props.collapsed)}}>--{props.title}--</h3>
    )
};

const AccordionBody = () => {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
};

export default SelfControlledAccordion;