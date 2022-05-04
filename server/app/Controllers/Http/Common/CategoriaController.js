'use strict'

const Categoria = use('App/Models/Common/Categoria');

class CategoriaController {

  async index({ request }) {
    const { nome } = request.all();
    const query = Categoria.query()
    if (nome) {
      query.where({ nome })
    }
    query.orderBy('nome', 'asc')
    return await query.fetch()
  }

}

module.exports = CategoriaController
