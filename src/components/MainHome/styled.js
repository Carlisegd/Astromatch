import styled from 'styled-components';

export const Button = styled.button`
    width: 280px;
    height: 82px;
    background: #c1faf3;
    color: black;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    border: none;
    font-size: 20px;
    margin-bottom: 32px;
    
        :hover{
            background-color: #2d6b64;
            color:white;
            transform: scale(1.1);
      }
        :active{
            background-color: #2d6b64;
            color: white;
      }
        
`

export const ContainerPagina = styled.div`
    /* display: grid;
    grid-template-columns: 1f;
    grid-column-end: 3;
    padding: 1em;
    font-size: 20px;
    text-align: justify;
    line-height: 2em;
    justify-items: center;
    align-items: center;
    color: white;, */
    
    width: 90%;
    z-index: 2;
    margin: 0.2em auto;
    position: relative;
    height: 450px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: space-between;
    border-radius: 3em;
    overflow: hidden;
    flex-direction: column;
 
`

