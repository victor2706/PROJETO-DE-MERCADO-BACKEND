'use strict'
const Fornecedores = use('App/Models/Fornecedor')
class FornecedorController {

  async index ({ request, response, view }) {
    const {page,perPage} = request.all()
    return Fornecedores.query()
                       .paginate(page, perPage)
  }
  async store ({ request, response }) {
    const newfornecedor = request.only(
      ['nome','Cnpj','email','telefone','uf']
      )
    return await Fornecedores.create(newfornecedor)
  }

  async show ({ params, request, response, view }) {
    return await Fornecedores.query()
                             .with('estoques')
                             .where('id', params.id)
                             .first()
  }
  async update ({ params, request, response }) {
    const upfornecedores = await Fornecedores.findOrFail(params.id)
    const dados = request.only(
      ['nome','Cnpj','email','telefone','UF']
      )
      upfornecedores.merge(dados)
      await upfornecedores.save()
      return upfornecedores
  }

  async destroy ({ params, request, response }) {
    const destroyfornecedor = await Fornecedores.findOrFail(params.id)
    return await destroyfornecedor.delete();
  }
}

module.exports = FornecedorController
