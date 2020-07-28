import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

export default function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de Cateoria</h1>

            <form action="">

                <label htmlFor="">
                    Nome da Categoria
                    <input type="text"/>
                </label>

                <button>Cadastrar</button>
            </form>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}