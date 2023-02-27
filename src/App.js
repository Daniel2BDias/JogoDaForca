import { useState } from 'react';
import React from 'react';
import Jogo from './comps/Jogo';
import Letras from './comps/Letras';
import palavras from './palavras';
import letras from './letras';
import InputChute from './comps/InputChute';

function App() {

  let [comecou, setComecou] = useState(false);
  let [nErros, setNerros] = useState(0);
  let [desabilita, setDisabled] = useState(true);
  let [letraClickada, setLetraClickada] = useState('');
  let [letrasClickadas, setLetrasClickadas] = useState([]);
  let [palavraSecreta, setPalavraSecreta] = useState(palavras[Math.floor(Math.random()*palavras.length)].split(''));
  let [palavraExibida, setPalavraExibida] = useState('');
  
  
  
  
  
  
  
  const escolheuPalavra = () => {
    setComecou(true);
    setDisabled(false);
    setNerros(0);
    setLetraClickada('');
    setLetrasClickadas([]);
    const palavraSorteada = palavras[Math.floor(Math.random()*palavras.length)];
    const palavraArray = palavraSorteada.split('');
    setPalavraSecreta(palavraArray);
  }

  const clickouLetra = (letra) => {
      setLetraClickada(letra);
      setLetrasClickadas([...letrasClickadas, letra])
      console.log(letrasClickadas)
  }

  /*function palavraNaTela(){
    for (let i = 0; i < palavraAtual.length; i++){
      if(palavraAtual[i] === letraAtual){
        palavraFormada[i] = letraAtual;
      } else {
        if (palavraFormada[i] == null){
          palavraFormada[i] = "_";
        }
      }
    }
    setPalavraDoJogoArray(palavraFormada);
  }*/

  const chutarPalavra = () => {

  }


  return (
    <div className='tudo'>
    <Jogo palavras={palavras} palavraexibida={palavraExibida} palavra={palavraSecreta} onclick={escolheuPalavra} erros={nErros}/>
    <Letras letras={letras} comecou={comecou} disable={desabilita} onclick={clickouLetra} letrasclickadas={letrasClickadas}/>
    <InputChute onclick={chutarPalavra} desabilitado={desabilita}/>
    </div>
  );
};

export default App;
