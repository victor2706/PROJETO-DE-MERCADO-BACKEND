'use strict'
const Lojas = use('App/Models/Loja')
class LojaController {

  async index ({ request, response, view }) {
    const {page,perPage} = request.all()
    return Lojas.query()
                .paginate(page, perPage)

  }
  async store ({ request, response }) {
    const newloja = request.only(
      ['nome','cnpj','estoque_id']
      )
    return await Lojas.create(newloja)
  }

  async show ({ params, request, response, view }) {
    return await Lojas.query()
                      .with('estoque')
                      .where('id', params.id)
                      .first()
  }
  async update ({ params, request, response }) {
    const uplojas = await Lojas.findOrFail(params.id)
    const dados = request.only(
      ['nome','cnpj','estoque_id']
      )
      uplojas.merge(dados)
      await uplojas.save()
      return uplojas
  }

  async destroy ({ params, request, response }) {
    const destroyloja = await Lojas.findOrFail(params.id)
    return await destroyloja.delete();
  }
}

module.exports = LojaController
