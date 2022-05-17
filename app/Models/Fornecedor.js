'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Fornecedor extends Model {
    static get table(){
        return 'fornecedores'
    }
    static getCamposCadastro(){
        return[
            'nome',
            'Cnpj',
            'email',
            'telefone',
            'UF'
        ]
    }
    estoques()
    {
        return this.hasMany('App/Models/Estoque')
    }
    produtos()
    {
        return this.hasMany('App/Models/Produto')
    }

}

module.exports = Fornecedor
