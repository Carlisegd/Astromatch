import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding-top: 3em;
  border-bottom: 1px solid transparent;
  border-radius: 0.6em 0.8em 8em 3em;
  background-image: linear-gradient(to right, #FFD700,  #FF8C00, #FF69B4,#FF1493,#DC143C);
  
`

export const Img = styled.img`
  width: 70%;

`
export const Div = styled.div`
  position: relative;
  bottom: 2em;
  padding-left: 1em;

`

export const DivNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  position: relative;
  bottom: 2em;
  right: 1em;
`

export const Botao = styled.div ` 
    border-radius: 0.3em;
    border: 1px solid transparent;
    background-color: transparent;
    color: transparent;
    transition: 0.2s ease;
    align-self: center; 
    padding: 0.5em;
    font-size: 0.8em;
    margin-left: 1.5em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.5s;
        :hover{
        background-color: transparent;
        color:transparent;
        transform: scale(1.5);
      }
      :active{
        background-color: transparent;
      
      }
`
