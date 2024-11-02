import { useEffect, useState } from 'react'
import './EditarUsers.css'
import InputMask from 'react-input-mask'
import { ApiEditarClientes} from '../../services/apiEditarClientes'

export default function EditarUsers({isOpen, setIsOpen, cliente, refreshClientes}) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [celular, setCelular] = useState('')
    const [status, setStatus] = useState('')
    const [erro, setErro] = useState('')


    useEffect(() => {
        if(cliente) {
            console.log(cliente)
            setNome(cliente.nome)
            setEmail(cliente.email)
            setCpf(cliente.cpf)
            setCelular(cliente.celular)
            setStatus(cliente.status)
        }
    }, [cliente, isOpen])

    const EditarCliente = async(e) => {
        e.preventDefault()
        const DadosAtualizados = {
            nome:nome,
            email:email,   
            cpf:cpf,
            celular:celular,
            status:status
        }

        
        const cpfApenasNumeros = cpf.replace(/\D/g, '')
        const celularApenasNumeros = celular.replace(/\D/g, '')
                
        if (cpfApenasNumeros.length !== 11) {
            setErro('CPF inválido.')
            return;
        }
        if (celularApenasNumeros.length !== 11) {
            setErro('Celular inválido.')
            return;
        }

        try{
            const response = await ApiEditarClientes(cliente.id, DadosAtualizados)

            if(response.erro){
                setErro(response.erro)
                return
            }

            alert('Dados atualizados com sucesso!')
            setErro('')
            refreshClientes();
            setIsOpen(false)
        }catch(err){
            console.log('Erro na atualização de usuario: ',err)
            alert('Erro na atualização de usuario!')
        }


    }

    if(isOpen){
        return (
            <div className="EditarUsers">
                <div className='tela-edicao'>
                    
                    <div className="EditarUsers-page">
                        <header style={{height:'40px', display:'flex', alignItems:'center', justifyContent:'space-between', margin:'60px'}}>
                            <h1 id='TituloPainel-edicao'>
                                <i className="bi bi-person" style={{marginRight: '20px'}}></i>Cliente {nome}
                            </h1> 
                            <i className="bi bi-x-lg" style={{cursor:'pointer',fontSize:'30px'}} onClick={() => setIsOpen(!isOpen)}></i>
                        </header>
                        <hr style={{width: '90%', opacity: '0.5'}}/> 
                        <span id='cabecalho-edicao'>
                            <section id='textosCabecalho-edicao'>
                                <h2 id='SubTituloPainel-edicao'> Editar usuário</h2>
                                <p id='textoExplicacao-edicao'> Edite o usuário selecionado e depois salve as alterações.</p>     
                            </section>
                        </span>

                        <div className="EditarUsers-forms">
                            <form className="form-editar" onSubmit={EditarCliente}>
                                <div className="EditarUser-input">
                                    <input type="text" id="nome" name="nome" placeholder="Nome" required 
                                     value={nome}
                                     onChange={(e) => setNome(e.target.value)}
                                    />
                                </div>
                                <div className="EditarUser-input">
                                    <input type="email" id="email" name="email" placeholder="Email" required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="EditarUser-input">
                                    <InputMask  mask="999.999.999-99" type="cpf" id="cpf" name="cpf" placeholder="CPF" required
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                    style={{ borderColor: erro.includes('CPF') ? 'red' : '' }}
                                    />    
                                </div>
                                <div className="EditarUser-input">
                                    <InputMask mask="(99)99999-9999" type="tel" id="celular" name="celular" placeholder="Telefone" required
                                    value={celular}
                                    onChange={(e) => setCelular(e.target.value)}
                                    style={{ borderColor: erro.includes('Celular') ? 'red' : '' }}
                                    />
                                </div>
                                <div className="EditarUser-input">
                                    <select id="status" name="status" required value={status} onChange={(e) => setStatus(e.target.value)}> 
                                        <option value="" disabled>Status</option>       
                                        <option value="Ativo">Ativo</option>
                                        <option value="Inativo">Inativo</option>
                                        <option value="Aguardando">Aguardando Ativação</option>
                                        <option value="Desativado">Desativado</option>
                                    </select>
                                </div>

                                {erro && <p style={{ color: 'red' }}>{erro}</p>}

                                <section className="botoes-editar">
                                    <button className='btn-Editar' id='btn-edicao' type='submit'>Editar</button>
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
