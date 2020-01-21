import React, { Component } from 'react'
// import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from '../configureStore'


import { createBrowserHistory } from "history";
import {Router,Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth/Auth.jsx";
import AuthLayoutCustom from "layouts/Auth/AuthLayoutCustom";
import AdminLayout from "layouts/Admin/Admin.jsx";
import RTLLayout from "layouts/RTL/RTL.jsx";

import AdminLayoutCustom from "layouts/Admin/AdminLayoutCustom";



const store = configureStore()
const hist = createBrowserHistory();

// const Home = () =>{
//     return <h2>Home</h2>;
//   }

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>

        <Router history={hist}>

        <Switch>

          {/* <Route path="/home" render={props => <Home {...props} />} /> */}
          <Route path="/auth" render={props => <AuthLayoutCustom {...props} />} />
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          {/* <Route path="/rtl" render={props => <RTLLayout {...props} />} /> */}
          <Route path="/custom" render={props => <AdminLayoutCustom {...props} />} />
          {/* <Redirect from="/" to="/custom/home" /> */}
          <Redirect from="/" to="/auth/login" />
         </Switch>
           
        </Router>
        
        
      </Provider>
    )
  }
}