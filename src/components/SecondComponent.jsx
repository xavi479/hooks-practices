import React, { useState } from 'react';

const SecondComponent = () => {

const [ name, setName ] =  useState("Oscar Javier");
const [ isNameChanged, setIsNameChanged ] = useState(false);

const changeName =(e) => {
  if (isNameChanged) {
      setName("Oscar Javier");
  } else {
    setName("Viviana Vega");
  }
  setIsNameChanged(!isNameChanged);
}

  return (
    <div>
      <h3>Componente: SecondComponent</h3>
      <p>{ name }</p>
      <div>
        <button className='button-large' onClick={ changeName } >Cambiar nombre</button>

      </div>
    </div>
  );
}

export default SecondComponent;

