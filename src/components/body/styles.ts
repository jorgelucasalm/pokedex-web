import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.background};
    height: 100vh;
    width: 100%;
    display: flex;
    padding: 0 30px;

    h1{
        font: 400 2rem Archivo;
        color: ${props => props.theme.colors.text};
    }
`


