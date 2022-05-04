'use strict'

/*
|--------------------------------------------------------------------------
| FormaPagamentoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const FormaPagamento = use('App/Models/Common/FormaPagamento')

class FormaPagamentoSeeder {
  async run () {
    const Credito = await FormaPagamento.create({
      nome: 'Crédito',
      status: 'ativo'
    })

    const Debito = await FormaPagamento.create({
      nome: 'Débito',
      status: 'ativo'
    })

    const Pix = await FormaPagamento.create({
      nome: 'Pix',
      status: 'ativo'
    })

    const Dinheiro = await FormaPagamento.create({
      nome: 'Dinheiro',
      status: 'ativo'
    })
  }
}

module.exports = FormaPagamentoSeeder
