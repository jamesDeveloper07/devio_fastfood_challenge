'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AcompanhamentosProdutoPedidoSchema extends Schema {
  up() {
    this.withSchema('common').create('acompanhamentos_produto_pedido', (table) => {
      table.increments()
      table.integer('produto_id').notNullable().unsigned().references('id').inTable('common.produtos_pedido')
      table.integer('acompanhamento_id').notNullable().unsigned().references('id').inTable('common.acompanhamentos')
      table.timestamp('created_at').defaultTo(this.fn.now()).notNullable()
      table.timestamp('deleted_at')
    })
  }

  down() {
    this.withSchema('common').drop('acompanhamentos_produto_pedido')
  }
}

module.exports = AcompanhamentosProdutoPedidoSchema
