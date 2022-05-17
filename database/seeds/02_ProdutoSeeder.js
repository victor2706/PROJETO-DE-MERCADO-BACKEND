'use strict'

/*
|--------------------------------------------------------------------------
| ProdutoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Produto = use('App/models/Produto')
class ProdutoSeeder {
  async run () {
    await Produto.createMany([
      {nome:'OREO', preco_fornecedor: 'R$0,50',validade_produto:'2022-06-12',codigo_produto:'356795',fornecedor_id:'7'},
      {nome:'TILAPIA', preco_fornecedor: 'R$1,80',validade_produto:'2021-05-20',codigo_produto:'921508',fornecedor_id:'6'},
      {nome:'MAÇÃ', preco_fornecedor: 'R$0,20',validade_produto:'2022-01-02',codigo_produto:'972436',fornecedor_id:'5'},
      {nome:'ALFACE', preco_fornecedor: 'R$0,50',validade_produto:'2022-06-12',codigo_produto:'504450',fornecedor_id:'4'},
      {nome:'FIGADO', preco_fornecedor: 'R$5,00',validade_produto:'2021-06-20',codigo_produto:'425123',fornecedor_id:'3'},
      {nome:'LEITE-INTEGRAL', preco_fornecedor: 'R$2,50',validade_produto:'2021-07-29',codigo_produto:'254297',fornecedor_id:'2'},
      {nome:'LAY´S', preco_fornecedor: 'R$3,00',validade_produto:'2021-12-01',codigo_produto:'384281',fornecedor_id:'1'}
    ])

  }
}

module.exports = ProdutoSeeder
