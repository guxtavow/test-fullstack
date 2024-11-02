import './NovoUser.css'

export default function NovoUser() {
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
            <form className="form-cadastro">
                <div className="NovoUser-input">
                    <input type="text" id="nome" name="nome" placeholder="Nome" required />
                </div>
                <div className="NovoUser-input">
                    <input type="email" id="email" name="email" placeholder="Email" required/>
                </div>
                <div className="NovoUser-input">
                    <input type="cpf" id="cpf" name="cpf" placeholder="CPF" required/>    
                </div>
                <div className="NovoUser-input">
                    <input type="tel" id="celular" name="celular" placeholder="Telefone" required/>
                </div>
                <div className="NovoUser-input">
                    <select id="status" name="status" required> 
                        <option value="" disabled selected>Status</option>       
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                        <option value="aguardando">Aguardando Ativação</option>
                        <option value="desativado">Desativado</option>
                    </select>
                </div>
                <section className="botoes">
                    <button className='btn-criar' id='btn-cadastro'>Criar</button>
                    <button className='btn-voltar' id='btn-cadastro'>Voltar</button>
                </section>
            </form>
        </div>

    </div>
    )
}