'use strict'

/*
|--------------------------------------------------------------------------
| AcompanhamentoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Categoria = use('App/Models/Common/Categoria')
const Acompanhamento = use('App/Models/Common/Acompanhamento')

class AcompanhamentoSeeder {
  async run () {

    const catHamburgueres = await Categoria.findBy({
      nome: 'Hambúrgueres'
    })

    const Adicional01 = await Produto.create({
      nome: 'Adicional 01',
      descricao: '10g',
      categoria_id: catHamburgueres.id,
      preco: 1.10,
      status: 'ativo'
    })

    const Adicional02 = await Produto.create({
      nome: 'Adicional 02',
      descricao: '20g',
      categoria_id: catHamburgueres.id,
      preco: 1.20,
      status: 'ativo'
    })

    const Adicional03 = await Produto.create({
      nome: 'Adicional 03',
      descricao: '30g',
      categoria_id: catHamburgueres.id,
      preco: 1.30,
      status: 'ativo'
    })

    const Adicional04 = await Produto.create({
      nome: 'Adicional 04',
      descricao: '40g',
      categoria_id: catHamburgueres.id,
      preco: 1.40,
      status: 'ativo'
    })

    const Adicional05 = await Produto.create({
      nome: 'Adicional 05',
      descricao: '50g.',
      categoria_id: catHamburgueres.id,
      preco: 1.50,
      status: 'ativo'
    })

  }
}

module.exports = AcompanhamentoSeeder
