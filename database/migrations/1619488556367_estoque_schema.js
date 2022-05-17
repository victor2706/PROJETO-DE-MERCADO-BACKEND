'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstoqueSchema extends Schema {
  up () {
    this.create('estoques', (table) => {
      table.increments()
      table.string('nome', 100)
      table.float('Valor_altproduto').notNullable()
      table.date('validade_produto')
      table.string('quantidade')
      table.bigInteger('codigo_produto', 10).notNullable()
      table.integer('fornecedor_id').references('id').inTable('fornecedores').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('estoques')
  }
}

module.exports = EstoqueSchema
