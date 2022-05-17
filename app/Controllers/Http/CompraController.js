'use strict'

const Compras = use('App/Models/Compra')

class CompraController {
//

  async index ({ request, response, view }) {
    const {page,perPage} = request.all()
    return Compras.query()
                  .paginate(page, perPage)
  }

//

  async store ({ request, response }) {
    const newcompras = request.only(
      ['valor_total','forma_pagamnto','data','desconto','loja_id','estoque_id','cliente_id']
      )
    return await Compras.create(newcompras)
  }
//
  async show ({ params, request, response, view }) {
    return await Compras.query()
                        .with('clientes')
                        .where('id', params.id)
                        .first()
  }
//
  async update ({ params, request, response }) {
    const upcompras = await Compra.findOrFail(params.id)
    const dados = request.only(
      ['valor_total','forma_pagamnto','data','desconto','loja_id','estoque_id','cliente_id']
      )
    upcompras.merge(dados)
    await upcompras.save()
    return upcompras
  }
//
  async destroy ({ params, request, response }) {
    const destroycompra = await Compras.findOrFail(params.id)
    return await destroycompra.delete();
  }
//
}

module.exports = CompraController
