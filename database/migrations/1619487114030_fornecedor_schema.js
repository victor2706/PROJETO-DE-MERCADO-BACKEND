'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FornecedorSchema extends Schema {
  up () {
    this.create('fornecedores', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.bigInteger('Cnpj', 18).notNullable()
      table.string('email', 100)
      table.string('telefone', 15)
      table.string('UF', 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('fornecedores')
  }
}

module.exports = FornecedorSchema
