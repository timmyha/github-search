import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'

const User = () => {
    const params = useParams()
    const {getUser, user} = useContext(GithubContext)

    useEffect(() => {
        getUser(params.login)
    }, [])


    return <div> {user.bio}</div>
}

export default User