import React, {useCallback, useMemo, useState} from 'react';


export const NewMessagesCounter = (props:any) =>{
    return <div>{props.count}</div>
}

export const UsersSecret = (props: {users:Array<string>}) =>{
    console.log('users rendering')
    return <div>{props.users.map((u,i)=>{
        return <div>{u}</div>
    })}</div>
}


const Users = React.memo(UsersSecret)

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





export const LikeUseCallback =() =>{
    console.log(`LikeUseCallback`)
    const [counter,setCounter] = useState(0)
    const [books,setBooks] = useState(['JS','RaEACT','REDUaX'])



    const addBook = () => {
        console.log('ckick')
        const newBooks = [...books,'ANGULAR ' + new Date().getTime()]
        setBooks(newBooks)
    }

    const memoizedAddBook = useMemo(()=>{
        return () => {
            console.log('ckick')
            const newBooks = [...books,'ANGULAR ' + new Date().getTime()]
            setBooks(newBooks)
        }
    },[books])

    const memoizedAddBook2 = useCallback(()=>{
        console.log('ckick')
        const newBooks = [...books,'ANGULAR ' + new Date().getTime()]
        setBooks(newBooks)
    },[books] )

    return(
        <>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>FFFF+</button>
            {counter}

            <Books books={ books} addBook = {memoizedAddBook2} ></Books>
        </>

    )
}

type BooksSecretType = {books:Array<string>,addBook:()=>void}

export const BooksSecret = (props: BooksSecretType) =>{
    console.log('books rendering')
    return <div>
        <button onClick={()=>props.addBook()}>click</button>
        {props.books.map((b,i)=>{
        return <div>{b}</div>
    })}</div>
}

const Books = React.memo(BooksSecret)