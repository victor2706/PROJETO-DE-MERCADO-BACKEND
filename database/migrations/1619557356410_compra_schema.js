'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompraSchema extends Schema {
  up () {
    this.create('compras', (table) => {
      table.increments()
      table.float('valor_total').notNullable()
      table.float('forma_pagamnto').notNullable() 
      //Cartão de debito ou credito,pix ou dinheiro.
      table.date('data')
      table.float('desconto')
      //5% quando é comprado mais de 5 itens do mesmo produto.
      table.integer('loja_id').references('id').inTable('lojas').unsigned().notNullable()
      table.integer('estoque_id').references('id').inTable('estoques').unsigned().notNullable()
      table.integer('cliente_id').references('id').inTable('clientes').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('compras')
  }
}

module.exports = CompraSchema
