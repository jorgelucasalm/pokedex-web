import styled from 'styled-components';

export const Head = styled.header`
    background-color: ${props => props.theme.colors.primary};
    height: 5rem;
    width: 100%;
    display: flex;
    padding: 0 30px;
    justify-content: space-between;
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0.5rem;

    img{
        height: 3rem;
    }
    h1{
        color: antiquewhite;
        font: 700 3.6rem Archivo;
        font-size: 2.4rem;
        margin-left: 2.4rem;
    }
`

export const SwitchStyles = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0.5rem;
`



