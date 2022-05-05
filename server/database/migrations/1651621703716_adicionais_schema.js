'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdicionaisSchema extends Schema {

  up() {
    this.withSchema('common').create('adicionais', (table) => {
      table.increments()
      table.string('nome', 200).notNullable()
      table.string('descricao', 500).notNullable()
      table.integer('categoria_id').notNullable().unsigned().references('id').inTable('common.categorias')
      table.decimal('preco', 12, 2).notNullable()
      table.text('image_url')
      table
        .enu('status', ['ativo', 'inativo'])
        .notNullable()
        .comment('Coluna referente ao status do adicional, que pode estar ativo ou inativo')
      table.timestamp('created_at').notNullable().defaultTo(this.fn.now())
      table.timestamp('updated_at').notNullable().defaultTo(this.fn.now())
      table.timestamp('deleted_at')
    })

  }

  down() {
    this.withSchema('common').drop('adicionais')
  }

}

module.exports = AdicionaisSchema
