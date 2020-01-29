import { PROJECT_LIST } from '../../actions/ProjectAction/ProjectAction'
import { SAVE_PROJECT } from '../../actions/ProjectAction/ProjectAction'
import { PROJECT_MODAL_SHOW } from '../../actions/ProjectAction/ProjectAction'



const initialState = {
    project_list: {
        message:"project before dispatch",
        data:[]
    },
    project_modal_show:false
    
   

}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {

        case PROJECT_LIST:
            return Object.assign( {}, state, {
                project_list: action.payload
            })
            
        case SAVE_PROJECT:
            return Object.assign( {}, state, {
                project_list: action.payload
            }) 

        case PROJECT_MODAL_SHOW:
            return Object.assign( {}, state, {
                project_modal_show: action.payload
            }) 

        default:
    }

    return state
}


export default projectReducer