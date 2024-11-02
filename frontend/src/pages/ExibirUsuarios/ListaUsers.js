import './ListaUsers.css'
import React, { useEffect, useState } from 'react'
import EditarUsers from '../../components/EditarUsuarios/EditarUsers'
import { ApiListaClientes } from '../../services/apiListaClientes'
import { useNavigate } from 'react-router-dom'

export default function ListaUsers() {

    const [abrirModal, setAbrirModal] = useState(false)
    const [clientes, setClientes] = useState([])

    const ListarClientes = async() => {
        const response = await ApiListaClientes()
        setClientes(response.clientes || []);
        console.log(response)
    }

    const navegar = useNavigate()
    const Links = (path) => {
        navegar(path)
    }

    const StatusClientes = (status) => {
        if (status === 'Ativo') {
            return (
                <>
                    <i className="bi bi-circle-fill" style={{ color: 'green', marginRight: '8px' }}></i> {status}
                </>
            );
        } else if (status === 'Inativo') {
            return (
                <>
                    <i className="bi bi-circle-fill" style={{ color: 'red', marginRight: '8px' }}></i> {status}
                </>
            );
        } else if (status === 'Aguardando') {
            return (
                <>
                    <i className="bi bi-circle-fill" style={{ color: 'yellow', marginRight: '8px' }}></i> {status}
                </>
            );
        } else {
            return (
                <>
                    <i className="bi bi-circle-fill" style={{ color: 'lightgray', marginRight: '8px' }}></i> {status}
                </>
            );
        }
    };
    


    useEffect(()=>{
        ListarClientes()
    }, [])
    

    return (
        <div className="ListaUsers-page">
            <h1 id='TituloPainel'> <i className="bi bi-person" style={{marginRight: '20px'}}></i>Painel de clientes</h1> 
            <hr style={{width: '80%', opacity: '0.5'}}/> 
            <span id='cabecalho'>
                <section id='textosCabecalho'>
                    <h2 id='SubTituloPainel'> Listagem de usuários</h2>
                    <p id='textoExplicacao'> Escolha um cliente para visualizar os detalhes</p>     
                </section>
                <button className='btn-novoCliente' onClick={() => Links('/Criar-Usuario')}>Novo Cliente</button>
            </span>

            <div className="ListaUsers-lista">
                {clientes.map(cliente => (
                    <div className="Usuario-card" key={cliente.id} style={{opacity: cliente.status === 'Desativado' ? '0.6' : '1'}}>
                        <section>
                            <h3>{cliente.nome}</h3>
                            <p>{cliente.email}</p>
                        </section>

                        <section>
                            <h3>{cliente.cpf}</h3>
                            <p>{cliente.telefone}</p>
                        </section>

                        <section>
                            <span id='status'>{StatusClientes(cliente.status)}</span>
                        </section>

                        <section>
                            <button className='btn-editar' onClick={() => setAbrirModal(true)}><h4>Editar</h4></button>
                        </section>
                    </div>
                ))}
                
            </div>
        <p className="footer-msg">Exibindo {clientes.length} clientes</p>

        <EditarUsers isOpen={abrirModal} setIsOpen={() => setAbrirModal(!abrirModal)} />

        </div>
    )
}