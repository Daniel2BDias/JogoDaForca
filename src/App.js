import Jogo from './comps/Jogo';
import Letras from './comps/Letras';
import palavras from './palavras';
import letras from './letras';
import clickouLetra from './clickouLetra';
import escolheuPalavra from './escolherPalavra';
import InputChute from './comps/InputChute';
import chutarPalavra from './chutarPalavra';

function App() {
  return (
    <>
    <div className='tudo'>
    <Jogo palavras={palavras} onclick={escolheuPalavra}/>
    <Letras letras={letras} onclick={clickouLetra}/>
    <InputChute onclick={chutarPalavra}/>
    </div>
    </>
  );
};

export default App;
