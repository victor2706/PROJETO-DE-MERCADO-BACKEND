'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {
    static getCamposCadastro(){
        return[
            'nome',
            'preco_fornecedor',
            'validade_produto',
            'codigo_produto',
            'fornecedor_id'
        ]
    }
    fornecedor(){
        return this.belongsTo('App/Models/Fornecedor')
    }
}

module.exports = Produto
