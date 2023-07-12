import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {SelfControlledRating} from './components/Rating/SelfControlledRating';
import Accordion from './components/Accordion/Accordion';


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    console.log('App rendering')
    return (
        <div className='App'>

            <Rating value={ratingValue} setRatingValue ={setRatingValue}></Rating>
            <SelfControlledRating></SelfControlledRating>
            <Accordion titleValue={'MENUU'} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}></Accordion>
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