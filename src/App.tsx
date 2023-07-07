import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import MyOnOff from "./components/OnOff/MyOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import SelfControlledAccordion from './components/Accordion/SelfControlledAccordion';

function App() {
    console.log('App rendering')
    return (
        <div>

            <SelfControlledAccordion titleValue={'Menu'}/>
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            {/*<MyOnOff on={true}></MyOnOff>*/}
            <OnOff ></OnOff>
            <OnOff ></OnOff>
            <OnOff ></OnOff>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;