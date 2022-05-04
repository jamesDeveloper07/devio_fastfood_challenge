'use strict'

const Produto = use('App/Models/Common/Produto');

class ProdutoController {

  async index({ request }) {
    const { id, nome, categoria_id } = request.all();
    const query = Produto.query()

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

    const produto = await Produto.find(id);

    return produto;
  }

}

module.exports = ProdutoController
