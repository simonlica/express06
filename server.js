// APRIMORAR  A APRESENTAÇÃO DOS RESULTADOS

const express = require('express')
const mysql =require('./mysql_config')

const app = express();
app.listen(3000,()=>{
    console.log("Servidor no ar ")
})

//mysql connection
const connection = mysql.createConnection(mysql_config)

//criar uma função que ira parametrizar as respostas das api
//para utilizar todos os endpoints vamos uma função para isso

//criando um roteameto

//consumindo cors

app.get('/',(req,res)=>{
    //estabelecer a conexão para executar a query
    //vamos consumir a functions criada
    connection.quiry("SELECT * FROM tasks",(err,results)=>{
        if(err){
            res.json(functions.response('error','Erro:'+err.message))
        }else{
            res.json(functions.response('sucess','tasks listadas com sucesso', results))
        }
    })
})