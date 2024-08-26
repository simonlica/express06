// criar uma função para parametrizar as respostas

function response(status, menssage, data=null){
    return {
        status,
        menssage,
        data,
        timestamp: new Date().getTime()
    }
}

module.exports={
    response
}