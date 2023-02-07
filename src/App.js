
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' ;
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css' ;
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar' ;
import Dashboard from './components/dashboard/Dashboard' ;
import Todo from './components/todo/TodoItem' ;

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <div>
            <Header />
            <Navbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/:id' element={<Todo />} />
            </Routes>
          </div>
        </Router>
      <ToastContainer />
    </>
    </div>
  );
}

export default App;
