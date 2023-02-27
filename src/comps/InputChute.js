const InputChute = ({onclick, desabilitado, erros}) => {
    if(erros === 6){
        desabilitado = true;
    }
    return (
        <div className="input">
        <label>Já Sei A Palavra!</label>
        <input data-test="guess-input" type="text" disabled={desabilitado} placeholder="Já sabe a palavra?"></input>
        <button data-test="guess-button" disabled={desabilitado} onClick={onclick}>Chutar</button>
        </div>
    )
};

export default InputChute;