'use strict'

/*
|--------------------------------------------------------------------------
| LojaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Loja = use('App/models/Loja')
class LojaSeeder {
  async run () {
    await Loja.createMany([
      {nome:'MERCEARIA DO SEU JOÃO',cnpj:'4/2045-75', estoque_id:'1'},
      {nome:'MERCEARIA DO SEU Marcos',cnpj:'4/2045-75', estoque_id:'2'},
      {nome:'MERCEARIA DO SEU Francisco',cnpj:'4/2045-75', estoque_id:'3'},
      {nome:'MERCEARIA DO Furão',cnpj:'4/2045-75', estoque_id:'4'},
      {nome:'Super Mercado Dia-Dia',cnpj:'4/2045-75', estoque_id:'5'},
      {nome:'super Mercado Tático',cnpj:'4/2045-75', estoque_id:'6'},
      {nome:'Super Mercado Veneza',cnpj:'4/2045-75', estoque_id:'7'},
    ])
  }
}

module.exports = LojaSeeder
