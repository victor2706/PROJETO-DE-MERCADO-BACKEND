'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LojaSchema extends Schema {
  up () {
    this.create('lojas', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.bigInteger('cnpj', 13).notNullable()
      table.integer('estoque_id').references('id').inTable('estoques').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('lojas')
  }
}

module.exports = LojaSchema
