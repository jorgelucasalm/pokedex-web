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

export const Ul = styled.section`
        
        border: 2px solid none;
        border-radius: 9px;
        background-color: #474a51;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 45rem;
        justify-content: center;

    li {
        background-color: #fff;
        border: 2px solid none;
        border-radius: 4px;
        margin: 10px;
        width: 10rem;
        height: 15rem;
    }  

    div{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }

    

    
    @media screen and (max-width: 1000px){
        
        
        width: 40%;
    }   

    @media screen and (max-width: 600px){
        
            width: 90%;
        
    
    } 

`

export const Strong = styled.strong`
    margin-left: 0.5rem;
    font: 400 0.7rem Archivo;
    color: #474a51;
`

export const Img = styled.img`
    border: 2px solid none;
    border-radius: 4px;
    background-color: #d3d3d3;
    width: 10rem;
    margin: 0 auto;
`

export const Title = styled.h1`
    font: 700 1rem Poppins;
    margin-left: 0.5rem;
    margin-top: 0.3rem
`

export const Type = styled.span`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-left: 0.5rem;
    width: 5rem;
`

export const Primary = styled.span`
        margin-left: 0.5rem;
        font: 700 0.8rem Poppins;
        background-color: greenyellow;
        border: 2px solid none;
        border-radius: 4px;
`
export const Secondary = styled.span`
        margin-left: 0.5rem;
        color: white;
        font: 700 0.8rem Poppins;
        background-color: purple;
        border: 2px solid none;
        border-radius: 4px; 

`
