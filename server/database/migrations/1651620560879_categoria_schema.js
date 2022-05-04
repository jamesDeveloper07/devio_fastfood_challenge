'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriaSchema extends Schema {
  up() {
    this.withSchema('common').create('categorias', (table) => {
      table.increments()
      table.string('nome', 200).notNullable()
      table.string('descricao', 500).notNullable()
      table
        .enu('status', ['ativo', 'inativo'])
        .notNullable()
        .comment('Coluna referente ao status da categoria, que pode estar ativo ou inativo')
      table.timestamp('created_at').notNullable().defaultTo(this.fn.now())
      table.timestamp('updated_at').notNullable().defaultTo(this.fn.now())
      table.timestamp('deleted_at')
    })

  }

  down() {
    this.withSchema('common').drop('categorias')
  }
}

module.exports = CategoriaSchema
