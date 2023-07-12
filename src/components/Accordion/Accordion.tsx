import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed:(collapsed:boolean)=>void
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <>
            <AccordionTitle title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed} collapsed={props.collapsed}/>
            {!props.collapsed &&  <AccordionBody/>}
        </>
    )
};

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed:(collapsed:boolean)=>void
    collapsed: boolean
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={()=>{props.setAccordionCollapsed(!props.collapsed)}}>--{props.title}--</h3>
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

export default Accordion;