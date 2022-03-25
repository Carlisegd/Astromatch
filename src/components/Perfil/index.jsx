
import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Img, ContainerBotao, DivBotao, FotoFundo, Infos, DivIdade, DivNome, P, AreaFooter, Botao, DivPerfil, Perfil, Fundo, Div} from './styled';
import {BiHeartCircle} from 'react-icons/bi'
import {AiOutlineCloseCircle} from 'react-icons/ai'


export default function  GetPerfil() {
  const [profile, setProfile] = useState([]);
   const [match, setMatch] = useState(false);

      useEffect(() => {getProfile()}, []);

      const getProfile = () => {
          axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:carlise/person`)
          .then((res) => {setProfile(res.data.profile);
          })
          .catch((err) => {console.log(err);
          });
      };

      const chooseProfileLike = () => {
          const body = { id: profile.id, 
                        choice: true };
          axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:carlise/choose-person",
                    body)
          .then((res) => {alert("Deu Match!");
              setMatch(res.data);
              getProfile();
          })
          .catch((err) => {console.log(err);
              alert("Erro, tente novamente!");
          });
      };
      return(
        <div>
        <Fundo>
       
              <FotoFundo src={profile.photo} alt="Foto do Perfil"/>
              <Img src={profile.photo} alt="Foto do Perfil"/>
          <Infos>
            <DivPerfil>
                <DivNome>{profile.name},</DivNome>
                <DivIdade>{profile.age}</DivIdade>
            </DivPerfil>   
                <Perfil>{profile.bio}</Perfil>
          </Infos>
        </Fundo>
          <ContainerBotao>
            <DivBotao>
                <Botao onClick={()=> getProfile()}> 
                  <AiOutlineCloseCircle display="block" color="#DC143C" fontSize="3em"/>
                </Botao>
                <Botao onClick={()=> chooseProfileLike()}>
                  <BiHeartCircle display="block" color="#DC143C" fontSize="3em"/>
                </Botao>
              </DivBotao>
            </ContainerBotao>
      </div>   
        
      );
}
