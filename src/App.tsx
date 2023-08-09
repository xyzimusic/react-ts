import React, {ChangeEvent, useRef, useState} from 'react';
import './App.css';
import {RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import Select from './components/Select/Select';


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false)


    const callback = () => {
        setAccordionCollapsed(!accordionCollapsed)

        console.log('accordion clicked')
    }

    const onClick = (value: any) => {
        console.log(value)
    }

    const [value,setValue] = useState('2')
    return (
        <div className="App">
            {/*<Accordion onClick={onClick}*/}
            {/*           titleValue={'Menu'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={callback}*/}
            {/*           items={*/}
            {/*               [*/}
            {/*                   {title: 'Dima', value: 1},*/}
            {/*                   {title: 'Artem', value: 2},*/}
            {/*                   {title: 'Viktor', value: 3}*/}
            {/*               ]*/}
            {/*           }></Accordion>*/}

            <Select
                value={value}
                items={
                    [
                        {title: 'Dima', value: '1'},
                        {title: 'Artem', value: '2'},
                        {title: 'Viktor', value: '3'}
                    ]
                }
                onChange={(value:any) => {
                    setValue(value)
                }}
            />
        </div>
    );
}

function InputWithFixedValue() {
    console.log('Input')
    return <input value="It-incubator"></input>
}

function InputWithTrackValue() {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)
    const [value, setValue] = useState('')
    return <>
        <input value={value} onChange={onChangeHandler}></input>{value}
    </>
}

function ControlledInput() {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)
    const [value, setValue] = useState('')
    return <>
        <input value={value} onChange={onChangeHandler}></input>{value}
    </>
}


function ControlledCheckbox() {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.checked)
    const [value, setValue] = useState(true)
    return <>
        <input type={'checkbox'} onChange={onChangeHandler}></input>{value}
    </>
}

function ControlledSelected() {

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    const [value, setValue] = useState<string | undefined>('2')
    return <>
        <select value={value} onChange={onChangeHandler}>
            <option> none</option>
            <option value="1"> Kiev</option>
            <option value="2"> Moscow</option>
            <option value="3"> Minsk</option>
        </select>{value}
    </>
}


function InputGetValueByButtonPress() {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const el = inputRef.current as HTMLInputElement
    return <>
        <input ref={inputRef}></input>{value}
        <button onClick={() => {
            setValue(el.value)
        }}>save
        </button>
    </>
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;