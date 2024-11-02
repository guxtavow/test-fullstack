export const ApiCriarNovosClientes = async(novoUsuario) => {
    try{
        const response = await fetch('http://localhost:3001/NovosClientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoUsuario),
        })
    
        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message || response.statusText)
        }
    
        const data = await response.json()
        console.log(data)
        return data
    }catch(err){
        console.error(`Erro na API de criação de usuarios: ${err.message}`)
        throw err
    }
    }