import './NovoUser.css'
import { useState } from 'react'
import InputMask from 'react-input-mask'
import { ApiCriarNovosClientes } from '../../services/apiCriarNovosClientes'
import { useNavigate } from 'react-router-dom'

export default function NovoUser() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [celular, setCelular] = useState('')
    const [status, setStatus] = useState('')
    const [erro, setErro] = useState('')

    const navegar = useNavigate()
    const Links = (path) => {
        navegar(path)
    }

    const CriarNovoCliente = async(e) =>{
        e.preventDefault()
        

        const novoUsuario = {
            nome:nome,
            email:email,
            cpf:cpf,
            celular:celular,
            status:status
        }


        const cpfApenasNumeros = cpf.replace(/\D/g, '')
        const celularApenasNumeros = celular.replace(/\D/g, '')
                
        if(novoUsuario.nome === '' || novoUsuario.email === '' || novoUsuario.cpf === '' || novoUsuario.celular === '' || novoUsuario.status === ''){
            setErro(novoUsuario.erro)
            return 'Preencha os campos para prosseguir'
        }    
        if (cpfApenasNumeros.length !== 11) {
            setErro('CPF inválido.')
            return;
        }
        if (celularApenasNumeros.length !== 11) {
            setErro('Celular inválido.')
            return;
        }


        try{
            const response = await ApiCriarNovosClientes(novoUsuario)

            if(response.erro){
                setErro(response.erro)
                return
            }

            console.log('Usuario criado com sucesso! ', response)
            //limpar os campos logo após cadastro
            setNome('')
            setEmail('')
            setCpf('')
            setCelular('')
            setStatus('')
            setErro('')
            alert('Usuario criado com sucesso!')
        }catch(err){   
            console.error(err)
        }
    }
    



    return (
        <div className="NovoUser-page">
        <h1 id='TituloPainel'> <i class="bi bi-person" style={{marginRight: '20px'}}></i>Painel de clientes</h1> 
        <hr style={{width: '90%', opacity: '0.5'}}/> 
        <span id='cabecalho'>
            <section id='textosCabecalho'>
                <h2 id='SubTituloPainel'> Novo usuário</h2>
                <p id='textoExplicacao'> Informe os campos a seguir para criar um novo usuário.</p>     
            </section>
        </span>

        <div className="NovoUser-forms">
            <form className="form-cadastro" onSubmit={CriarNovoCliente}>
                <div className="NovoUser-input">
                    <input type="text" id="nome" name="nome" placeholder="Nome e Sobrenome completo" required value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="NovoUser-input">
                    <input type="email" id="email" name="email" placeholder="Email" 
                    required value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="NovoUser-input">
                    <InputMask mask="999.999.999-99" type="cpf" id="cpf" name="cpf" placeholder="CPF" 
                    required value={cpf} 
                    onChange={(e) => setCpf(e.target.value)}
                    style={{ borderColor: erro.includes('CPF') ? 'red' : '' }}
                    />    
                </div>
                <div className="NovoUser-input">
                    <InputMask mask="(99) 99999-9999" type="tel" id="celular" name="celular" placeholder="Telefone" 
                    required value={celular} 
                    onChange={(e) => setCelular(e.target.value)}
                    style={{ borderColor: erro.includes('Celular') ? 'red' : '' }}
                    />
                </div>
                <div className="NovoUser-input">
                    <select id="status" name="status" required value={status} onChange={(e) => setStatus(e.target.value)}> 
                        <option value="" disabled selected>Status</option>       
                        <option value="Ativo">Ativo</option>
                        <option value="Inativo">Inativo</option>
                        <option value="Aguardando">Aguardando Ativação</option>
                        <option value="Desativado">Desativado</option>
                    </select>
                </div>
                {erro && <p style={{ color: 'red' }}>{erro}</p>}
                <section className="botoes">
                    <button className='btn-criar' id='btn-cadastro' type='submit'>Criar</button>
                    <button className='btn-voltar' id='btn-cadastro' type='button' onClick={() => Links('/')}>Voltar</button>
                </section>
            </form>
        </div>

    </div>
    )
}