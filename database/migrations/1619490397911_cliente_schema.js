'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments()
      table.string('nome', 100)
      table.bigInteger('cpf', 13).notNullable()
      table.integer('compra_id').references('id').inTable('compras').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClienteSchema
