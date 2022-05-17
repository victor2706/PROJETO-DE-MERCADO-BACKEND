'use strict'

class Fornecedor {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:2',
      Cnpj: 'max:18|min:8',
      email: 'max:100',
      telefone: 'max:15',
      UF: 'max:2'
    }
  }
  async fails (erroMessagens) {
    return this.ctx.response.status(400).send(erroMessagens)
  }
}

module.exports = Fornecedor
