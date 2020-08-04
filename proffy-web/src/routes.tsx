import React from 'react'
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
import { Switch, Route, BrowserRouter } from 'react-router-dom'


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = '/' component = {Landing} exact/>
                <Route path = '/study' component = {TeacherList} />
                <Route path = '/give-class' component = {TeacherForm} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes