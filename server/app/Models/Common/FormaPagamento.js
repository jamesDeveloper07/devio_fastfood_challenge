'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FormaPagamento extends Model {
  static get table() {
    return 'common.formas_pagamento'
  }
}

module.exports = FormaPagamento
