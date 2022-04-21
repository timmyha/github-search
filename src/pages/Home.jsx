import styled from 'styled-components';
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

const Home = () => {

    return (
        <Content>
            <SearchDiv>
                <UserSearch />
            </SearchDiv>
                <UserResults />
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: auto;
    margin-top: 50px;
    font-size: 25px;
    margin-bottom: 30px;
`

const SearchDiv = styled.div`
    display:flex
    width: 100vw;
    color: inherit;
    border: none;
    margin: auto;`

export default Home