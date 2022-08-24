import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signin from '../signIn/signin'
import Signup from '../signup/signup'
import Dashboard from '../dashboard/dashboard'

function Router1() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Signin/>}></Route>
                <Route exact path='/signup' element={<Signup/>}></Route>
                <Route exact path='/dashboard' element={<Dashboard/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Router1