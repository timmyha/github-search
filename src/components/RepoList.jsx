import RepoItem from "./RepoItem"
import styled from 'styled-components'

const RepoList = ({ repos }) => {

    const repoItems = repos.map(repo => {
        return <RepoItem
                    key={repo.id}
                    repo={repo}
                />
    })

    return (
        <RepoListDiv>
            {repoItems}
        </RepoListDiv>
    )
}

const RepoListDiv = styled.div`
    display: flex;
    flex-direction: column;  
    width: 100%; 
    margin: auto;
    margin-top: 30px
    `

export default RepoList