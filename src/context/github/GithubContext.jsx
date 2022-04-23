import { createContext, useReducer, useEffect } from 'react';
import githubReducer from './GithubReducer'
import axios from 'axios';

const GithubContext = createContext()

export const GithubProvider = ({children}) => {
    const initialState = {
        userData: [],
        user: {},
        repos: []
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
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

      const getRepo = login => {
        axios.get(
                `https://api.github.com/users/${login}/repos`
            )
            .then(res => {
        dispatch({
          type: `GET_REPO`,
          payload: res.data
        })
      })
      };
    

    return <GithubContext.Provider 
                value={{ 
                    userData: state.userData.items, 
                    user: state.user,
                    repos: state.repos,
                    searchUsers,
                    clearUsers,
                    getUser,
                    getRepo,
                    }}>
                    {children}
            </GithubContext.Provider>
}

export default GithubContext