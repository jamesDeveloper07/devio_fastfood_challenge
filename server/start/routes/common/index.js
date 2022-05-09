/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {
  //categoria
  Route.get('/categoria', 'Common/CategoriaController.index');

  //produto
  Route.get('/produto', 'Common/ProdutoController.index');
  Route.get('/produto/getById', 'Common/ProdutoController.getById');

  //adicional
  Route.get('/adicional', 'Common/AdicionalController.index');
  Route.get('/adicional/getById', 'Common/AdicionalController.getById');

  //forma pagamento
  Route.get('/forma_pagamento', 'Common/FormaPagamentoController.index');

  //pedido
  Route.get('/pedido', 'Common/PedidoController.index');
  Route.get('/pedido/:id', 'Common/PedidoController.show');
  Route.post('/pedido', 'Common/PedidoController.store').middleware(['auth:jwt']);
  Route.get('/pedido/:id/avancar', 'Common/PedidoController.avancar').middleware(['auth:jwt']);
  Route.get('/pedido/:id/regredir', 'Common/PedidoController.regredir').middleware(['auth:jwt']);
  Route.get('/pedido/:id/cancelar', 'Common/PedidoController.cancelar').middleware(['auth:jwt']);
  Route.delete('/pedido/:id/deletar', 'Common/PedidoController.deletar').middleware(['auth:jwt']);

}).prefix('/common');
