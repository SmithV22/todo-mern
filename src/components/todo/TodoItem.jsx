
import { useEffect, useState } from 'react' ;
import { useParams, useNavigate } from 'react-router-dom' ;
import axios from 'axios';
import { format } from 'date-fns' ;

import UpdateTodo from './UpdateTodo' ;
import './todo.css' ;

function TodoItem() {
    
    const [ todo, setTodo ] = useState({}) ;
    const navigate = useNavigate() ;

    const { id } = useParams() ;

    useEffect(() => {
        axios.get(`http://localhost:5000/api/todo/${id}`)
        .then((res) => {
            console.log(res.data) ;
            setTodo(res.data) ;
            
        })
        .catch((err) => {
            console.log("Error from DETAILS", err)
        })
    }, [id]) ;

    const deleteHandler = (id) => {
        axios
        .delete(`http://localhost:5000/api/todo/${id}`)
        .then((res) => {
            console.log(res) ;

            navigate('/') ;
        })
        .catch((err) => {
            console.log('Error Deleting Todo', err) ;
        }) ;
    } ;

    
    return (
        <div className='todoItem__container'>
            <div className='todoItem'>
                <div className='todoItem__details'>
                    <h3>Todo: </h3>
                    <h4>{ todo.title }</h4>
                    <p><span className="details">Due By: </span> { }</p>
                    <p><span className="details">Description: </span> { todo.description }</p>
                    <p><span className="details">Skills List: </span> { todo.important }</p>
                </div>
                <div className='todoItem__form'>
                    <UpdateTodo />
                </div>
            </div>
        </div>
    )
}


export default TodoItem ;