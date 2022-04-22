import { useContext } from 'react';
import AlertContext from '../context/alerts/AlertContext'
import styled, {keyframes} from 'styled-components'

const Alert = () => {

    const { alert } = useContext(AlertContext)

    return alert !== null && (
        <div>
            {alert.type === 'error'
                && <Error>{alert.msg}</Error>}
        </div>
    )
}

const fadein = keyframes`{
    from {opacity: 0;}
    to {opacity: 1;}
}`

const fadeout = keyframes`{
    from {opacity: 1;}
    to {opacity: 0;}
}`

const Error = styled.div`
position: absolute;
background-color: #fc7686;
width: 100%;
text-align: center;
color: white;
animation: ${fadein} 1s, ${fadeout} 1s 2.2s;`

export default Alert