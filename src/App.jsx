import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Who from './components/Who'
import Works from './components/Works'
import Contact from './components/Contact'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    background: url("./img/bg.jpeg");
    &::-webkit-scrollbar{
        display: none;
    }
`;

const App = () => {
  return (
    <div>
      <Container>
          <Navbar />
          <Hero />
          <Who />
          <Works />
          <Contact />
      </Container>
    </div>
  )
}

export default App
