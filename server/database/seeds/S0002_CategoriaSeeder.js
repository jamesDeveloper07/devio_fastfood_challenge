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
      image_url: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/10/Hamburguer-500x500.jpg',
      status: 'ativo'
    })

    const Combos = await Categoria.create({
      nome: 'Combos',
      descricao: 'Maravilhosas combinações, contendo nossos saborosos hamburgueres, bebidas e acompanhamentos.',
      image_url: 'https://riomarrecife.com.br/recife/2021/08/combo-double-crunch.jpg',
      status: 'ativo'
    })

    const Acompanhamentos = await Categoria.create({
      nome: 'Acompanhamentos',
      descricao: 'Nossos hamburgueres quando acompanhados dessas delícias, ficam mais apaixonantes.',
      image_url: 'https://images-americanas.b2w.io/produtos/2945523484/imagens/embalagem-caixinha-para-batata-frita-grande-500un-vermelha/2945523484_1_large.jpg',
      status: 'ativo'
    })

    const Bebidas = await Categoria.create({
      nome: 'Bebidas',
      descricao: 'Maravilhosas bebidas, deliciosas e refrescantes.',
      image_url: 'https://thumbs.dreamstime.com/b/energy-drink-can-illustration-42139826.jpg',
      status: 'ativo'
    })

    const Sobremesas = await Categoria.create({
      nome: 'Sobremesas',
      descricao: 'Delíciosas sobremesas, para fechar com chave de ouro.',
      image_url: 'https://images-americanas.b2w.io/produtos/4595601744/imagens/dlux-50-x-3-oz-mini-copos-de-sobremesa-com-colheres-square-tall-clear-plastic-parfait-aperitivo-cup-tigela-de-porcao-pequena-reutilizavel-para-sobremesas-de-festa-com-receita-ebook/4595601744_1_large.jpg',
      status: 'ativo'
    })

  }
}

module.exports = CategoriaSeeder
