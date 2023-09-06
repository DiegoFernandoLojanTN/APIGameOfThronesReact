import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
` ;

const Boton = styled.button`
  background: linear-gradient(to bottom right, #333, #000);
  font-family: "Trajan Pro", sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: none;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    cursor: pointer;
    background: linear-gradient(to bottom right, #aee7f7, #88ccf1);
    color: #333;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #fff;
      opacity: 0.7;
      border-radius: 50%;
      pointer-events: none;
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    &::before {
      left: 70%;
      transform: translateX(-50%);
      animation: snowfall 3s infinite;
    }

    &::after {
      left: 25%;
      transform: translateX(-50%);
      animation: snowfall 3s infinite 1s;
    }

    @keyframes snowfall {
      0% {
        transform: translateY(-10px);
        opacity: 0.7;
      }
      100% {
        transform: translateY(10px);
        opacity: 0.2;
      }
    }
  }

  &:active {
    background: linear-gradient(to bottom right, #aee7f7, #88ccf1);
    color: #333;
    animation: none;
  }
`;


function App() {

  // state de frases
  const [frase, guardarFrase] = useState({});


  const consultarAPI = async () => {
    const api = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
    const frase = await api.json();
    guardarFrase(frase); // No necesitas el [0] ya que "frase" es un objeto JSON, no un arreglo
}


  // Cargar una frase
  useEffect( () => {
    consultarAPI()
  }, []);

  return (
    <Contenedor>
      <Frase
        frase={frase}
      />

      <Boton
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;