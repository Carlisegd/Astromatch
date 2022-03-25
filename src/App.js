import React from 'react'
import RoutesApp from './Routes';
import { GlobalStyled} from './GlobalStyled'
import styled from 'styled-components'


export const Container=styled.div`
  width: 400px;
  height: 600px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 2px solid #DC143C;
  border-radius: 0.8em;
  background-color: white;
  box-shadow: 0 0 5px #0000000F;
`

function App() {
	return (
      <Container>
         <GlobalStyled/>
         < RoutesApp />
      </Container>
	)
}

export default App
