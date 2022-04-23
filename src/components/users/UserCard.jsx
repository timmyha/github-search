import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserCard = ({ userData }) => {

    return (
        <Link to={`/users/${userData.login}`}>
        <Main className='card-main'>
            <ViewProfile className="view-profile">view profile</ViewProfile>
            <Images>
                <Avatar 
                    className='card-avatar' 
                    src={userData.avatar_url} />
                <Card style={{ "backgroundImage": `url(${userData.avatar_url})` }} />
            </Images>
            <UserName />
            <UserNameText>{userData.login}</UserNameText>
        </Main>
        </Link>
    )
}

const ViewProfile = styled.div`
    position:absolute;
    background-color: #fc7686;
    color: white;
    border-radius: 20px;
    padding: 10px;
    margin-left: 50px;
    margin-top: 60px;
    z-index: 10000;
    cursor: pointer;
    filter: drop-shadow(0px 10px 10px black)
`

const Images = styled.div`
    transition: .5s;
    &: hover {
    }
 `

const Main = styled.div`
    display: flex;
    flex-direction: column;
    &:hover {
        transition: .3s;
        transform: translateY(-3px);
        cursor: pointer;
`

const Card = styled.div`
    display: flex;
    width: 200px;
    height: 179px;
    border-radius: 10px;
    background-color: #3d3433;
    color: #fc7686;
    filter: drop-shadow(0px 10px 10px black) grayscale(100%);
    transition: 1s;
`

const Avatar = styled.img`
    position: absolute;
    width: 110px;
    height: 110px;
    margin-top: 20px;
    margin-left: 45px;
    border-radius: 100%;
    background-size: 300px;
    color: white;
    filter: drop-shadow(0px 10px 10px black);
    z-index: 1;
    cursor: pointer;
    `

const UserName = styled.div`
    display: flex;
    margin: auto;
    background-color: black;
    width: 200px;
    height: 35px;
    border-radius: 0 0 10px 10px;
    opacity: .6;
    margin-top: -35px;
    z-index: 4;
    &:hover {
        filter; none;
    }
    `
const UserNameText = styled.div`
position: absolute;
display: flex;
color: #fc7686;
font-size: 1.3em;
font-family: Raleway;
font-weight: 900;
margin-top: 150px;
margin-left: 10px;
align-content: center;
z-index: 10000000`

export default UserCard