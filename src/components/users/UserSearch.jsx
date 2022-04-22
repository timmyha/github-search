import styled from 'styled-components'
import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alerts/AlertContext'

const UserSearch = () => {

    const [searchField, setSearchField] = useState('')

    const { userData, searchUsers, clearUsers } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)

    const handleSearchChange = (e) => {
        setSearchField(e.target.value)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        searchField.length > 1
            ? searchUsers(searchField)
            : setAlert('search error: try being more specific', 'error')

        setSearchField('')
    }

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <Search
                    onChange={handleSearchChange}
                    value={searchField}
                    placeholder="search Github" />

                <SearchButton>&nbsp;&gt;&nbsp;</SearchButton>
                {userData &&
                    <ClearButton onClick={clearUsers}>
                        Clear
                    </ClearButton>}


            </form>
        </div>
    )
}

const SearchButton = styled.button`
    background-color: #fc7686;
    color: white;
    border: none;
    padding: 5px;
    margin-left: 3px;
    border-radius: 3px 3px 3px 3px;
    transition: .1s;
    cursor: pointer;
        &:hover {
            opacity: .5;
        }
        &:active {
            opacity: .8;
        }`

const ClearButton = styled.button`
    background-color: #3d3433;
    color: white;
    border: none;
    padding: 5px;
    margin-left: 3px;
    border-radius: 3px;
    transition: .1s;
    cursor: pointer;
         &:hover {
            opacity: .5;
        }&:active {
            opacity: .8;
        }`

const Search = styled.input`
    background-color: transparent;
    color: inherit;
    font-size: 20px;
    font-family: Lato;
    font-weight: bold;
    text-align: center;
    caret-color: #fc7686;

    border: none;
    border-bottom: 3px solid #fc7686;
    outline: none;
    width: 300px;
    height: 20px;
    margin: auto;
    `

export default UserSearch