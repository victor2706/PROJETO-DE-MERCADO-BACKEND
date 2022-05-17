'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Loja extends Model {
    static getCamposCadastro(){
        return[
            'nome',
            'cnpj',
            'estoque_id'
        ]
    }
    estoque(){
        return this.belongsTo('App/Models/Estoque')
    }
}

module.exports = Loja
