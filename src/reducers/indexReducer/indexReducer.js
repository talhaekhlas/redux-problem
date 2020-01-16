import { INDEX_TASK_LIST } from '../../actions/IndexAction/IndexAction'



const initialState = {
    index_task_list: {
        message:"Initial Index task list",
        data:[]
    },
    
   

}

export const indexReducer = (state = initialState, action) => {
    switch (action.type) {

        case INDEX_TASK_LIST:
            return Object.assign( {}, state, {
                index_task_list: action.payload
            })

        
       
       
    }

    return state
}


export default indexReducer