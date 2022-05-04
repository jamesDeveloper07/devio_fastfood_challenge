'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/Security/User')

class UserSeeder {
  async run () {
    const admin = await User.create({
      name: 'Administrador',
      username: 'administrador',
      email: 'administracao@fastfood.com.br',
      password: 'admin',
    })

    const atendimento = await User.create({
      name: 'Atendente',
      username: 'atendente',
      email: 'atendimento@fastfood.com.br',
      password: 'atend',
    })

    const cozinha = await User.create({
      name: 'Cozinheiro',
      username: 'cozinheiro',
      email: 'cozinha@fastfood.com.br',
      password: 'cozin',
    })

    const entrega = await User.create({
      name: 'Entregador',
      username: 'entregador',
      email: 'entrega@fastfood.com.br',
      password: 'entrega',
    })
  }
}

module.exports = UserSeeder
