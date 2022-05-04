'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {
  static get table() {
    return 'common.acompanhamentos'
  }

  categoria() {
    return this.belongsTo('App/Models/Common/Categoria')
  }

}

module.exports = Produto
