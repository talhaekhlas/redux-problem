import { INDEX_TASK_LIST } from '../../actions/IndexAction/IndexAction'



const initialState = {
    index_task_list: {
        message:"Before dispatch",
        data:[]
    },
    
   

}

const indexReducer = (state = initialState, action) => {
    switch (action.type) {

        case INDEX_TASK_LIST:
            return Object.assign( {}, state, {
                index_task_list: action.payload
            })
        default:
       
    }

    return state
}


export default indexReducer