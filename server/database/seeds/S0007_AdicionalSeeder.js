'use strict'

/*
|--------------------------------------------------------------------------
| AdicionalSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Categoria = use('App/Models/Common/Categoria')
const Adicional = use('App/Models/Common/Adicional')

class AdicionalSeeder {
  async run () {

    const catHamburgueres = await Categoria.findBy({
      nome: 'Hambúrgueres'
    })

    const Adicional01 = await Adicional.create({
      nome: 'Adicional 01',
      descricao: '10g',
      categoria_id: catHamburgueres.id,
      preco: 1.10,
      image_url: 'https://www.bernardaoemcasa.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/h/whatsapp_image_2021-04-08_at_08.14.31.jpeg',
      status: 'ativo'
    })

    const Adicional02 = await Adicional.create({
      nome: 'Adicional 02',
      descricao: '20g',
      categoria_id: catHamburgueres.id,
      preco: 1.20,
      image_url: 'https://www.bernardaoemcasa.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/h/whatsapp_image_2021-04-08_at_08.14.31.jpeg',
      status: 'ativo'
    })

    const Adicional03 = await Adicional.create({
      nome: 'Adicional 03',
      descricao: '30g',
      categoria_id: catHamburgueres.id,
      preco: 1.30,
      image_url: 'https://www.bernardaoemcasa.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/h/whatsapp_image_2021-04-08_at_08.14.31.jpeg',
      status: 'ativo'
    })

    const Adicional04 = await Adicional.create({
      nome: 'Adicional 04',
      descricao: '40g',
      categoria_id: catHamburgueres.id,
      preco: 1.40,
      image_url: 'https://www.bernardaoemcasa.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/h/whatsapp_image_2021-04-08_at_08.14.31.jpeg',
      status: 'ativo'
    })

    const Adicional05 = await Adicional.create({
      nome: 'Adicional 05',
      descricao: '50g.',
      categoria_id: catHamburgueres.id,
      preco: 1.50,
      image_url: 'https://www.bernardaoemcasa.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/h/whatsapp_image_2021-04-08_at_08.14.31.jpeg',
      status: 'ativo'
    })

  }
}

module.exports = AdicionalSeeder
