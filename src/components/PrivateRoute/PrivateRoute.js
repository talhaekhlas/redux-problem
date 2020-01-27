import React from 'react';
import { Route,Redirect,withRouter } from "react-router-dom";
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {

    // const loginCheck = rest.user.login_check

    const checkLocalStorage = localStorage.getItem('token')
    // localStorage.removeItem('token')

    // console.log('goru hamaba hamba kore',checkLocalStorage)

    return (

      

      <Route
        {...rest}
        render={props =>
          checkLocalStorage ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/auth/login",
                state: { from: props.location }
              }}
            />

            // window.location.href = 'http://localhost:3000/auth/login'

      
          )
        }
      />
    );
  }


const mapStateToProps = state => ({
    user:state.userReducer,
    
    
})


export default withRouter(connect(mapStateToProps)(PrivateRoute))



