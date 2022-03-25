import styled from 'styled-components'

export const DivLista = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0.1em;
    border: 1px solid  #DC143C;
    border-radius: 0.8em;
    margin-left: 7em;
    margin-right: 7em;
    margin-top:1em;
    margin-bottom: 1em;
    transition: 0.2s ease;
    align-self: center; 
    font-size: 0.8em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.5s;
        :hover{
        background-color: #DC143C;
        color:white;
        transform: scale(1.1);
      }
      :active{
        background-color: white;
      
      }
   
`
export const Scroll = styled.div`
  overflow-y: auto; 
  height:27em;
`

export const Foto = styled.img`
   width: 2em;
  height: 2em;
  border-radius: 20em;    
`
export const Nome = styled.p`
  padding-left: 0.5em;

`
export const DivBotao = styled.div`
    display: flex;
    justify-content: center;
    align-items:flex-end;
    padding-top:1em;
    border-top: 1px solid #DC143C;
    position: relative;
    top: 1em;
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

export const DivHome = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  margin: 0px auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`
