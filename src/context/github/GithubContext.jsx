import { createContext, useReducer, useEffect } from 'react';
import githubReducer from './GithubReducer'
import axios from 'axios';

const GithubContext = createContext()

export const GithubProvider = ({children}) => {
    const initialState = {
        userData: [],
        user: {}
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    console.log(state)

    const searchUsers = searchField => {
        axios.get(
                `https://api.github.com/search/users?q=${searchField}`
            )
            .then(res => {
        dispatch({
          type: `GET_USERS`,
          payload: res.data
        })})
      };

    const clearUsers = () => {
        dispatch({
            type: `CLEAR_USERS`
        })
    }

    const getUser = login => {
        axios.get(
                `https://api.github.com/users/${login}`
            )
            .then(res => {
        dispatch({
          type: `GET_USER`,
          payload: res.data
        })})
      };
    

    return <GithubContext.Provider 
                value={{ 
                    userData: state.userData.items, 
                    user: state.user,
                    searchUsers,
                    clearUsers,
                    getUser
                    }}>
                    {children}
            </GithubContext.Provider>
}

export default GithubContext