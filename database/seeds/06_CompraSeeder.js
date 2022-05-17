'use strict'

/*
|--------------------------------------------------------------------------
| CompraSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Compra = use('App/models/Compra')
class CompraSeeder {
  async run () {
    await Compra.createMany([
      {valor_total:'R$8,00', forma_pagamnto: 'Cartão',data:'2021-06-27',desconto:'10%',loja_id:'1',estoque_id:'1',cliente_id:'1'},
      {valor_total:'R$10,00', forma_pagamnto: 'DINHEIRO',data:'2020-12-10',desconto:'10%',loja_id:'2',estoque_id:'3',cliente_id:'3'},
      {valor_total:'R$50,00', forma_pagamnto: 'DINHEIRO',data:'2021-10-20',desconto:'10%',loja_id:'3',estoque_id:'2',cliente_id:'4'},
      {valor_total:'R$16,00', forma_pagamnto: 'ALIMENTAÇÃO',data:'2021-03-22',desconto:'10%',loja_id:'4',estoque_id:'7',cliente_id:'2'},
      {valor_total:'R$19,60', forma_pagamnto: 'PIX',data:'2021-09-17',desconto:'10%',loja_id:'5',estoque_id:'5',cliente_id:'5'},
      {valor_total:'R$1,80', forma_pagamnto: 'DEBITO',data:'2021-09-17',desconto:'10%',loja_id:'6',estoque_id:'4',cliente_id:'6'},
      {valor_total:'R$11,00', forma_pagamnto: 'Filho do dono',data:'2021-09-17',desconto:'10%',loja_id:'7',estoque_id:'6',cliente_id:'7'}
    ])
  }
}

module.exports = CompraSeeder
