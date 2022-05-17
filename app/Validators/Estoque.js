'use strict'

class Estoque {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:2',
      Valor_altproduto: 'required',
      validade_produto: 'required',
      quantidade:'required',
      codigo_produto: 'required|max:10|min:4',
      fornecedor_id:'integer|required'
    }
  }
  async fails (erroMessagens) {
    return this.ctx.response.status(400).send(erroMessagens)
  }
}

module.exports = Estoque
