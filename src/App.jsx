import './App.css'
import { createGlobalStyle } from 'styled-components'
import Header from './components/header'
import { ThemeProvider } from './contexts/theme-context'
import Main from './components/main'

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      <Main />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%
  }

  body{
    font-family: 'DM Sans', sans-serif;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`

export default App
