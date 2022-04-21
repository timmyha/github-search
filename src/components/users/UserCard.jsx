import styled from 'styled-components';

const UserCard = ( {userData} ) => {

    return (
        <Main className='card-main'>
           <ViewProfile className="view-profile">view profile</ViewProfile>
           <Images>
        <Avatar className='card-avatar' src={userData.avatar_url} />
        <Card style={{"backgroundImage":`url(${userData.avatar_url})`}} />  
        </Images>
        <UserName>{userData.login}</UserName>
        </Main>
    )
}

const ViewProfile = styled.a`
    position:absolute;
    color: white;
    margin-left: 60px;
    margin-top: 70px;
    z-index: 10000;
    cursor: pointer;
`

const Images = styled.div`
    transition: .5s;
    &: hover {
    filter: drop-shadow(0px 10px 10px black) grayscale(100%) contrast(30%)
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
    font-size: 1.3em;
    font-family: Raleway;
    font-weight: 900;
    padding: 5px;
    border-radius: 6px;
    margin: auto;
    margin-top: -35px;
    color: #fc7686;
    filter: drop-shadow(0px 10px 10px black);
    z-index: 4;
    `

export default UserCard