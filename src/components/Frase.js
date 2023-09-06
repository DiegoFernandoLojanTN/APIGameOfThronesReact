import React from 'react';
import styled from '@emotion/styled';


const ContenedorFrase = styled.div`
    padding: .5rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    margin: 1rem auto;
    position: relative;
    
    @media (min-width: 992px) {
        .container {
            margin-top: 15rem;
        }
    }
    
    h1 {
        font-family: "Trajan Pro", sans-serif;
        text-align: center;
        position: relative;
        font-size: 3rem;
        margin-bottom: 2rem;
        display: inline-block; /* Añadido para evitar que las espadas se superpongan */
    }
    
    h1::before {
        content: "⚔️";
        font-size: 3rem; /* Ajusta el tamaño según sea necesario */
        color: #000;
        position: relative; /* Cambiado a relative */
        margin-right: 1rem; /* Espacio entre las espadas y el texto */
    }
    
    p {
        font-family: "Copperplate Gothic", sans-serif;
        font-size: 2rem;
        font-weight: bold;
        text-align: right;
        color: #aaa;
        margin-top: 2rem;
        position: relative;
    }
    
    p::after {
        content: "— Author";
        font-size: 1.5rem;
        color: #333;
        position: absolute;
        bottom: -1.5rem;
        right: 0;
        opacity: 0.5;
    }
`;

const Frase = ({frase}) => {

    return ( 
        <ContenedorFrase>
            <h1>{frase.sentence} </h1>
            <h2>- {frase.character && frase.character.name}</h2>
        </ContenedorFrase>
     );
}
 
export default Frase;