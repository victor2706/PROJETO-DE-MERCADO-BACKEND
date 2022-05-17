'use strict'

class Cliente {
  get rules () {
    return {
      // validation rules
      nome: 'max:100',
      cpf: 'required',
      compra_id:'integer|required'
    }
  }
  async fails (erroMessagens) {
    return this.ctx.response.status(400).send(erroMessagens)
  }
}

module.exports = Cliente
