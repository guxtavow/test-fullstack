import './ListaUsers.css'
import React, { useState } from 'react'
import EditarUsers from '../../components/EditarUsuarios/EditarUsers'

export default function ListaUsers() {

    const [abrirModal, setAbrirModal] = useState(false)

    return (
        <div className="ListaUsers-page">
            <h1 id='TituloPainel'> <i class="bi bi-person" style={{marginRight: '20px'}}></i>Painel de clientes</h1> 
            <hr style={{width: '80%', opacity: '0.5'}}/> 
            <span id='cabecalho'>
                <section id='textosCabecalho'>
                    <h2 id='SubTituloPainel'> Listagem de usuários</h2>
                    <p id='textoExplicacao'> Escolha um cliente para visualizar os detalhes</p>     
                </section>
                <button className='btn-novoCliente'>Novo Cliente</button>
            </span>

            <div className="ListaUsers-lista">
                <div className="Usuario-card">
                    <section>
                        <h3>Nome do cliente</h3>
                        <p>email@teste.com.br</p>
                    </section>

                    <section>
                        <h3>123.456.789-00</h3>
                        <p>(11)9999-9999</p>
                    </section>

                    <section>
                        <i className="bi bi-circle-fill" style={{color: 'green', marginRight: '8px'}}></i>Ativo
                    </section>

                    <section>
                        <button className='btn-editar' onClick={() => setAbrirModal(true)}><h4>Editar</h4></button>
                    </section>
                </div>

                <div className="Usuario-card">
                    <section>
                        <h3>Nome do cliente</h3>
                        <p>email@teste.com.br</p>
                    </section>

                    <section>
                        <h3>123.456.789-00</h3>
                        <p>(11)9999-9999</p>
                    </section>

                    <section>
                        <i className="bi bi-circle-fill" style={{color: 'green', marginRight: '8px'}}></i>Ativo
                    </section>

                    <section>
                        <button className='btn-editar'><h4>Editar</h4></button>
                    </section>
                </div>

                <div className="Usuario-card">
                    <section>
                        <h3>Nome do cliente</h3>
                        <p>email@teste.com.br</p>
                    </section>

                    <section>
                        <h3>123.456.789-00</h3>
                        <p>(11)9999-9999</p>
                    </section>

                    <section>
                        <i className="bi bi-circle-fill" style={{color: 'green', marginRight: '8px'}}></i>Ativo
                    </section>

                    <section>
                        <button className='btn-editar'><h4>Editar</h4></button>
                    </section>
                </div>
            </div>
        <p className="footer-msg">Exibindo X clientes</p>

        <EditarUsers isOpen={abrirModal} setIsOpen={() => setAbrirModal(!abrirModal)} />

        </div>
    )
}