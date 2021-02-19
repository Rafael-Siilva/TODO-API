const { stat } = require("fs");

module.exports =  class Usuario{
    constructor(titulo, descricao, status, dataCriacao){
        this.nome =  titulo;
        this.email = descricao;
        this.senha = status;
        this.dataCriacao = dataCriacao;
    };
};