
import { useEffect, useState } from 'react' ;
import axios from 'axios' ;
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import TodoForm from '../forms/TodoForm' ;


const UpdateTodo = () => {
    const navigate = useNavigate() ;
    const { id } = useParams() ;
    const  [ oldTodo, setOldTodo ] = useState({}) ;
    const { state } = useLocation() ;

    useEffect(() => {
        if (!state) {
            axios.get(`http://localhost:5000/api/todo/${id}`)
            .then((res) => {
                console.log(res.data) ;
                setOldTodo(res.data) ;
            })
            .catch((err) => {
                console.log("Error from UPDATE", err)
            }) ;
        } else {
            setOldTodo(state) ;
        }
    }, [id, oldTodo, state]) ;

    const submitHandler = (todo, setErrors) => {
        axios.put(`http://localhost:5000/api/todo/${id}`, todo)
        .then((res) => {
            console.log(res.data) ;
            
            navigate('/') ;
        })
        .catch((err) => {
            setErrors(err.response.data.error.errors)
        })
    } ;

    return oldTodo ? (
        <div>
            <h3>Edit Todo</h3>
            <div>
                <TodoForm submitHandler={ submitHandler } buttonText={'Edit Pet'} oldTodo={ oldTodo } />
            </div>
        </div>
    ) : null ;
}

export default UpdateTodo ;