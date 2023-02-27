const Letras = ({ letras, onclick, desabilita, letrasclickadas, comecou }) => {

    return (
        <div className='letras'>
            {letras.map(l => <Letra key={l} comecou={comecou} letrasclickadas={letrasclickadas} disabled={desabilita} onclick={onclick} letra={l} />)}
        </div>
        
    );
}

const Letra = ({letrasclickadas, letra, onclick, comecou}) => {
    let desabilita = true;

    if(comecou){
        desabilita = false;
    }

    if(letrasclickadas.includes(letra)){
        desabilita = true;
    }

    return (
        <button disabled={desabilita} data-test="letter" onClick={() => onclick(letra)}>{letra}</button>
    )
}

export default Letras;