import React, {useEffect, useState} from 'react';
import {ItemType} from '../Accordion/Accordion';
import styles from './Select.module.css'
import {Simulate} from 'react-dom/test-utils';
import select = Simulate.select;


type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}
const Select = (props: SelectPropsType) => {


    const [active, setActive] = useState(true)
    const [hoveredElementValue, sethoveredElementValue] = useState(props.value)


    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const showItems = () => {
        setActive(!active)
        console.log('меняюсь')
        console.log(active)
    }

    const clickItem = (tid: any) => {
        props.onChange(tid)
        showItems()
    }


    useEffect(() => {
        sethoveredElementValue(props.value)
    }, [props.value])
    const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break;
                    }
                }

                if (!selectedItem) {
                    props.onChange(props.items[0].value)
                    break;
                }
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

        console.log('fsdf')
    }

    return (
        <>
            <select>
                <option value="1">Minsk</option>
                <option value="2">Moscow</option>
                <option value="3">Kiev</option>
            </select>


            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <div>
                    <span className={styles.main} onClick={showItems}>{selectedItem && selectedItem.title}</span>

                    {active &&
                        <div className={styles.items}>
                            {
                                props.items.map(i =>
                                    <div
                                        onMouseEnter={() => {
                                            sethoveredElementValue(i.value)
                                        }}
                                        className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                                        key={i.value}
                                        onClick={() => {
                                            clickItem(i.value)
                                        }}
                                    >
                                        {i.title}
                                    </div>)
                            }
                        </div>
                    }
                </div>

            </div>
        </>
    );
};

export default Select;