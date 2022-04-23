import styled from 'styled-components'
import RepoList from './RepoList'
import { CgGitFork } from 'react-icons/cg'
import { GoIssueOpened } from 'react-icons/go'
import { GrSwift } from 'react-icons/gr'
import { TiDocumentText } from 'react-icons/ti'
import { AiFillStar, AiFillEye } from 'react-icons/ai'
import { SiJavascript, SiHtml5, SiPython,
        SiLua, SiJava, SiTypescript, SiGo,
        SiCplusplus, SiRuby, SiPhp, SiCsharp,
        SiC, SiShell, SiScala, SiRust, SiKotlin,
        SiDart, SiSwift} from 'react-icons/si'

const RepoItem = ( {repo} ) => {

    const repoLangSwitch = (lang) => {
        switch(lang) {
        case 'JavaScript' : return <SiJavascript size="20px" />
        case 'HTML' : return <SiHtml5 size="20px" />
        case 'Python' : return <SiPython size="20px" />
        case 'Lua' : return <SiLua size="20px" />
        case 'Java' : return <SiJava size="20px" />
        case 'Typescript' : return <SiTypescript size="20px" />
        case 'Go' : return <SiGo size="20px" />
        case 'C++' : return <SiCplusplus size="20px" />
        case 'Ruby' : return <SiRuby size="20px" />
        case 'PHP' : return <SiPhp size="20px" />
        case 'C#' : return <SiCsharp size="20px" />
        case 'C' : return <SiC size="20px" />
        case 'Shell' : return <SiShell size="20px" />
        case 'Scala' : return <SiScala size="20px" />
        case 'Rust' : return <SiRust size="20px" />
        case 'Kotlin' : return <SiKotlin size="20px" />
        case 'Dart' : return <SiDart size="20px" />
        case 'Swift' : return <GrSwift size="20px" />
        default: lang
        }
    }

    console.log(repo)

    return (
    <RepoCard>
        <a href={repo.html_url}>
        <CardTop>
            <RepoName>
            {repo.name}
            </RepoName>
            <RepoStats>
                <CgGitFork 
                    color="#fc7686" /> 
                    {repo.forks}&nbsp; 
                <GoIssueOpened 
                    color="#fc7686" />
                    &nbsp;{repo.open_issues}&nbsp;
                <AiFillStar 
                    color="#fc7686" />
                    &nbsp;{repo.stargazers_count}&nbsp;
                <AiFillEye 
                    color="#fc7686" />
                    &nbsp;{repo.watchers_count}&nbsp;
            </RepoStats>
        </CardTop>
        <CardBottom>
            <RepoDesc>
                {repo.description === null ? `No Description` : repo.description}
            </RepoDesc>
            <RepoLang>{repoLangSwitch(repo.language)}</RepoLang>
        </CardBottom>
        </a>
    </RepoCard>
    )
}

const RepoCard = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px dashed;
`

const CardTop = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px dashed;
`

const RepoName = styled.h2`
    display: flex;
    font-size: 22px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    @media (max-width: 428px) {
        font-size: 100%;
        width: 50%;
    }
    `

const RepoStats = styled.div`
    display: flex;
    font-size: 25px;
    margin-right: 10px;
    margin-top: 10px;
    align-self: right;
    @media (max-width: 428px) {
        font-size: 100%;
        
    }
    `
const CardBottom = styled.div`
    display: flex;
    width: 100%;
    height: 100%
    justify-content: space-between;
`
const RepoLang = styled.div`
    display: flex;
    font-size: 14px;
    width: 5%;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 5px;`

const RepoDesc = styled.div`
    display: flex;
    font-size: 14px;
    width: 90%;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    font-style: italic`

export default RepoItem