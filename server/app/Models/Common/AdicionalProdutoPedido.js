'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AdicionalProdutoPedido extends Model {
  static get table() {
    return 'common.adicionais_produto_pedido'
  }

  static get updatedAtColumn() {
    return null
  }

  produtoPedido() {
    return this.belongsTo('App/Models/Common/ProdutoPedido')
  }

  adicional() {
    return this.belongsTo('App/Models/Common/Adicional')
  }

}

module.exports = AdicionalProdutoPedido
