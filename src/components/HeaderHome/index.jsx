import React from 'react';
import {Header, Img, DivNav, Botao, Div} from './styled';
import {Link} from 'react-router-dom';
import {GiHeartInside} from 'react-icons/gi'


export default function HeaderHome() {
 
        return (
            <Header>
                <Div>
                  <Img src="https://i.postimg.cc/MpdmMQNh/logo3.png"></Img>
                </Div>
                <DivNav>
                  <Botao>
                  <Link to="/contatos"><GiHeartInside color="white" fontSize="3em"/></Link>
                  </Botao>
                </DivNav> 
                
            </Header>

 

        );
    }



