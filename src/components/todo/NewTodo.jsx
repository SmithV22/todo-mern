
import React from 'react' ;
import axios from 'axios' ;
import TodoForm from '../forms/TodoForm' ;
import { useNavigate } from 'react-router-dom';

import './todo.css' ;

const NewTodo = () => {
    const navigate = useNavigate() ;
    
    const submitHandler = (todo, setErrors) => {
        axios.post('https://neiatodo.onrender.com/api/todo', todo)
        .then((res) => {
            console.log(res.data)
            navigate('/') ;
        })
        .catch((err) => {
            console.log('Errors from CREATE', err.response.data.error)
            setErrors(err.response.data.error.errors)
        })
    }
    return (
        <div>
            <h3 className='newTodo__heading'>Make A New Todo</h3>
            <TodoForm submitHandler={ submitHandler } buttonText={ 'Add Todo' }/>
        </div>
    )
}

export default NewTodo ;