import React, { useContext } from 'react'
import pokeball from '../../assets/images/pokeball.svg'
import Switch from 'react-switch'

import { Head, Logo, SwitchStyles } from './styles'
import { ThemeContext } from 'styled-components'

interface Props {
    toggleTheme (): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const {colors, title} = useContext(ThemeContext)

    return (
        <Head>
            <Logo className="top-bar">
                <img src={pokeball}></img>
                <h1>Pokédex</h1>
            </Logo>
            <SwitchStyles>
                <Switch
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                />
            </SwitchStyles>
        </Head>
    )
}

export default Header;