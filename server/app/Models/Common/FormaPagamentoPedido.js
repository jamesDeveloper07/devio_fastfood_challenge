'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FormaPagamentoPedido extends Model {
  static get table() {
    return 'common.formas_pagamento_pedido'
  }

  pedido() {
    return this.belongsTo('App/Models/Common/Pedido')
  }

  formaPagamento() {
    return this.belongsTo('App/Models/Common/FormaPagamento')
  }

}

module.exports = FormaPagamentoPedido
