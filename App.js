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
  let [letraClickada, setLetraClickada] = useState('');
  let [letrasClickadas, setLetrasClickadas] = useState([]);
  let [palavraSecreta, setPalavraSecreta] = useState([]);
  let [palavraExibida, setPalavraExibida] = useState('');
  let [palavraFormada, setPalavraFormada] = useState('');
  let [resultado, setResultado] = useState('');
  let [acabou, setAcabou] = useState(false);
  console.log(palavraSecreta, letraClickada)

  console.log(nErros)
  
  const escolheuPalavra = () => {
    
    setComecou(true);
    setDisabled(false);
    setDesabilitaLetra(false);
    setNerros(0);
    setLetrasClickadas([]);
    setPalavraFormada([]);
    setLetraClickada('')
    setResultado('');
    setAcabou(false);
    const palavraArray = palavras[Math.floor(Math.random()*palavras.length)].split('');
    setPalavraSecreta(palavraArray);
    let escondida = [];
    for(let i = 0; i < palavraArray.length; i++){
      escondida.push("_");
      }
    
    setPalavraExibida(escondida.join(''));
    setPalavraFormada(escondida.join(''));
  }

  const clickouLetra = (letra) => {

      let erros = nErros + 1;
      
      setLetraClickada(letra);
      setLetrasClickadas([...letrasClickadas, letra])

      if(!palavraSecreta.includes(letra)){
        setNerros(nErros + 1);
      }

      palavraNaTela(letra, erros);
  }

  const fimDeJogo = (erros, palavraNova) => {
      if(erros === 6){
      setDisabled(true);
      setDesabilitaLetra(true);
      setResultado('derrota');
      setPalavraExibida(palavraSecreta.join(''));
      setAcabou(true);
    }
    if(!palavraNova.includes("_")){
      setDisabled(true);
      setDesabilitaLetra(true);
      setResultado('vitoria');
      setPalavraExibida(palavraSecreta.join(''));
      setAcabou(true);
    }
  }


   function palavraNaTela(letra, erros){

    let palavraNova = palavraFormada.split('');

    for (let i = 0; i < palavraSecreta.length; i++){
      if(palavraSecreta[i] === letra){
        palavraNova[i] = palavraSecreta[i];
        setPalavraExibida(palavraNova.join(''))
        setPalavraFormada(palavraNova.join(''));
        fimDeJogo(erros, palavraNova);
      } else if (palavraExibida[i] === "_"){
          palavraNova[i] = "_";
          setPalavraExibida(palavraNova.join(''));
          setPalavraFormada(palavraNova.join(''));
          fimDeJogo(erros, palavraNova);
        }
        }
      }

  const chutarPalavra = () => {

  }

  return (
    <div className='tudo'>
    <Jogo resultado={resultado} exibida={palavraExibida} palavras={palavras} onclick={escolheuPalavra} erros={nErros}/>
    <Letras erros={nErros} letras={letras} acabou={acabou} comecou={comecou} desabilita={desabilitaLetra} onclick={clickouLetra} letrasclickadas={letrasClickadas} />
    <InputChute erros={nErros} onclick={chutarPalavra} desabilitado={desabilita}/>
    </div>
  );
};


export default App;
