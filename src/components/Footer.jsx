import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa'

const Footer = () => {

    const newDate = new Date().getFullYear();

    return(
            <Foot>
                <FooterContent>
                    <FaHeart style={{"display": "flex"}} />
                </FooterContent>
                    <FooterText>
                    <b>{newDate} <i>timmy </i>
                    </b>
                    
                    </FooterText>
                
                
            </Foot>

    )
}

const Foot = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    height: 10vh;
    min-height: 100px;
    align-items: center;
    background-color: #fc7686;
    color: #3d3433
    box-shadow: -6px -8px -6px 6px #999;
    `;

const FooterContent = styled.h1`
    display: flex;
    margin-left: 20px;
    color: #3d3433;
    `;

const FooterText = styled.p`
    display: flex;
    font-family: Lato;
    font-size: 12px;
    margin-right: 20px;
    color: #3d3433;
    `;

export default Footer