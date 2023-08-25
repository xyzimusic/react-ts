import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}
export const UseEffect = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('Simple Example')

    useEffect(()=>{
        console.log('useEffect')
        //сайд эффекты
        //запрос на сервер
        //работа с базой данных локальной индекс дб
        //обращение к документу документ гетелемент бай айди
        //документ тайтл  = "Юзер"
    },[counter])

    return (
        <div>
            Hello, {counter} {fake}
            <button onClick={()=>setFake(fake + 1)}>fff</button>
        </div>
    );
};

