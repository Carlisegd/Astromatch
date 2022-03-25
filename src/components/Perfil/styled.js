import styled from 'styled-components'

export const Img = styled.img`
    width: 100%;
    display: block;
    z-index: 1;
    position: relative;
    top:10px;
`

export const Botao = styled.div `
    justify-content: center;
    border: 1px solid transparent;
    background-color: transparent;
    color: transparent;
    transition: 0.2s ease;
    align-self: center; 
    padding: 0.5em;
    font-size: 0.7em;
    margin-left: 1.5em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.5s;
        :hover{
        background-color: transparent;
        color:transparent;
        transform: scale(1.3);
      }
      :active{
        background-color: transparent;
      }
`

export const P = styled.p`
    position:relative;
    bottom: 5em;
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: white;
`
export const AreaFooter = styled.div`
position:relative;
bottom: 1em;
position:fixed;
display: flex;
left:7em;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
background-color: white;
border-top: 2px solid #ffff;

`
export const ContainerBotao =styled.div`
  padding: 25px;
	padding-bottom: 0;
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: flex-end;

`

export const DivBotao =styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  
`

export const Perfil = styled.p`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`

export const Fundo = styled.div`
  
  top: 20px;
  display: flex;
	position: relative;
	border-radius: 2em;
	overflow: hidden;
	height: 380px;
	display: flex;
	align-items: center;
  border: 2px solid #DC143C;
`

export const FotoFundo= styled.img`
  background-image: url(https://image.businessinsider.com/5c268bd…?width=1300&format=jpeg&auto=webp);
    filter: blur(30px);
    height: 100%;
    width: 100%;
    position: absolute;
    
`
export const Infos = styled.div`
    height: 30%;
    position: absolute;
    bottom: 0px;
    width: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    color: white;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 15px;
    z-index: 2;
    `

export const DivPerfil = styled.div`
    display: flex;
    align-items: baseline;

`
export const DivNome = styled.div`
   font-weight: bold;
	  font-size: 24px;

`
export const DivIdade = styled.div`
    margin-left: 10px;
    font-size: 20px;
`