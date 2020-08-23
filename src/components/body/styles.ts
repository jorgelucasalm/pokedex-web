import styled from 'styled-components';

export const Container = styled.section`
    height: auto;
    width: 100%;
    display: flex;
    background-color: ${props => props.theme.colors.background};
    
    div {
        margin-top: 2rem;
        margin-bottom: 2rem;
        width: 100%;
        padding: 0 100px;
        display: flex;
        justify-content: center;    
    }

`

export const Ul = styled.ul`
        
        border: 2px solid none;
        border-radius: 9px;
        width: 50rem;
        
        /* COR DE FUNDO DA LISTAGEM */
        background-color: #474a51;
        
        
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

        display: grid;
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

position: relative;
    font: 700 1rem Poppins;
    margin-left: 0.5rem;
    margin-top: 0.3rem
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
