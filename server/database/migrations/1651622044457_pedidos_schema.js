'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidosSchema extends Schema {

  up() {
    this.withSchema('common').create('pedidos', (table) => {
      table.increments()
      table.string('codigo', 15).notNullable()
      table.string('nome_cliente', 200).notNullable()
      table.string('contato_cliente', 200)

      table
        .enu('status', ['ativo', 'cancelado'])
        .notNullable()
        .comment('Coluna referente ao status do pedido, que pode estar ativo ou cancelado')

      table.integer('user_id').notNullable().unsigned().references('id').inTable('security.users')

      table.decimal('valor_total', 12, 2).notNullable()
      table.decimal('valor_pagamento', 12, 2).notNullable()
      table.decimal('troco', 12, 2).notNullable()

      table.timestamp('created_at').defaultTo(this.fn.now()).notNullable()
      table.timestamp('ready_at')
      table.timestamp('paid_at')
      table.timestamp('delivered_at')
      table.timestamp('updated_at').defaultTo(this.fn.now()).notNullable()
      table.timestamp('deleted_at')
    })

  }

  down() {
    this.withSchema('common').drop('pedidos')
  }
}

module.exports = PedidosSchema
