'use strict'

class Compra {
  get rules () {
    return {
      // validation rules
      valor_total:'required',
      forma_pagamnto:'required',
      data:'date',
      desconto:'max:3', //exemplo: de 1% até 99%      //100% ocorrerá um erro!!!!!
      loja_id: 'required|integer',
      estoque_id: 'required|integer',
      cliente_id: 'required|integer'
    }
  }
  async fails (erroMessagens) {
    return this.ctx.response.status(400).send(erroMessagens)
  }
}

module.exports = Compra
