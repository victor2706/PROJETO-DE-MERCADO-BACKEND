'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.string('nome', 100)
      table.float('preco_fornecedor')
      table.date('validade_produto')
      table.bigInteger('codigo_produto', 10).notNullable()
      table.integer('fornecedor_id').references('id').inTable('fornecedores').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
