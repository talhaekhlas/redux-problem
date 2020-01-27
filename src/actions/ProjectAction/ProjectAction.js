
export const PROJECT_LIST = 'PROJECT_LIST'

export const PROJECT_MODAL_SHOW = 'PROJECT_MODAL_SHOW'


export const projectList = () => async(dispatch, getState) => {

   
      const data = {
          message:'project after dispatch',
          data:[
              {'name':'List One','id':1,'project_id':1},
              {'name':'List Two','id':2,'project_id':1},
              {'name':'List Three','id':3,'project_id':1},
              {'name':'List Four','id':4,'project_id':1},
              {'name':'List Five','id':5,'project_id':1},
              {'name':'List Six','id':6,'project_id':1},
            ]
      };
      dispatch({
      
        type: PROJECT_LIST,
        payload: data,
        
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