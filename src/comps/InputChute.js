const InputChute = props => {
    return (
        <div className="input">
        <label>Já Sei A Palavra:</label>
        <input data-test="guess-input" type="text" disabled placeholder="Já sabe a palavra?"></input>
        <button data-test="guess-button" disabled onClick={props.onclick}>Chutar</button>
        </div>
    )
};

export default InputChute;