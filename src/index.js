import React from 'react'
import ReactDOM from 'react-dom'
import Admin from './containers/Admin'
import Customer from './containers/Customer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar'



// top level component
const AppContainer = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<Customer/>} />
                <Route path='/admin/*' element={<Admin/>} /> 
            </Routes>
        </BrowserRouter>
    )
}



// render will only be in this file
ReactDOM.render(<AppContainer/>, document.querySelector('#root'))