import React, { useState, useEffect } from 'react';
import Header from '../../components/HeaderAll';
import axios from "axios";
import {BsFillTrashFill} from 'react-icons/bs';
import {Botao, Scroll, DivLista, DivBotao, Foto, Nome} from './styled';


export default function ListaContatos() {

  const [matches, setMatches] = useState([]);

      useEffect(() => {getMatches();}, []);

      const getMatches = () => {
        axios
          .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:carlise/matches")
          .then((res) => {setMatches(res.data.matches);
          })
          .catch((err) => {console.log(err);
          });
      };

       const resetLista = () => {
        axios
          .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:carlise/clear"
          )
          .then((res) => {setMatches([]);
          alert("Lista removida!")
          console.log(res.data)
          })
          .catch((err) => {console.log(err);
          });
      };
  
    const listaLike = matches.map(like=>{
        return (
          <div key={like.id}>
            <DivLista>
            <Foto src={like.photo}/>
            <Nome>{like.name},</Nome>
            <Nome>{like.age}</Nome>           
            </DivLista>
            
          </div>
        )
    });

        return (
            <div>
              <Header/>
              <Scroll>
              {listaLike}
              </Scroll>
             <DivBotao>
              <Botao onClick={()=>{resetLista()}}><BsFillTrashFill color="black" fontSize="1.6em"/></Botao>
             </DivBotao>
            </div>
        );
}



