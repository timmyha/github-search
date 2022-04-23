import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa'
import { BsFillCloudMoonFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
import theme from 'styled-theming';

const Navbar = ({ toggleDarkMode, darkMode }) => {

    return (
        <>
            <Nav>
                <DarkModeToggler>
                    <BsFillCloudMoonFill onClick={toggleDarkMode} />
                </DarkModeToggler>
                <NavLogo>
                    <Link style={{
                        "textDecoration": "none",
                        "color": "#fcf2e5"
                    }}
                        to='/'>
                        <FaGithub style={{ "color": "#fc7686" }} />
                        <b style={{"fontFamily":"Raleway"}}>Github</b>
                        <span 
                        style={{ "color": "#fc7686", "fontFamily":"Raleway" }}>
                            Search
                        </span>
                    </Link>
                </NavLogo>
                <NavLinks>
                    <Link
                        style={{
                            "textDecoration": "none",
                            "color": "#fcf2e5"
                        }}
                        to='/'>
                        <LinksButton>
                            <b>home</b>
                        </LinksButton>
                    </Link>
                    <Link
                        style={{
                            "textDecoration": "none",
                            "color": "#fcf2e5"
                        }}
                        to='/about'>
                        <LinksButton>
                            <b>about</b>
                        </LinksButton>
                    </Link>
                </NavLinks>
            </Nav>
        </>
    )
}

const togglerColor = theme('mode', {
    light: '#fcf2e5',
    dark: '#fc7686',
});

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 80px;
    font-size: 20px;
    color: #fcf2e5;
    background-color: #3d3433;
    user-select: none;
    @media (max-width: 420px) {
        flex-direction: column;
        height: 200px;  
    }
    filter: drop-shadow(0 0 0.5rem #3d3433);
    `;

const DarkModeToggler = styled.div`
    display: flex;
    margin-left: 50px;
    cursor: pointer;
    color: ${togglerColor};
    &:hover {
        transition: .3s;
        color: #fc7686;
        }
    }
    @media (max-width: 420px) {
        margin-top: 10px;
        margin-bottom: -30px;
        margin-left: 0px;
    }
    `;


const NavLogo = styled.div`
    display: flex;
    font-family: Karla;
    margin-left: 50px;
    cursor: pointer;
    @media (max-width: 420px) {
        margin-bottom: -20px;
        margin-left: 0px;
    }
    `;

const NavLinks = styled.div`
    display: flex;
    flex-direction: row;
    list-style: none;
    font-size: 15px;
    margin-right: 10px;
    @media (max-width: 420px) {
        flex-direction: column;
        margin-top: -20px;
    }
    `;

const LinksButton = styled.button`
    display: flex;
    margin: 0px 0px 0px 0px;
    background-color: transparent;
    color: #fcf2e5;
    border: 0px;
    padding: 10px;
    margin-right: 5px;
    align-items: center;
    transition: .4s;
    border-radius: 3px;
    &:hover {
        color: #504847;
        background-color: #fc7686;
        align-items: center;
        height: 100%;
        cursor: pointer;
        transition:.3s;
        text-decoration: none;
        border-radius: 3px;
    }
    @media (max-width: 400px) {
        margin-right: 0px;
        margin-bottom: 10px;
        margin-top: -20px;
        font-size: 20px;
    }
`;

export default Navbar