import { AiOutlineStop } from 'react-icons/ai'
import styled from 'styled-components';

const NotFound = () => {

    return (
        <Content>
            <ContentDiv>
                <Error>
                    <AiOutlineStop />
                    <FourOhFour>
                        404
                    </FourOhFour>
                </Error><br />
                    this page doesn't exist!
            </ContentDiv>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    width: 100vw;
    margin: auto;
    margin-top: 100px;
    font-size: 25px;
`
const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto
`

const Error = styled.h1`
    font-size: 100px;
    color: #fc7686;
    display: flex;
    font-family: Raleway;
    text-align: right;
`

const FourOhFour = styled.p`
color: #3d3433`

export default NotFound