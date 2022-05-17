'use strict'

class Produto {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:2',
      preco_fornecedor: 'required|min:3', //adiconar o R$ e só depois o valor!!!!
      validade_produto: 'date|max:10',
      codigo_produto: 'required|max:10|min:4',
      fornecedor_id: 'required'
    }
  }
  async fails (messagens) {
    return this.ctx.response.status(400).send(messagens)
  }
}

module.exports = Produto
