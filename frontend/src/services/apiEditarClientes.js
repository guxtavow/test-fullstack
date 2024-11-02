export const ApiEditarClientes = async(id, dados) => {
    try{
        const response = await fetch(`http://localhost:3001/atualizarCliente/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(dados),
        })

        if(!response.ok){
            throw new Error('Erro ao atualizar a api: ', response.statusText)
        }
    
        const data = await response.json()
        return data
    }catch(err){
        console.error(`Erro na API: ${err.message}`)
        throw err
    }
    }