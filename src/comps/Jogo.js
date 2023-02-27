const Jogo = ({palavras, onclick, erros, exibida, resultado}) => {

    return (
        <div className="jogo">
      <div className='imagem'>
        <img data-test="game-image" src={`./assets/forca${erros}.png`} alt={`forca${erros}`} />
      </div>
      <div className='display'>
        <button data-test="choose-word" onClick={() => onclick(palavras)}>Escolher Palavra</button>
        <div data-test="word" className='palavra'>
            <div className={resultado}>{exibida}</div>
        </div>
      </div>
    </div>
    );
};

export default Jogo;