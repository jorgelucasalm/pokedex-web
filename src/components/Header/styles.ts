import styled from 'styled-components';

export const Container= styled.div`
.page-header{
    /*background-color: #8257E5;
    background-color: #FA8072;*/
    background-color: ${props => props.theme.colors.primary};
    height: 5rem;
    width: 100%;
    display: flex;
    padding: 0 30px;
    justify-content: space-between;
}
.page-header .top-bar{
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0.5rem;
}

.page-header .top-bar img{
    height: 3rem;
    margin-left: 2.4rem;
}

.page-header .top-bar h1{
    color: antiquewhite;
    font: 700 3.6rem Archivo;
    font-size: 2.4rem;
    margin-left: 2.4rem;
}

.page-header .switch{
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0.5rem;
}
`

