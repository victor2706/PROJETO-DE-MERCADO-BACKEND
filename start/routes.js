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

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


//listagem de tudo

Route.resource('/clientes', 'ClienteController').apiOnly()
                                                .validator(new Map([[['store'], 'Cliente']]))
Route.resource('/Compras', 'CompraController').apiOnly()
                                              .validator(new Map([[['store'], 'Compra']]))
Route.resource('/lojas', 'LojaController').apiOnly()
                                          .validator(new Map([[['store'], 'Loja']]))
Route.resource('/estoques', 'EstoqueController').apiOnly()
                                                .validator(new Map([[['store'], 'Estoque']]))
Route.resource('/produtos', 'ProdutoController').apiOnly()
                                                .validator(new Map([[['store'], 'Produto']]))
Route.resource('/fornecedores', 'FornecedorController').apiOnly()
                                                .validator(new Map([[['store'], 'Fornecedor']]))