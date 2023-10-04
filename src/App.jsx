import './App.css'
import { ThemeProvider } from './contexts/theme-context'
import { createGlobalStyle } from 'styled-components'
import Header from './components/header'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </>
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
