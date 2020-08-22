import React from 'react'
import { Container, Ul, Title, Type, Primary, Secondary, Img, Strong } from './styles'

import id1 from '../../assets/images/pokemons/001.png'

function Body() {

    return (
        <Container>
            
            <div>
                <Ul>
                    <li>
                        <Img src={id1}></Img>
                        <div>
                            <Strong>Nº001</Strong>
                            <Title>Bulbasaur</Title>
                            <Type>
                                <Primary>Grass</Primary>
                                <Secondary>Poison</Secondary>
                            </Type>
                        </div>
                    </li>

                    <li>
                        <Img src={id1}></Img>
                        <div>
                            <Strong>Nº001</Strong>
                            <Title>Bulbasaur</Title>
                            <Type>
                                <Primary>Grass</Primary>
                                <Secondary>Poison</Secondary>
                            </Type>
                        </div>
                    </li>

                    <li>
                        <Img src={id1}></Img>
                        <div>
                            <Strong>Nº001</Strong>
                            <Title>Bulbasaur</Title>
                            <Type>
                                <Primary>Grass</Primary>
                                <Secondary>Poison</Secondary>
                            </Type>
                        </div>
                    </li>

                    <li>
                        <Img src={id1}></Img>
                        <div>
                            <Strong>Nº001</Strong>
                            <Title>Bulbasaur</Title>
                            <Type>
                                <Primary>Grass</Primary>
                                <Secondary>Poison</Secondary>
                            </Type>
                        </div>
                    </li>

                    <li>
                        <Img src={id1}></Img>
                        <div>
                            <Strong>Nº001</Strong>
                            <Title>Bulbasaur</Title>
                            <Type>
                                <Primary>Grass</Primary>
                                <Secondary>Poison</Secondary>
                            </Type>
                        </div>
                    </li>

                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                </Ul>
            </div>
        </Container>
        
    )

};

export default Body;