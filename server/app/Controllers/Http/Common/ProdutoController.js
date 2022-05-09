'use strict'

const Produto = use('App/Models/Common/Produto');

class ProdutoController {

  async index({ request }) {
    const { id, nome, descricao, categoria_id } = request.all();
    const query = Produto.query()

    if (id) {
      query.where({ id })
    } else {
      if (nome) {
        query.where('nome', 'ilike', `%${nome}%`)
      }else{
        if(descricao){
          if(Number(descricao)){
            query.whereRaw(`(id = ${descricao} or nome ilike '%${descricao}%' or descricao ilike '%${descricao}%')`)
          }else{
            query.whereRaw(`(nome ilike '%${descricao}%' or descricao ilike '%${descricao}%')`)
          }
        }
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
