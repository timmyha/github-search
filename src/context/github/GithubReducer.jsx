const githubReducer = (state, action) => {
    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                userData: action.payload
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                userData: [action.payload]
            }
        default:
            return state
    }
}

export default githubReducer