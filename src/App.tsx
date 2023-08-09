import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {SelfControlledRating} from './components/Rating/SelfControlledRating';
import Accordion from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import MyOnOff from './components/OnOff/MyOnOff';


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>( false )

    console.log('App rendering')
    return (
        <div className='App'>

            {/*<Rating value={ratingValue} setRatingValue ={setRatingValue}></Rating>*/}
            {/*<SelfControlledRating></SelfControlledRating>*/}
            {/*<Accordion titleValue={'MENUU'}*/}
            {/*           collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}></Accordion>*/}
            {/*<OnOff></OnOff>*/}
            <MyOnOff on={on} setOnOfButton={()=>{setOn(!on)}}></MyOnOff>
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