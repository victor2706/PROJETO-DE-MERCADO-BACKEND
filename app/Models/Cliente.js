'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {

    static getCamposCadastro(){
        return[
            'nome',
            'cpf',
            'compra_id'
        ]
    }
    compra(){
        return this.belongsTo('App/Models/Compra')
    }
}

module.exports = Cliente
