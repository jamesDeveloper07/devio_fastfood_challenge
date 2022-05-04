'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {
  static get table() {
    return 'common.categorias'
  }

  produtos() {
    return this.hasMany('App/Models/Common/Produto')
  }

  adicionais() {
    return this.hasMany('App/Models/Common/Adicional')
  }

}

module.exports = Categoria
