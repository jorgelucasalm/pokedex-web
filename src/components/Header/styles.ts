import styled from 'styled-components';

export const Head = styled.header`
    background-color: ${props => props.theme.colors.primary};
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;

    img{
        height: 3rem;
    }
    h1{
        color: antiquewhite;
        font: 700 3.6rem Archivo;
        font-size: 2.4rem;
        margin-left: 2.4rem;
    }   

    @media (max-width: 675px) {
        
        img{
            height: 2.5rem
        }
        h1{
            font-size: 2rem;
        }
    }
`

export const SwitchStyles = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0.5rem;
`



