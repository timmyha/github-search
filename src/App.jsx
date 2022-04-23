import { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import theme from 'styled-theming';
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alerts/AlertContext'
import Alert from './components/Alert'
import User from './pages/User'

function App() {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <GithubProvider>
            <AlertProvider>
                <ThemeProvider theme={darkMode 
                                    ? { mode: 'dark' } 
                                    : { mode: 'light' }}>
                    <Main>
                        <Navbar
                            toggleDarkMode={toggleDarkMode} />
                        <Body>
                            <Alert />
                            <Routes>
                                <Route 
                                    path='/users/:login' 
                                    element={<User />} />
                                <Route 
                                    path='/' 
                                    element={<Home />} />
                                <Route 
                                    path='about' 
                                    element={<About />} />
                                <Route 
                                    path='*' 
                                    element={<NotFound />} />
                            </Routes>
                        </Body>
                        <Footer />
                    </Main>
                </ThemeProvider>
            </AlertProvider>
        </GithubProvider>

    )
}

const mainBgColor = theme('mode', {
    light: '#f9f0e3',
    dark: '#504847',
});

const primaryText = theme('mode', {
    light: '#504847',
    dark: '#efdfc9',
});



const Main = styled.div`
  display: flex;
  flex-direction: column;
  `;

const Body = styled.div`
  background-color: ${mainBgColor};
  min-height: 81.5vh;
  color: ${primaryText};
  transition: .3s;
  `;

export default App
