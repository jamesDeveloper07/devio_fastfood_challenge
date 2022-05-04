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
const Role = use('Adonis/Acl/Role')

class RoleSeeder {
  async run () {
    const roleAdministrador = await Role.create({
      name: 'Administrador',
      slug: 'administrador',
      description: 'privilégios de administrador'
    })

    const roleAtendente = await Role.create({
      name: 'Atendente',
      slug: 'atendente',
      description: 'privilégios de atendente'
    })

    const roleCozinheiro = await Role.create({
      name: 'Cozinheiro',
      slug: 'cozinheiro',
      description: 'privilégios de cozinheiro'
    })

    const roleEntregador = await Role.create({
      name: 'Entregador',
      slug: 'entregador',
      description: 'privilégios de entregador'
    })
  }
}

module.exports = RoleSeeder
