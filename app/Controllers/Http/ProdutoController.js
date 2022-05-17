'use strict'
const Produto = use('App/Models/Produto')
class ProdutoController {

  async index ({ request, response, view }) {
    const {page,perPage} = request.all()
    return Produto.query()
                .paginate(page, perPage)
  }
  async store ({ request, response }) {
    const newprodutos = request.only(
      ['nome','preco_fornecedor','validade_produto','codigo_produto','fornecedor_id']
      )
    return await Produto.create(newprodutos)
  }

  async show ({ params, request, response, view }) {
    return await Produto.query()
                         .with('fornecedor')
                         .where('id', params.id)
                         .first()
                        }
  async update ({ params, request, response }) {
    const uprodutos = await Produto.findOrFail(params.id)
    const dados = request.only(
      ['nome','preco_fornecedor','validade_produto','codigo_produto','fornecedor_id']
      )
      uprodutos.merge(dados)
      await uprodutos.save()
      return uprodutos
  }

  async destroy ({ params, request, response }) {
    const destroyproduto = await Produto.findOrFail(params.id)
    return await destroyproduto.delete();
  }
}

module.exports = ProdutoController
