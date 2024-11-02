import { useState } from 'react'
import './EditarUsers.css'

export default function EditarUsers({isOpen, setIsOpen}) {

    if(isOpen){
        return (
            <div className="EditarUsers">
                <div className='tela-edicao'>
                    
                    <div className="EditarUsers-page">
                        <header style={{height:'40px', display:'flex', alignItems:'center', justifyContent:'space-between', margin:'60px'}}><h1 id='TituloPainel-edicao'> <i className="bi bi-person" style={{marginRight: '20px'}}></i>Cliente X</h1> <i className="bi bi-x-lg" style={{cursor:'pointer',fontSize:'30px'}} onClick={() => setIsOpen(!isOpen)}></i></header>
                        <hr style={{width: '90%', opacity: '0.5'}}/> 
                        <span id='cabecalho-edicao'>
                            <section id='textosCabecalho-edicao'>
                                <h2 id='SubTituloPainel-edicao'> Editar usuário</h2>
                                <p id='textoExplicacao-edicao'> Edite o usuário selecionado e depois salve as alterações.</p>     
                            </section>
                        </span>

                        <div className="EditarUsers-forms">
                            <form className="form-editar">
                                <div className="EditarUser-input">
                                    <input type="text" id="nome" name="nome" placeholder="Nome" required />
                                </div>
                                <div className="EditarUser-input">
                                    <input type="email" id="email" name="email" placeholder="Email" required/>
                                </div>
                                <div className="EditarUser-input">
                                    <input type="cpf" id="cpf" name="cpf" placeholder="CPF" required/>    
                                </div>
                                <div className="EditarUser-input">
                                    <input type="tel" id="celular" name="celular" placeholder="Telefone" required/>
                                </div>
                                <div className="EditarUser-input">
                                    <select id="status" name="status" required> 
                                        <option value="" disabled selected>Status</option>       
                                        <option value="ativo">Ativo</option>
                                        <option value="inativo">Inativo</option>
                                        <option value="aguardando">Aguardando Ativação</option>
                                        <option value="desativado">Desativado</option>
                                    </select>
                                </div>
                                <section className="botoes-editar">
                                    <button className='btn-Editar' id='btn-edicao'>Editar</button>
                                </section>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }else{
        return null
    }

}
