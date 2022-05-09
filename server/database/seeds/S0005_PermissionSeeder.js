'use strict'

/*
|--------------------------------------------------------------------------
| PermissionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Permission = use('Adonis/Acl/Permission')
const Role = use('Adonis/Acl/Role')


class PermissionSeeder {
  async run () {
    const trx = await Database.beginTransaction();
    try {

      const administrador = await Role.findBy({ slug: 'administrador' }, trx)
      const atendente = await Role.findBy({ slug: 'atendente' }, trx)
      const cozinheiro = await Role.findBy({ slug: 'cozinheiro' }, trx)
      const entregador = await Role.findBy({ slug: 'entregador' }, trx)

      const permissionVerCategoria = await Permission.findOrCreate({ slug: 'ver_categorias' }, {
        slug: 'ver_categorias',
        name: 'Ver Categorias',
        description: 'Concede acesso a tela de consulta de categorias.'
      }, trx)

      const permissionCadastrarCategoria = await Permission.findOrCreate({ slug: 'cadastrar_categorias' }, {
        slug: 'cadastrar_categorias',
        name: 'Cadastrar Categorias',
        description: 'Concede acesso a tela de cadastro de categorias.'
      }, trx)


      const permissionVerPedido = await Permission.findOrCreate({ slug: 'ver_pedidos' }, {
        slug: 'ver_pedidos',
        name: 'Ver Pedidos',
        description: 'Concede acesso a tela de consulta de pedidos.'
      }, trx)

      const permissionCadastrarPedido = await Permission.findOrCreate({ slug: 'cadastrar_pedidos' }, {
        slug: 'cadastrar_pedidos',
        name: 'Cadastrar Pedidos',
        description: 'Concede acesso a tela de cadastro de pedidos.'
      }, trx)

      const permissionAtualizarPedido = await Permission.findOrCreate({ slug: 'atualizar_pedidos' }, {
        slug: 'atualizar_pedidos',
        name: 'Atualizar Pedidos',
        description: 'Concede acesso a tela de atualização de pedidos.'
      }, trx)

      await trx.commit();

      await administrador.permissions().attach([
        permissionVerCategoria.id
      ], trx);

      await administrador.permissions().attach([
        permissionCadastrarCategoria.id
      ], trx);

      await administrador.permissions().attach([
        permissionVerPedido.id
      ], trx);

      await administrador.permissions().attach([
        permissionCadastrarPedido.id
      ], trx);

      await administrador.permissions().attach([
        permissionAtualizarPedido.id
      ], trx);

      await atendente.permissions().attach([
        permissionVerCategoria.id
      ], trx);

      await atendente.permissions().attach([
        permissionVerPedido.id
      ], trx);

      await atendente.permissions().attach([
        permissionCadastrarPedido.id
      ], trx);

      await atendente.permissions().attach([
        permissionAtualizarPedido.id
      ], trx);


      await cozinheiro.permissions().attach([
        permissionVerPedido.id
      ], trx);

      await cozinheiro.permissions().attach([
        permissionAtualizarPedido.id
      ], trx);

      await entregador.permissions().attach([
        permissionVerPedido.id
      ], trx);

    } catch (error) {
      await trx.rollback()
      throw error
    }
  }
}

module.exports = PermissionSeeder
