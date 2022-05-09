'use strict'

/*
|--------------------------------------------------------------------------
| ProdutoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Categoria = use('App/Models/Common/Categoria')
const Produto = use('App/Models/Common/Produto')

class ProdutoSeeder {
  async run () {

    const catHamburgueres = await Categoria.findBy({
      nome: 'Hambúrgueres'
    })

    const Hamburguer01 = await Produto.create({
      nome: 'Hambúrguer 01',
      descricao: 'Delicioso hambúrguer 01.',
      categoria_id: catHamburgueres.id,
      preco: 20.10,
      image_url: 'assets/img/produtos/001.png',
      status: 'ativo'
    })

    const Hamburguer02 = await Produto.create({
      nome: 'Hambúrguer 02',
      descricao: 'Delicioso hambúrguer 02.',
      categoria_id: catHamburgueres.id,
      preco: 20.20,
      image_url: 'assets/img/produtos/001.png',
      status: 'ativo'
    })

    const Hamburguer03 = await Produto.create({
      nome: 'Hambúrguer 03',
      descricao: 'Delicioso hambúrguer 03.',
      categoria_id: catHamburgueres.id,
      preco: 20.30,
      image_url: 'assets/img/produtos/001.png',
      status: 'ativo'
    })

    const Hamburguer04 = await Produto.create({
      nome: 'Hambúrguer 04',
      descricao: 'Delicioso hambúrguer 04.',
      categoria_id: catHamburgueres.id,
      preco: 20.40,
      image_url: 'assets/img/produtos/001.png',
      status: 'ativo'
    })

    const Hamburguer05 = await Produto.create({
      nome: 'Hambúrguer 05',
      descricao: 'Delicioso hambúrguer 05.',
      categoria_id: catHamburgueres.id,
      preco: 20.50,
      image_url: 'assets/img/produtos/001.png',
      status: 'ativo'
    })

    //----------------

    const catCombos = await Categoria.findBy({
      nome: 'Combos'
    })

    const Combo01 = await Produto.create({
      nome: 'Combo 01',
      descricao: 'Delicioso Combo 01.',
      categoria_id: catCombos.id,
      preco: 30.10,
      image_url: 'assets/img/produtos/002.png',
      status: 'ativo'
    })

    const Combo02 = await Produto.create({
      nome: 'Combo 02',
      descricao: 'Delicioso Combo 02.',
      categoria_id: catCombos.id,
      preco: 30.20,
      image_url: 'assets/img/produtos/002.png',
      status: 'ativo'
    })

    const Combo03 = await Produto.create({
      nome: 'Combo 03',
      descricao: 'Delicioso Combo 03.',
      categoria_id: catCombos.id,
      preco: 30.30,
      image_url: 'assets/img/produtos/002.png',
      status: 'ativo'
    })

    const Combo04 = await Produto.create({
      nome: 'Combo 04',
      descricao: 'Delicioso Combo 04.',
      categoria_id: catCombos.id,
      preco: 30.40,
      image_url: 'assets/img/produtos/002.png',
      status: 'ativo'
    })

    const Combo05 = await Produto.create({
      nome: 'Combo 05',
      descricao: 'Delicioso Combo 05.',
      categoria_id: catCombos.id,
      preco: 30.50,
      image_url: 'assets/img/produtos/002.png',
      status: 'ativo'
    })

    //----------------

    const catAcompanhamentos = await Categoria.findBy({
      nome: 'Acompanhamentos'
    })

    const Acomp01 = await Produto.create({
      nome: 'Acompanhamento 01',
      descricao: 'Delicioso Acompanhamentos 01.',
      categoria_id: catAcompanhamentos.id,
      preco: 10.10,
      image_url: 'assets/img/produtos/003.png',
      status: 'ativo'
    })

    const Acomp02 = await Produto.create({
      nome: 'Acompanhamento 02',
      descricao: 'Delicioso Acompanhamentos 02.',
      categoria_id: catAcompanhamentos.id,
      preco: 10.20,
      image_url: 'assets/img/produtos/003.png',
      status: 'ativo'
    })

    const Acomp03 = await Produto.create({
      nome: 'Acompanhamento 03',
      descricao: 'Delicioso Acompanhamentos 03.',
      categoria_id: catAcompanhamentos.id,
      preco: 10.30,
      image_url: 'assets/img/produtos/003.png',
      status: 'ativo'
    })

    const Acomp04 = await Produto.create({
      nome: 'Acompanhamento 04',
      descricao: 'Delicioso Acompanhamentos 04.',
      categoria_id: catAcompanhamentos.id,
      preco: 10.40,
      image_url: 'assets/img/produtos/003.png',
      status: 'ativo'
    })

    const Acomp05 = await Produto.create({
      nome: 'Acompanhamento 05',
      descricao: 'Delicioso Acompanhamentos 05.',
      categoria_id: catAcompanhamentos.id,
      preco: 10.50,
      image_url: 'assets/img/produtos/003.png',
      status: 'ativo'
    })

    //----------------

    const catBebidas = await Categoria.findBy({
      nome: 'Bebidas'
    })

    const Bebida01 = await Produto.create({
      nome: 'Bebida 01',
      descricao: 'Deliciosa Bebida 01.',
      categoria_id: catBebidas.id,
      preco: 5.10,
      image_url: 'assets/img/produtos/004.png',
      status: 'ativo'
    })

    const Bebida02 = await Produto.create({
      nome: 'Bebida 02',
      descricao: 'Deliciosa Bebida 02.',
      categoria_id: catBebidas.id,
      preco: 5.20,
      image_url: 'assets/img/produtos/004.png',
      status: 'ativo'
    })

    const Bebida03 = await Produto.create({
      nome: 'Bebida 03',
      descricao: 'Deliciosa Bebida 03.',
      categoria_id: catBebidas.id,
      preco: 5.30,
      image_url: 'assets/img/produtos/004.png',
      status: 'ativo'
    })

    const Bebida04 = await Produto.create({
      nome: 'Bebida 04',
      descricao: 'Deliciosa Bebida 04.',
      categoria_id: catBebidas.id,
      preco: 5.40,
      image_url: 'assets/img/produtos/004.png',
      status: 'ativo'
    })

    const Bebida05 = await Produto.create({
      nome: 'Bebida 05',
      descricao: 'Deliciosa Bebida 05.',
      categoria_id: catBebidas.id,
      preco: 5.50,
      image_url: 'assets/img/produtos/004.png',
      status: 'ativo'
    })

     //----------------

     const catSobremesas = await Categoria.findBy({
      nome: 'Sobremesas'
    })

    const Sobremesa01 = await Produto.create({
      nome: 'Sobremesa 01',
      descricao: 'Deliciosa Sobremesa 01.',
      categoria_id: catSobremesas.id,
      preco: 7.10,
      image_url: 'assets/img/produtos/005.png',
      status: 'ativo'
    })

    const Sobremesa02 = await Produto.create({
      nome: 'Sobremesa 02',
      descricao: 'Deliciosa Sobremesa 02.',
      categoria_id: catSobremesas.id,
      preco: 7.20,
      image_url: 'assets/img/produtos/005.png',
      status: 'ativo'
    })

    const Sobremesa03 = await Produto.create({
      nome: 'Sobremesa 03',
      descricao: 'Deliciosa Sobremesa 03.',
      categoria_id: catSobremesas.id,
      preco: 7.30,
      image_url: 'assets/img/produtos/005.png',
      status: 'ativo'
    })

    const Sobremesa04 = await Produto.create({
      nome: 'Sobremesa 04',
      descricao: 'Deliciosa Sobremesa 04.',
      categoria_id: catSobremesas.id,
      preco: 7.40,
      image_url: 'assets/img/produtos/005.png',
      status: 'ativo'
    })

    const Sobremesa05 = await Produto.create({
      nome: 'Sobremesa 05',
      descricao: 'Deliciosa Sobremesa 05.',
      categoria_id: catSobremesas.id,
      preco: 7.50,
      image_url: 'assets/img/produtos/005.png',
      status: 'ativo'
    })

  }
}

module.exports = ProdutoSeeder
