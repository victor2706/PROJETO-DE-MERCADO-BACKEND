'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Estoque extends Model {
    static getCamposCadastro(){
        return[
            'nome',
            'Valor_altproduto',
            'validade_produto',
            'quantidade',
            'codigo_produto',
            'fornecedor_id'
        ]
    }
    lojas()
    {
        return this.hasMany('App/Models/Loja')
    }
    fornecedor(){
        return this.belongsTo('App/Models/Fornecedor')
    }
}

module.exports = Estoque
