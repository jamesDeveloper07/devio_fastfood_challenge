'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProdutoPedido extends Model {
  static get table() {
    return 'common.produtos_pedido'
  }

  pedido() {
    return this.belongsTo('App/Models/Common/Pedido')
  }

  produto() {
    return this.belongsTo('App/Models/Common/Produto')
  }

  adicionais() {
    return this.hasMany('App/Models/Common/AdicionalProdutoPedido')
  }

}

module.exports = ProdutoPedido
