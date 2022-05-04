'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutosPedidoSchema extends Schema {

  up() {
    this.withSchema('common').create('produtos_pedido', (table) => {
      table.increments()
      table.integer('pedido_id').notNullable().unsigned().references('id').inTable('common.pedidos')
      table.integer('produto_id').notNullable().unsigned().references('id').inTable('common.produtos')
      table.integer('quantidade').notNullable()
      table.string('observacao', 1000)
      table.timestamp('created_at').defaultTo(this.fn.now()).notNullable()
      table.timestamp('updated_at').defaultTo(this.fn.now()).notNullable()
      table.timestamp('deleted_at')
    })
  }

  down() {
    this.withSchema('common').drop('produtos_pedido')
  }

}

module.exports = ProdutosPedidoSchema
