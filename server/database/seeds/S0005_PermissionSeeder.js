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

      const permissionVerCategoria = await Permission.findOrCreate({ slug: 'ver_categoria' }, {
        slug: 'ver_categoria',
        name: 'Ver Categoria',
        description: 'Concede acesso a tela de consulta de categorias.'
      }, trx)

      const permissionCadastrarCategoria = await Permission.findOrCreate({ slug: 'cadastrar_categoria' }, {
        slug: 'cadastrar_categoria',
        name: 'Cadastrar Categoria',
        description: 'Concede acesso a tela de cadastro de categorias.'
      }, trx)


      const permissionVerPedido = await Permission.findOrCreate({ slug: 'ver_pedido' }, {
        slug: 'ver_pedido',
        name: 'Ver Pedido',
        description: 'Concede acesso a tela de consulta de pedidos.'
      }, trx)

      const permissionCadastrarPedido = await Permission.findOrCreate({ slug: 'cadastrar_pedido' }, {
        slug: 'cadastrar_pedido',
        name: 'Cadastrar Pedido',
        description: 'Concede acesso a tela de cadastro de pedidos.'
      }, trx)

      const permissionAtualizarPedido = await Permission.findOrCreate({ slug: 'atualizar_pedido' }, {
        slug: 'atualizar_pedido',
        name: 'Atualizar Pedido',
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
