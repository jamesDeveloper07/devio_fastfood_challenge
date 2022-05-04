'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AcompanhamentoProdutoPedido extends Model {
  static get table() {
    return 'common.acompanhamentos_produto_pedido'
  }

  produto() {
    return this.belongsTo('App/Models/Common/ProdutoPedido')
  }

  acompanhamento() {
    return this.belongsTo('App/Models/Common/AcompanhamentoProdutoPedido')
  }

}

module.exports = AcompanhamentoProdutoPedido
