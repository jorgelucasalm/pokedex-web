import React from 'react'
import { Container, Ul, Title, Type, Primary, Secondary, Img, Strong, Div } from './styles'

import id1 from '../../assets/images/pokemons/001.png'
import id2 from '../../assets/images/pokemons/002.png'
import id3 from '../../assets/images/pokemons/003.png'
import id4 from '../../assets/images/pokemons/004.png'
import id5 from '../../assets/images/pokemons/005.png'
import id6 from '../../assets/images/pokemons/006.png'
import id7 from '../../assets/images/pokemons/007.png'
import id8 from '../../assets/images/pokemons/008.png'

function Body() {

    return (
        <>
            

            <Container>
                <Div>
                    <Ul>
                        <li>
                            <Img src={id1}></Img>
                            <Strong>Nº001</Strong>
                            <Title>Bulbasaur</Title>
                            <Type>
                                <Primary>Grass</Primary>
                                <Secondary>Poison</Secondary>
                            </Type>
                        </li>

                        <li>
                            <Img src={id2}></Img>
                            <Strong>Nº001</Strong>
                            <Title>Ivysaur</Title>
                            <Type>
                                <Primary>Grass</Primary>
                                <Secondary>Poison</Secondary>
                            </Type>
                        </li>

                        <li>
                            <Img src={id3}></Img>

                            <Strong>Nº001</Strong>
                            <Title>Venusaur</Title>
                            <Type>
                                <Primary>Grass</Primary>
                                <Secondary>Poison</Secondary>
                            </Type>

                        </li>

                        <li>
                            <Img src={id4}></Img>

                            <Strong>Nº001</Strong>
                            <Title>Charmander</Title>
                            <Type>
                                <Primary>Grass</Primary>
                                <Secondary>Poison</Secondary>
                            </Type>

                        </li>

                        <li>
                            <Img src={id5}></Img>

                            <Strong>Nº001</Strong>
                            <Title>Charmeleon</Title>
                            <Type>
                                <Primary>Grass</Primary>
                                <Secondary>Poison</Secondary>
                            </Type>

                        </li>

                        <li>
                            <Img src={id6}></Img>

                            <Strong>Nº001</Strong>
                            <Title>Charizard</Title>
                            <Type>
                                <Primary>Grass</Primary>
                                <Secondary>Poison</Secondary>
                            </Type>

                        </li>

                        <li>
                            <Img src={id7}></Img>

                            <Strong>Nº001</Strong>
                            <Title>Squirtle</Title>
                            <Type>
                                <Primary>Grass</Primary>
                                <Secondary>Poison</Secondary>
                            </Type>

                        </li>

                        <li>
                            <Img src={id8}></Img>

                            <Strong>Nº001</Strong>
                            <Title>Wartortle</Title>
                            <Type>
                                <Primary>Grass</Primary>
                                <Secondary>Poison</Secondary>
                            </Type>

                        </li>


                    </Ul>
                </Div>

            </Container>
        </>
    )

};

export default Body;