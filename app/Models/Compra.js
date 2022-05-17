'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Compra extends Model {
    
    static getCamposCadastro(){
        return[
            'valor_total',
            'forma_pagamnto',
            'data',
            'desconto',
            'loja_id',
            'estoque_id'
        ]
    }
    clientes()
    {
        return this.hasMany('App/Models/Cliente')
    }
    estoque()
    {
        return this.belongsTo('App/Models/Estoque')
    }
    loja()
    {
        return this.belongsTo('App/Models/Loja')
    }
}

module.exports = Compra
