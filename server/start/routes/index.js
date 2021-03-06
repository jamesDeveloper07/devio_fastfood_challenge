'use strict'

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
const Route = use('Route')
require("./common");
require("./security");

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/app', 'AppController.index').middleware(["auth:jwt"]);
Route.get('/app_role_admin', 'AppController.roleAdminValidation').middleware(['auth:jwt', 'is:(administrador)'])
Route.get('/app_role_cozin', 'AppController.roleCozinValidation').middleware(['auth:jwt', 'is:(administrador or cozinheiro)'])
