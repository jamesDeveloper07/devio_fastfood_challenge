'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Adicional extends Model {
  static get table() {
    return 'common.adicionais'
  }

  categoria() {
    return this.belongsTo('App/Models/Common/Categoria')
  }

}

module.exports = Adicional
