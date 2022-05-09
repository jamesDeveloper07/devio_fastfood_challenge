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
      image_url: 'assets/img/categorias/001.png',
      status: 'ativo'
    })

    const Combos = await Categoria.create({
      nome: 'Combos',
      descricao: 'Maravilhosas combinações, contendo nossos saborosos hamburgueres, bebidas e acompanhamentos.',
      image_url: 'assets/img/categorias/002.png',
      status: 'ativo'
    })

    const Acompanhamentos = await Categoria.create({
      nome: 'Acompanhamentos',
      descricao: 'Nossos hamburgueres quando acompanhados dessas delícias, ficam mais apaixonantes.',
      image_url: 'assets/img/categorias/003.png',
      status: 'ativo'
    })

    const Bebidas = await Categoria.create({
      nome: 'Bebidas',
      descricao: 'Maravilhosas bebidas, deliciosas e refrescantes.',
      image_url: 'assets/img/categorias/004.png',
      status: 'ativo'
    })

    const Sobremesas = await Categoria.create({
      nome: 'Sobremesas',
      descricao: 'Delíciosas sobremesas, para fechar com chave de ouro.',
      image_url: 'assets/img/categorias/005.png',
      status: 'ativo'
    })

  }
}

module.exports = CategoriaSeeder
