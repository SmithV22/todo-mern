
import { useEffect, useState } from 'react' ;
import { useParams } from 'react-router-dom' ;
import axios from 'axios';

import UpdateTodo from './UpdateTodo' ;
import './todo.css' ;

function TodoItem() {
    
    const [ todo, setTodo ] = useState({}) ;
    
    const { id } = useParams() ;

    useEffect(() => {
        axios.get(`https://neiatodo.onrender.com/api/todo/${id}`)
        .then((res) => {
            console.log(res.data) ;
            setTodo(res.data) ;
            
        })
        .catch((err) => {
            console.log("Error from DETAILS", err)
        })
    }, [id]) ;

    return (
        <div className='todoItem__container'>
            <div className='todoItem'>
                <div className='todoItem__details'>
                    <h3>Todo: </h3>
                    <h4>{ todo.title }</h4>
                    <p><span className="details">Description: </span> { todo.description }</p>
                    <p><span className="details">Important: </span> { todo.important }</p>
                </div>
                <div className='todoItem__form'>
                    <UpdateTodo />
                </div>
            </div>
        </div>
    )
}


export default TodoItem ;