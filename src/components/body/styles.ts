import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    padding: 0 50px;
    justify-content: center;   
    
`

export const Div = styled.div`
/* COR DE FUNDO DA LISTAGEM */
    background-color: #474a51;
    width: 52rem;

    display: flex;
    justify-content: center;
    overflow:hidden;

    border: 2px solid none;
    border-radius: 9px;

`

export const Ul = styled.ul`
        
        width: 50rem;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(9rem, auto));
        grid-template-rows: auto-fit, minmax(15rem, auto);
        grid-gap:0;
        
    li {
        background-color: #fff;
        border: 2px solid none;
        border-radius: 4px;

        margin: 10px;
        width: auto;
        height: auto;
    }  

   
`

export const Strong = styled.strong`
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    font: 400 0.7rem Archivo;
    color: #474a51;
`

export const Img = styled.img`
    border: 2px solid none;
    border-radius: 4px;
    background-color: #d3d3d3;
    width: 100%;
`

export const Title = styled.h1`

    font-family: Poppins;
    font-size: 1rem;
    margin-left: 0.5rem;
    margin-top: 0.3rem;
`

export const Type = styled.span`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 10px 20px;;
    width: auto;
`

export const Primary = styled.span`
        text-align: center;
        font: 700 0.5rem Poppins;
        width: auto;
        background-color: greenyellow;
        border: 2px solid none;
        border-radius: 4px;
`

export const Secondary = styled.span`

        text-align: center;
        color: white;
        width: auto;
        font: 700 0.5rem Poppins;
        background-color: purple;
        border: 2px solid none;
        border-radius: 4px; 

`
