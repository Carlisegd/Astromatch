import React from "react";
import {Header, Img, Botao} from './styled';
import {Link} from 'react-router-dom';
import {TiChevronLeft} from 'react-icons/ti';



export default function HeaderAll() {

          return (
          <Header>
            <Botao><Link to="/"><TiChevronLeft color="white" fontSize="2em"/></Link></Botao>
            <Img src="https://i.postimg.cc/MpdmMQNh/logo3.png"></Img>
         </Header>
        );
}



