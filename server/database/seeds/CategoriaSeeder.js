'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Categoria = use('App/Models/Common/Categoria')

class CategoriaSeeder {
  async run () {
    const Hamburgueres = await Categoria.create({
      nome: 'Hambúrgueres',
      descricao: 'Deliciosos hambúrgueres feitos com muito carinho e sabor.',
      status: 'ativo'
    })

    const Combos = await Categoria.create({
      nome: 'Combos',
      descricao: 'Maravilhosas combinações, contendo nossos saborosos hamburgueres, bebidas e acompanhamentos.',
      status: 'ativo'
    })

    const Acompanhamentos = await Categoria.create({
      nome: 'Acompanhamentos',
      descricao: 'Nossos hamburgueres quando acompanhados dessas delícias, ficam mais apaixonantes.',
      status: 'ativo'
    })

    const Sobremesas = await Categoria.create({
      nome: 'Sobremesas',
      descricao: 'Delíciosas sobremesas, para fechar com chave de ouro.',
      status: 'ativo'
    })

  }
}

module.exports = CategoriaSeeder
