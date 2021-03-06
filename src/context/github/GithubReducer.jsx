const githubReducer = (state, action) => {
    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                userData: action.payload
            }
        case 'GET_USER':
            return {
               ...state,
               user: action.payload 
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                userData: [action.payload]
            }
        case 'GET_REPO':
            return {
                ...state,
                repos: action.payload
            }
        default:
            return state
    }
}

export default githubReducer