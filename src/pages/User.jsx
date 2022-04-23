import RepoList from '../components/RepoList';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';
import styled from 'styled-components';
import { RiMapPin2Fill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai'
import { MdOutlineWebAsset } from 'react-icons/md'
import { BiGitRepoForked } from 'react-icons/bi'
import { BsFileEarmarkCode } from 'react-icons/bs'
import { FaUsers, FaUser, FaAddressCard } from 'react-icons/fa'

const User = () => {

    const params = useParams()
    const { getUser, user, getRepo, repos } = useContext(GithubContext)
    
    useEffect(() => {
        getUser(params.login)
        getRepo(params.login)
    }, [])

    const repoDisplay = user.public_repos === 1 ? 'repo' : 'repos'
    const gistDisplay = user.public_gists === 1 ? 'gist' : 'gists'

    return (

        <Container>
            <UserContainer>
                <ProfilePic src={user.avatar_url} />
                <InfoDiv>
                    <Names>
                        <DisplayName>{user.name} </DisplayName>
                        <UserName>{user.login}</UserName>
                    </Names>
                    { user.location &&
                    <Location>
                        <RiMapPin2Fill /> &nbsp;{user.location}</Location>}
                    { user.twitter_username &&
                    <TwitterLink>
                        <AiOutlineTwitter /> &nbsp;@{user.twitter_username}</TwitterLink>}
                    { user.html_url &&
                    <UrlLink>
                        <MdOutlineWebAsset />&nbsp;{user.html_url}</UrlLink>}
                </InfoDiv>
            </UserContainer>
            <StatsDiv>
                <FaUser size="30px" />
                    <StatsText>{user.following} following</StatsText>
                <FaUsers size="30px" /> 
                    <StatsText>{user.followers} followers</StatsText>
                <BiGitRepoForked size="30px" /> 
                    <StatsText>{user.public_repos} {repoDisplay} </StatsText>
                <BsFileEarmarkCode size="30px" /> 
                    <StatsText>{user.public_gists} {gistDisplay}</StatsText>
            </StatsDiv>
            <RepoList repos={repos} />
        </Container>

    )
}

const Container = styled.div`
display: flex;
margin: auto;
width: 80%;
margin-top: 30px;
max-width: 800px;
flex-direction: column;`

const UserContainer = styled.div`
display: flex;
flex-direction: row;
margin: auto;`

const ProfilePic = styled.img`
display: flex;
justify-content: center;
width: 130px;
height: 130px;
border-radius: 100%;
border: 1px ${props => props.theme.primaryText} dashed;`

const InfoDiv = styled.div`
display: flex;
max-width: 80%;
min-width: 80%;
height: 130px;
flex-direction: column;
font-family: Karla;
flex-direction: column;`

const Names = styled.div`
display: flex;
flex-direction: row;
    @media (max-width: 500px) {
        flex-direction: column;
    }`

const DisplayName = styled.h1`
display: flex;
font-size: 18px;
margin-top: 20px;
margin-left: 15px;
`

const UserName = styled.h3`
display: flex;
font-size: 18px;
margin-top: 20px;
font-style: italic;
margin-left: 5px;
opacity: .5;
@media (max-width: 500px) {
    margin-left: 20px;
    margin-top: 0px;
}`

const Location = styled.a`
margin-top: 10px;
display: flex;
margin-left: 15px;
font-size: 13px;
cursor: pointer;`

const TwitterLink = styled.a`
display: flex;
margin-left: 15px;
font-size: 13px;
cursor: pointer;`

const UrlLink = styled.a`
display: flex;
margin-left: 15px;
font-size: 13px;
font-style: italic;
cursor: pointer;
@media(max-width: 420px) {
    width: 150px;
}`

const StatsDiv = styled.div`
display: flex;
min-width: 80%;
max-width: 800px;
margin-top: 20px;
justify-content: space-between;
border: 1px dashed;
border-radius: 5px;
padding: 10px;
    @media (max-width: 420px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 50px);
        grid-gap: 10px;
    }
`

const StatsText = styled.div`
margin: auto;
margin-left: 10px;
padding: 3px 3px 3px 3px;
&:hover {
    color: #fc7686;
    cursor: pointer;
    transition: .3s;
}`


export default User