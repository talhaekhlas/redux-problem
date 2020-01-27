import { LOGIN } from '../../actions/LoginAction/LoginAction'
// import { LOGIN_CHECK } from '../../actions/UserRegistration/UserRegistrationAction'
// import { DUPLICATE_CHECK } from '../../actions/UserRegistration/UserRegistrationAction'


// import { USER_LIST } from '../../actions/UserRegistration/UserListAction'

const initialState = {
    login_info: {
        message:'before login',
        data:[]

    },
    // login_check:'no',
    // duplicate_check:'no',
    // user_list:{
    //     message:'initial message',
    //     data:[]
    // }

}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return Object.assign( {}, state, {
                login_info: action.payload
            })

        default:

        // case LOGIN_CHECK:
        //     return Object.assign( {}, state, {
        //         login_check: action.payload.login_check
        //     })

        // case DUPLICATE_CHECK:
        //     return Object.assign( {}, state, {
        //         duplicate_check: action.payload.duplicate_check
        //     })

        // case USER_LIST:
        //     return Object.assign( {}, state, {
        //         user_list: action.payload
        //     })
    }

    return state
}



export default loginReducer