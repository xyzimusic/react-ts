import React, {useState} from 'react';


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

export const Example =() =>{

    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(['Dima','Bimo','Kino'])

    return(
        <>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>FFFF+</button>
            <NewMessagesCounter count={counter}></NewMessagesCounter>

            <Users users={users}></Users>
        </>

    )
}