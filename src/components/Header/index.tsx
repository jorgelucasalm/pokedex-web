import React from 'react'
import './styles.ts'
import pokeball from '../../assets/images/pokeball.svg'
import { Container } from './styles'
import Switch from 'react-switch'

function Header() {
    return (
        <Container>
            <header className="page-header">
                <div className="top-bar">
                    <img src={pokeball}></img>
                    <h1>Pokédex</h1>
                </div>
                <div className="switch">
                    <Switch
                            onChange={() => {}}
                            checked={true}
                            checkedIcon={false}
                            uncheckedIcon={false}
                    />
                </div>
            </header>
        </Container>
    )
}

export default Header;