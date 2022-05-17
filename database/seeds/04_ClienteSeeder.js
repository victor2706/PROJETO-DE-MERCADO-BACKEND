'use strict'

/*
|--------------------------------------------------------------------------
| ClienteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Cliente = use('App/models/Cliente')
class ClienteSeeder {
  async run () {
    await Cliente.createMany([
      {nome:'Adalberto de nobrega',cpf:'720.524.057-85',compra_id:'1'},
      {nome:'Jasmine ferreira',cpf:'410.614.985-36',compra_id:'3'},
      {nome:'Carlos santos',cpf:'045.865.159-32',compra_id:'4'},
      {nome:'Diana Alves',cpf:'104.324.147-08',compra_id:'2'},
      {nome:'Magnolia Sampaio',cpf:'963.248.368-41',compra_id:'5'},
      {nome:'Fagner Augusto',cpf:'937.345.248-68',compra_id:'6'},
      {nome:'Irineu Fagundes',cpf:'513.278.986-12',compra_id:'7'}
    ])
  }
}

module.exports = ClienteSeeder
