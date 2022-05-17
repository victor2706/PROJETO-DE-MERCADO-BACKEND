'use strict'

class Loja {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:1',
      cnpj: 'required|integer|max:13|min:8',
      estoque_id: 'required|integer'
    }
  }
  get messagens (){
    return {
      'nome.required':'INSIRA O SEU NOME....',
      'nome.max':'VOCÊ ULTRAPASSOU O VALOR MAXIMO DE CARACTERES',
      'nome.min':'O CAMPO NÃO ATINGIU O VALOR MINIMO',
      'cnpj.required':'INSIRA O CNPJ....',
      'cnpj.max':'VOCÊ ULTRAPASSOU O VALOR MAXIMO DE CARACTERES', 
      'cnpj.min':'O CAMPO NÃO ATINGIU O VALOR MINIMO',
      'estoque_id.required': 'INSIRA O ID DO ESTOQUE....',
    }
  }
  async fails (erroMessagens) {
    return this.ctx.response.status(400).send(erroMessagens)
  }
}

module.exports = Loja
