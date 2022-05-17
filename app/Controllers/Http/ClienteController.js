'use strict'
const Clientes = use('App/Models/Cliente')
class ClienteController {

  async index ({ request, response, view }) {
    const {page,perPage} = request.all()
    return Clientes.query()
                   .paginate(page, perPage)
  }
  async store ({ request, params }) {
    const newcliente = request.only(['nome','cpf','compra_id'])
    return await Clientes.create(newcliente)
  }

  async show ({ params, request, response, view }) {
    return await Clientes.query()
                         .with('compra')
                         .where('id', params.id)
                         .first()
  }
  async update ({ params, request, response }) {
    const upcliente = await Clientes.findOrFail(params.id)
    const dados = request.only(
      ['cpf','compra_id']
      )

    upcliente.merge(dados)
    await upcliente.save()

    return upcliente
  }

  async destroy ({ params, request, response }) {
    const destroycliente = await Clientes.findOrFail(params.id)
    return await destroycliente.delete();
  }
}

module.exports = ClienteController
