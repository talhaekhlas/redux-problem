
export const INDEX_TASK_LIST = 'INDEX_TASK_LIST'



export const todoList = () => async(dispatch, getState) => {

   
      const data = {
          message:'after dispatch Index task list',
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
      
        type: INDEX_TASK_LIST,
        payload: data,
        
      })
    
   
  }