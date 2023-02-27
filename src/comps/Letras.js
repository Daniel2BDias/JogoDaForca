const Letras = ({ letras, onclick, desabilita, letrasclickadas, comecou, erros, palavraformada, palavrasecreta }) => {

    return (
        <div className='letras'>
            {letras.map(l => <Letra key={l} erros={erros} palavraformada={palavraformada} palavrasecreta={palavrasecreta} comecou={comecou} letrasclickadas={letrasclickadas} disabled={desabilita} onclick={onclick} letra={l} />)}
        </div>
        
    );
}

const Letra = ({letrasclickadas, letra, onclick, comecou, erros, disabled}) => {

    if(comecou){
        disabled = false;
    } 
    
    if(letrasclickadas.includes(letra)){
        disabled = true;
    }
    
    if(erros === 6){
        disabled = true;
    }
    return (
        <button disabled={disabled} data-test="letter" onClick={() => onclick(letra)}>{letra}</button>
    )
}

export default Letras;