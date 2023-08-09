import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed:boolean
    onChange:()=>void
    items:ItemType[]
    onClick:(value:any)=>void
}

export type ItemType = {
    title:string
    value:any
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed &&  <AccordionBody items={props.items} onClick={props.onClick}/>}
        </>
    )
};

type AccordionTitlePropsType = {
    title: string
    onChange:()=>void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onChange}>--{props.title}--</h3>
    )
};

type AccordionBodyPropsType = {
    items:ItemType[]
    onClick:(value:any)=>void
}
const AccordionBody = (props:AccordionBodyPropsType) => {
    console.log('AccordionBody rendering')
    return (
        <ul >

            {props.items.map((el,index)=><li onClick={()=>{props.onClick(el.value)}} key={index}>{el.title}</li>)}

        </ul>
    )
};

export default Accordion;