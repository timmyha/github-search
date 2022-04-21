import { useContext } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import UserCard from './UserCard'
import GithubContext from '../../context/github/GithubContext'

const UserResults = () => {

    const { userData } = useContext(GithubContext)

    console.log(userData)


    let userDisplayData = userData && userData.map(user => (
            <UserCard 
                key={user.login}
                userData={user}
                    />))


    return (
        <>
            <UserDisplay>
               {userData && userDisplayData}
            </UserDisplay>
        </>
    )
}

const UserDisplay = styled.div`
    font-size: 15px;
    margin: auto;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    grid-auto-rows: minmax(100px, auto);
    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        grid-auto-rows: minmax(100px, auto);
    }
    @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: minmax(100px, auto);
    }
    @media (min-width: 800px) {
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(100px, auto);
    }
    @media (min-width: 1000px) {
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: minmax(100px, auto);
    }
`

export default UserResults