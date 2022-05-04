'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pedido extends Model {
  static get table() {
    return 'common.pedidos'
  }

  produtos() {
    return this.hasMany('App/Models/Common/ProdutoPedido')
  }

}

module.exports = Pedido
