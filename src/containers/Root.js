import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from '../configureStore'



const store = configureStore()

const Home = () =>{
    return <h2>Home</h2>;
  }

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>

        <Router>

           <Home/>
           
        </Router>
       
        
      </Provider>
    )
  }
}