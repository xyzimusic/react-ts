import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

const SelfControlledAccordion = (props: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <>
            <AccordionTitle setCollapsed={setCollapsed} collapsed={collapsed} title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
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