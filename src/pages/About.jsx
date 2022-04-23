import styled from 'styled-components';

const About = () => {
    return (
        <Content>
            <ContentDiv>
                <PageTitle>
                    GithubSearch
                </PageTitle>
                <PageContent>
                    <p>Easily search user profiles on Github, view
                    account information and recent repositories. <br /><br />
                    GithubSearch is created and maintained 
                    by <a href="https://github.com/timmyha/">@timmyha</a>.</p>

                </PageContent>
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

const PageTitle = styled.h1`
    display: flex;
    text-align: right;
    margin-left: -20px;
    text-decoration: underline #fc7686 3px;
`

const PageContent = styled.div`
    display: flex;
    font-size: 18px;
    max-width: 380px;
    text-align: justify;
    opacity: .5;
    margin-left: 20px;
`

export default About

