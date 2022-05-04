'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FormasPagamentoPedidoSchema extends Schema {
  up() {
    this.withSchema('common').create('formas_pagamento_pedido', (table) => {
      table.increments()
      table.integer('pedido_id').notNullable().unsigned().references('id').inTable('common.pedidos')
      table.integer('forma_pagamento_id').notNullable().unsigned().references('id').inTable('common.formas_pagamento')
      table.decimal('valor', 12, 2).notNullable()
      table.decimal('troco', 12, 2)
      table.timestamp('created_at').defaultTo(this.fn.now()).notNullable()
      table.timestamp('updated_at').defaultTo(this.fn.now()).notNullable()
      table.timestamp('deleted_at')
    })
  }

  down() {
    this.withSchema('common').drop('formas_pagamento_pedido')
  }
}

module.exports = FormasPagamentoPedidoSchema
