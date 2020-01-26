import { PROJECT_LIST } from '../../actions/ProjectAction/ProjectAction'



const initialState = {
    project_list: {
        message:"project before dispatch",
        data:[]
    },
    
   

}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {

        case PROJECT_LIST:
            return Object.assign( {}, state, {
                project_list: action.payload
            })

        
       
       
    }

    return state
}


export default projectReducer