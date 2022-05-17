'use strict'

/*
|--------------------------------------------------------------------------
| FornecedorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Fornecedor = use('App/models/Fornecedor')
class FornecedorSeeder {
  async run () {
    await Fornecedor.createMany([
      {id: 1,nome:'FABRICA LAY´S', Cnpj: '0/2305-58',email:'L.LIFE@gmail.com',telefone:'(11)3458-6750',uf:'SP'},
      {id: 2,nome:'MILK FACTORY', Cnpj: '4/6635-01',email:'A.vida@gmail.com',telefone:'(63)3012-8358',uf:'TO'},
      {id: 3,nome:'FAZENDA TOCA DO GADO', Cnpj: '8/2175-98',email:'A.vida@gmail.com',telefone:'(82)3741-5710',uf:'AL'},
      {id: 4,nome:'AGRI-COME', Cnpj: '1/4725-65',email:'A.vida@gmail.com',telefone:'(96)3330-6014',uf:'AP'},
      {id: 5,nome:'AGRONOMY-STATES', Cnpj: '4/9645-47',email:'A.vida@gmail.com',telefone:'(62)3925-2004',uf:'GO'},
      {id: 6,nome:'FISH SEA', Cnpj: '2/0265-35',email:'A.vida@gmail.com',telefone:'(75)3385-9865',uf:'BA'},
      {id: 7,nome:'GOOD COOKIE', Cnpj: '6/1431-64',email:'A.vida@gmail.com',telefone:'(62)3720-5920',uf:'GO'}
    ])
  }
}

module.exports = FornecedorSeeder
