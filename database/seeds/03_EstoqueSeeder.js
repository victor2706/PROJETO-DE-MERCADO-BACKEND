'use strict'

/*
|--------------------------------------------------------------------------
| EstoqueSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Estoque = use('App/models/Estoque')
class EstoqueSeeder {
  async run () {
    await Estoque.createMany([
      {nome:'OREO', Valor_altproduto: 'R$2,68',validade_produto:'2022-06-12',quantidade:'2500',codigo_produto:'356795',fornecedor_id:'7'},
      {nome:'TILAPIA', Valor_altproduto: 'R$25,00',validade_produto:'2021-05-20',quantidade:'60',codigo_produto:'921508',fornecedor_id:'6'},
      {nome:'MAÇÃ', Valor_altproduto: 'R$2,00',validade_produto:'2022-01-02',quantidade:'15000',codigo_produto:'972436',fornecedor_id:'5'},
      {nome:'ALFACE', Valor_altproduto: 'R$1,80',validade_produto:'2022-06-12',quantidade:'450',codigo_produto:'504450',fornecedor_id:'4'},
      {nome:'FIGADO', Valor_altproduto: 'R$9,80',validade_produto:'2021-06-20',quantidade:'500',codigo_produto:'425123',fornecedor_id:'3'},
      {nome:'LEITE-INTEGRAL', Valor_altproduto: 'R$5,50',validade_produto:'2021-07-29',quantidade:'3000',codigo_produto:'254297',fornecedor_id:'2'},
      {nome:'LAY´S', Valor_altproduto: 'R$8,00',validade_produto:'2021-12-01',quantidade:'250',codigo_produto:'384281',fornecedor_id:'1'},
    ])
  }
}

module.exports = EstoqueSeeder
