
import { useEffect, useState } from 'react' ;
import Form from 'react-bootstrap/Form' ;

import './todoForm.css' ;

const TodoForm = (props) => {
    const [ errors, setErrors ] = useState({}) ;
    const { oldTodo } = props ;
    const [ todo, setTodo ] = useState(
        props.oldTodo || {
        title: '',
        description: '',
        dueBy: '',
        important: '',
    }) ;

    useEffect(()=> {
        if (props.oldTodo) {
            setTodo(props.oldTodo) ;
        }
    }, [props.oldTodo]) ;

    const submitHandler = (e) => {
        e.preventDefault() ;
        props.submitHandler(todo, setErrors) ;
    } ;

    const changeHandler = (e) => {
        setTodo({...todo, [ e.target.name ]: e.target.value}) ;
        
    } ;

    return (
            <div className="container">
                <div className="todo__form-container">
                    <Form onSubmit={submitHandler} className="todoForm">
                        <Form.Group className="mb-3">
                            { errors.title && <p className="error">{ errors.title.message }</p> }
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" value={todo.title} onChange={changeHandler} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            { errors.important && <p className="error">{ errors.important.message }</p> }
                            <Form.Label>Important</Form.Label>
                            <Form.Select type="text" name="important" value={todo.important} onChange={changeHandler}>
                                <option value="#">Please Choose One</option>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            { errors.description && <p className="error">{ errors.description.message }</p> }
                            <Form.Label>Description (Optional)</Form.Label>
                            <Form.Control type="text" name="description" value={todo.description} onChange={changeHandler} />
                        </Form.Group>
                        <button className='form__btn' type="submit">  
                            {props.buttonText}
                        </button>
                    </Form>
                </div>
            </div>
    )
}

export default TodoForm ;

