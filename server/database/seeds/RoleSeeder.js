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
    const roleAdministrador = new Role()
    roleAdministrador.name = 'Administrador'
    roleAdministrador.slug = 'administrador'
    roleAdministrador.description = 'privilégios de administrador'
    await roleAdministrador.save()

    const roleAtendente = new Role()
    roleAdministrador.name = 'Atendente'
    roleAdministrador.slug = 'atendente'
    roleAdministrador.description = 'privilégios de atendente'
    await roleAtendente.save()

    const roleCozinheiro = new Role()
    roleAdministrador.name = 'Cozinheiro'
    roleAdministrador.slug = 'cozinheiro'
    roleAdministrador.description = 'privilégios de cozinheiro'
    await roleCozinheiro.save()

    const roleEntregador = new Role()
    roleAdministrador.name = 'Entregador'
    roleAdministrador.slug = 'entregador'
    roleAdministrador.description = 'privilégios de entregador'
    await roleEntregador.save()
  }
}

module.exports = RoleSeeder
