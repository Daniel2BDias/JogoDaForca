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
  let [desabilitaLetra, setDesabilitaLetra] = useState(true);
  let [letraClickada, setClickada] = useState('');
  let [letrasClickadas, setLetrasClickadas] = useState([]);
  let [palavraSecreta, setPalavraSecreta] = useState([]);
  let [palavraExibida, setPalavraExibida] = useState([]);
  let [palavraFormada, setPalavraFormada] = useState([]);
  let [resultado, setResultado] = useState('');
  
  
  const escolheuPalavra = () => {
    
    setComecou(true);
    setDisabled(false);
    setDesabilitaLetra(false);
    setNerros(0);
    setLetrasClickadas([]);
    setPalavraFormada([]);
    setPalavraExibida([]);
    setResultado('');
    const palavraArray = palavras[Math.floor(Math.random()*palavras.length)].split('');
    setPalavraSecreta(palavraArray);
    let escondida = [];
    escondida = [];
    for(let i = 0; i < palavraSecreta.length; i++){
      escondida.push("_");
      }
    
    setPalavraExibida(escondida);
    setPalavraFormada(escondida);

  }

  const clickouLetra = (letra) => {
      setClickada(letra);
      setLetrasClickadas([...letrasClickadas, letra])

      palavraNaTela();
      fimDeJogo();

      if(!palavraSecreta.includes(letra)){
        setNerros(nErros+1)
      }
      console.log(palavraSecreta, palavraFormada, palavraExibida)
  }

  const fimDeJogo = () => {

      if(nErros == 6){
      setDisabled(true);
      setDesabilitaLetra(true);
      setResultado('derrota');
      setPalavraExibida(palavraSecreta);
    }

      if(palavraFormada === palavraSecreta){
        setDisabled(true);
        setDesabilitaLetra(true);
        setResultado('vitoria');
        setPalavraExibida(palavraSecreta);
      }
  }


   function palavraNaTela(){
    for (let i = 0; i < palavraSecreta.length; i++){
      if(palavraSecreta[i] === letraClickada){
        palavraFormada[i] = letraClickada;
      } else {
        if (palavraExibida[i] === "_"){
          palavraFormada[i] = "_";
        }
      }
    }
    setPalavraExibida(palavraFormada);
  }

  const chutarPalavra = () => {

  }
  return (
    <div className='tudo'>
    <Jogo resultado={resultado} exibida={palavraExibida} palavras={palavras} palavraexibida={palavraExibida} palavra={palavraSecreta} onclick={escolheuPalavra} erros={nErros}/>
    <Letras erros={nErros} letras={letras} comecou={comecou} desabilita={desabilitaLetra} onclick={clickouLetra} letrasclickadas={letrasClickadas} />
    <InputChute erros={nErros} onclick={chutarPalavra} desabilitado={desabilita}/>
    </div>
  );
};


export default App;
