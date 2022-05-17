'use strict'
const Estoques = use('App/Models/Estoque')
class EstoqueController {

  async index ({ request, response, view }) {
    const {page,perPage} = request.all()
    return Estoques.query()
                   .paginate(page, perPage)
  }
  async store ({ request, response }) {
    const newestoque = request.only(
      ['nome','Valor_altproduto','validade_produto','quantidade','codigo_produto','fornecedor_id']
      )
    return await Estoques.create(newestoque)
  }
  async show ({ params, request, response, view }) {
    return await Estoques.query()
                         .with('fornecedor')
                         .with('lojas')
                         .where('id', params.id)
                         .first()
  }
  async update ({ params, request, response }) {
    const upestoque = await Estoques.findOrFail(params.id)
    const dados = request.only(
      ['nome','Valor_altproduto','validade_produto','quantidade','codigo_produto','fornecedor_id']
      )
      upestoque.merge(dados)
    await upestoque.save()
    return upestoque
  }

  async destroy ({ params, request, response }) {
    const destroyestoque = await Estoques.findOrFail(params.id)
    return await destroyestoque.delete();
  }
}

module.exports = EstoqueController
