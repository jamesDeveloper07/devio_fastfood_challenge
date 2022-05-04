'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdicionaisProdutoPedidoSchema extends Schema {
  up() {
    this.withSchema('common').create('adicionais_produto_pedido', (table) => {
      table.increments()
      table.integer('produto_pedido_id').notNullable().unsigned().references('id').inTable('common.produtos_pedido')
      table.integer('adicional_id').notNullable().unsigned().references('id').inTable('common.adicionais')
      table.timestamp('created_at').defaultTo(this.fn.now()).notNullable()
      table.timestamp('deleted_at')
    })
  }

  down() {
    this.withSchema('common').drop('adicionais_produto_pedido')
  }
}

module.exports = AdicionaisProdutoPedidoSchema
