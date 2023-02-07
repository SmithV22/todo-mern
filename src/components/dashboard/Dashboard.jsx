
import React, { useEffect, useState } from 'react' ;
import { useNavigate, Link } from 'react-router-dom' ;
import axios from 'axios' ;
import Table from 'react-bootstrap/Table' ;

import './dashboard.css' ;
import NewTodo from '../todo/NewTodo' ;


const Dashboard = () => {
    const navigate = useNavigate() ;
    const [ todos, setTodos ] = useState([])

    useEffect(() => {
        axios.get('https://neiatodo.onrender.com/api/todo')
        .then((res) => {
            setTodos(res.data)
        })
        .catch((err) => {
            console.log('ERROR from GET ALL') ;
        })
    }, [todos]) ;

    const sortByDate = [...todos].sort((a, b) =>
    a.dueBy > b.dueBy ? 1 : -1,
    );

    const deleteHandler = (id) => {
        axios
        .delete(`https://neiatodo.onrender.com/api/todo/${id}`)
        .then((res) => {
            console.log(res) ;

            navigate('/') ;
        })
        .catch((err) => {
            console.log('Error Deleting Pet', err) ;
        }) ;
    } ;


    return (
        <div className='dash__container'>
            <div className='dash__heading'>
                <h1>Here Are Your Todo's </h1>
            </div>
            <div className='dash__table-form'>
                <div className='dash__table'>
                <h3> Todo List </h3>
                    <Table striped bordered hover className='dash__table-head'>
                        <thead className='dash__table-bg'>
                            <tr>
                                <th>Title</th>
                                <th>Important</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='dash__table-bg'>
                        { todos.length > 0 && sortByDate.map((todo) => (
                            <tr className="table-secondary" key={ todo._id }>
                                <td> { todo.title } </td>
                                <td>{ todo.important }</td>
                                <td>
                                    <Link to={`/${todo._id}`} state={todo} className="link-text" >Details | </Link>
                                    <button id= {todo._id }className="link-text" onClick={() => deleteHandler(todo._id)}> Done!</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <div>
                    <NewTodo />
                </div>
            </div>
        </div>
    )
}

export default Dashboard ;