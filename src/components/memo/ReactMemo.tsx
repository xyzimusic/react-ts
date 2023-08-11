import React, {useMemo, useState} from 'react';


export const NewMessagesCounter = (props:any) =>{
    return <div>{props.count}</div>
}

export const UsersSecter = (props: {users:Array<string>}) =>{
    console.log('users rendering')
    return <div>{props.users.map((u,i)=>{
        return <div>{u}</div>
    })}</div>
}


const Users = React.memo(UsersSecter)

export const ExampleHelpsToReactMemo =() =>{
    console.log(`HelpForReactMemo`)
    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(['Dima','Bimo','Kino'])


    const newArray = useMemo(()=>{
      return   users.filter(u=>u.indexOf('a')>-1)
    },[users])
    return(
        <>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>FFFF+</button>
            {counter}

            <Users users={ newArray}></Users>
        </>

    )
}