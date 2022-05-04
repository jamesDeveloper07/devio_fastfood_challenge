'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FormasPagamentoSchema extends Schema {
  up() {
    this.withSchema('common').create('formas_pagamento', (table) => {
      table.increments()
      table.string('nome', 200).notNullable()
      table
        .enu('status', ['ativo', 'inativo'])
        .notNullable()
        .comment('Coluna referente ao status do acompanhamento, que pode estar ativo ou inativo')
      table.timestamp('created_at').notNullable().defaultTo(this.fn.now())
      table.timestamp('updated_at').notNullable().defaultTo(this.fn.now())
      table.timestamp('deleted_at')
    })

  }

  down() {
    this.withSchema('common').drop('formas_pagamento')
  }

}

module.exports = FormasPagamentoSchema
