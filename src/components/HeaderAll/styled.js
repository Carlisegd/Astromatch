import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  border-radius: 0.6em 0.6em 0em 0em;
  background-image: linear-gradient(to right, #FFD700,  #FF8C00, #FF69B4,#FF1493,#DC143C);
  
`

export const Img = styled.img`
  width: 50%;

`

export const Botao = styled.div `
    border: 1px solid transparent;
    background-color: transparent;
    color: transparent;
    transition: 0.2s ease;
    align-self: center; 
    font-size: 0.8em;
    margin-left: 0.2em;
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


