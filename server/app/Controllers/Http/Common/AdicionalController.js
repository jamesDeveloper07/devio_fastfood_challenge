'use strict'

const Adicional = use('App/Models/Common/Adicional');

class AdicionalController {

  async index({ request }) {
    const { id, nome, categoria_id } = request.all();
    const query = Adicional.query()

    if (id) {
      query.where({ id })
    } else {
      if (nome) {
        query.where('nome', 'ilike', `%${nome}%`)
      }
    }

    if (categoria_id) {
      query.where({ categoria_id })
    }

    query.with('categoria')

    query.orderBy('nome', 'asc')
    return await query.fetch()
  }

  async getById({ request }) {
    const { id } = request.only(['id']);

    const adicional = await Adicional.find(id);

    return adicional;
  }

}

module.exports = AdicionalController
