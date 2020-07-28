import React from 'react'
import './styles.css'
import Logo from '../../assets/img/logo.png'
import ButtonLink from '../components/ButtonLink'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="aluraflix" className="Logo" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu