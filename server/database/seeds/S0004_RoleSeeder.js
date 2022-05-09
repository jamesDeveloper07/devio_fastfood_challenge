'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Role = use('Adonis/Acl/Role')
const User = use('App/Models/Security/User')

class RoleSeeder {
  async run() {
    const trx = await Database.beginTransaction();
    try {

      const administrador = await User.findBy({ username: 'administrador' }, trx)
      const atendente = await User.findBy({ username: 'atendente' }, trx)
      const cozinheiro = await User.findBy({ username: 'cozinheiro' }, trx)
      const entregador = await User.findBy({ username: 'entregador' }, trx)

      const roleAdministrador = await Role.findOrCreate({ slug: 'administrador' }, {
        name: 'Administrador',
        slug: 'administrador',
        description: 'privilégios de administrador'
      }, trx)

      const roleAtendente = await Role.findOrCreate({ slug: 'atendente' }, {
        name: 'Atendente',
        slug: 'atendente',
        description: 'privilégios de atendente'
      }, trx)

      const roleCozinheiro = await Role.findOrCreate({ slug: 'cozinheiro' }, {
        name: 'Cozinheiro',
        slug: 'cozinheiro',
        description: 'privilégios de cozinheiro'
      }, trx)

      const roleEntregador = await Role.findOrCreate({ slug: 'entregador' }, {
        name: 'Entregador',
        slug: 'entregador',
        description: 'privilégios de entregador'
      }, trx)

      await trx.commit();

      await administrador.roles().attach([
        roleAdministrador.id
      ], trx);

      await atendente.roles().attach([
        roleAtendente.id
      ], trx);

      await cozinheiro.roles().attach([
        roleCozinheiro.id
      ], trx);

      await entregador.roles().attach([
        roleEntregador.id
      ], trx);

    } catch (error) {
      await trx.rollback()
      throw error
    }
  }
}

module.exports = RoleSeeder
