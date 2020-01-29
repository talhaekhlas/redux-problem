import axios from 'axios'
export const PROJECT_LIST = 'PROJECT_LIST'
export const PROJECT_MODAL_SHOW = 'PROJECT_MODAL_SHOW'
export const SAVE_PROJECT = 'SAVE_PROJECT'


export const projectList = () => async(dispatch, getState) => {

   
  const config = {
    headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
    };

   const bodyParameters = {
    'Content-Type': "application/json",
    'Accept': "application/json",
   }

  axios.get('http://localhost:8000/api/projects',config,bodyParameters).then(response => response.data)
  .then((data) => {

  
      
    dispatch({
    
      type: PROJECT_LIST,
      payload: {
        project_list: data,
      }
    })
    
   })


  }



  export const saveProject = (formData,props) => (dispatch, getState) => {

    
    // console.log('project form data',formData)

    const config = {
      headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
      };
  
     const bodyParameters = {
      'Content-Type': "application/json",
      'Accept': "application/json",
     }

    axios.post('http://localhost:8000/api/projects',formData,config,bodyParameters).then(response => response.data)
    .then((data) => {

    
        
      dispatch({
      
        type: SAVE_PROJECT,
        payload: {
          project_list: data,
        }
      })
      
     })
   
  }





  export const projectModalShow = () => async(dispatch, getState) => {

   
    const data = {
        project_modal_show:true
    };
    dispatch({
    
      type: PROJECT_MODAL_SHOW,
      payload: data,
      
    })
  
 
}