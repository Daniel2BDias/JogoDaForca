import React from "react";

const Letras = props => {
     const letras = props.letras;
     const onclick = props.onclick;

     
    return (
        <div className='letras'>
            {letras.map(l => <button disabled data-test="letter" onClick={onclick}>{l}</button>)}
        </div>
    );
};

export default Letras;