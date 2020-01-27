import React from 'react';
import axios from 'axios'
export const LOGIN = 'LOGIN'
// export const LOGIN_CHECK = 'LOGIN_CHECK'
// export const DUPLICATE_CHECK = 'DUPLICATE_CHECK'

export const login = (formData,props) => (dispatch, getState) => {

    
    console.log('form data',formData)
    axios.post('http://localhost:8000/api/auth/login',formData).then(response => response.data)
    .then((data) => {

      // localStorage.setItem('token','test')

      console.log('login info',data);
        
      dispatch({
      
        type: LOGIN,
        payload: {
          login_info: data,
        }
      })
      
     })

    //  props.history.push('/login')

     localStorage.setItem('token','access_token')
    //  props.history.push('/custom/home')

     

   
  }

//   export const loginCheck = (formData) => (dispatch, getState) => {

//      axios.post('http://localhost:8000/api/loginTalha',formData).then(response => response.data)
//     .then((data) => {


//       if(data.token){
        
//         localStorage.setItem('token',data.token)
//         localStorage.setItem('username',data.user.name)
//         localStorage.setItem('user_id',data.user.id)
//         console.log('token set');
//       }else{
//         console.log('login response from userRegistrationAction',data);
//       }

      
        
//       dispatch({
      
//         type: LOGIN_CHECK,
//         payload: {
//           'login_check': data,
//         }
//       })

     
      
      
      
//      })

     
      
     
        
//   }


//   export const duplicateCheck = (value,callback) => (dispatch, getState) => {

    

//      axios.get('http://localhost:8000/api/duplicateCheck?email='+value).then(response => response.data)
//     .then(  (data) => {

     
      
//        dispatch({
      
//         type: DUPLICATE_CHECK,
//         payload: {
//           duplicate_check: data,
//         }
//       })


//       if (data ==='duplicate') {
//         callback('Email Should be unique');
//       } else {
//         callback();
//       }

     
      
//      })

    
      
// }