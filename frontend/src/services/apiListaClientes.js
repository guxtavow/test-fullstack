export const ApiListaClientes = async() => {
try{
    const response = await fetch('http://localhost:3001/clientes')

    if(!response.ok){
        throw new Error('Erro ao buscar a api: ', response.statusText)
    }

    const data = response.json()
    return data
}catch(err){
    console.error(`Erro na API: ${err.message}`)
    throw err
}
}