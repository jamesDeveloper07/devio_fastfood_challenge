'use strict'

const FormaPagamento = use('App/Models/Common/FormaPagamento');

class FormaPagamentoController {

  async index({ request }) {
    const { nome } = request.all();
    const query = FormaPagamento.query()
    if (nome) {
      query.where({ nome })
    }
    query.orderBy('nome', 'asc')
    return await query.fetch()
  }

}

module.exports = FormaPagamentoController
