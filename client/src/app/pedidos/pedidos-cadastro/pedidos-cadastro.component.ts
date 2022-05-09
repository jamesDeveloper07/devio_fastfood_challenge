import { Produto, ProdutoPedido, Adicional, AdicionalFiltro, FormaPagamento, FormaPagamentoPedido } from '../../core/model';
import { MessageService, ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Pedido, ProdutoFiltro } from 'src/app/core/model';
import { PedidosService } from '../pedidos.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-pedidos-cadastro',
  templateUrl: './pedidos-cadastro.component.html',
  styleUrls: ['./pedidos-cadastro.component.css']
})
export class PedidosCadastroComponent implements OnInit {

  totalRegistros = 0;
  filtroProduto = new ProdutoFiltro();
  filtroAdicional = new AdicionalFiltro();

  categorias: any = [];
  produtos: Array<Produto> = [];
  adicionais: Array<Adicional> = [];
  formasPagamento: Array<FormaPagamento> = [];
  formasPagamentoPedido: Array<FormaPagamentoPedido> = [];

  categoriaSelecionada: any = {};
  produtosSelecionados: Array<Produto> = [];

  produtoPedido: ProdutoPedido = new ProdutoPedido();
  produtosPedidoInseridos: Array<ProdutoPedido> = [];
  adicionaisInseridos: Array<Adicional> = [];
  formasPagamentoUtilizadas: Array<FormaPagamentoPedido> = [];

  pedido = new Pedido();
  valorTotal: number = 0;
  valorPagamento: number = 0;
  valorPendente: number = 0;
  valorTroco: number = 0;
  loading: boolean = false;

  displayModal: boolean = false;
  isEdicaoProdutoPedido: boolean = false;
  isTelaPagamento: boolean = false;
  displayModalSucessoPagamento: boolean = false;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,

    private pedidosService: PedidosService,
    private errorHandlerService: ErrorHandlerService,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.pesquisarCategorias();
    this.pesquisarProdutos(this.categoriaSelecionada);
    this.pesquisarFormasPagamento();
  }

  get isEdicao() {
    return Boolean(this.pedido.id);
  }

  salvar() {
    if (this.isEdicao) {
      this.atualizarPedido();
    } else {
      this.adicionarPedido();
    }
  }

  adicionarPedido() {
    this.pedidosService.adicionar(this.pedido)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Pedido Salvo com sucesso!' });
        //mostar mensagem de sucesso
        this.displayModalSucessoPagamento = true;
        //this.reiniciarTelaPedido();
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  atualizarPedido() {
    this.pedidosService.atualizar(this.pedido)
      .then(pedido => {
        if (pedido) {
          this.pedido = pedido
          this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Pedido atualizado com sucesso!' });
        }
      })
      .catch((erro: any) => this.errorHandlerService.handle(erro));
  }

  getEstiloCartao() {
    return {
      boxShadow: '0px 0px 10px 2px #b6c3c7',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px',
      textDecoration: 'none',
    };
  }


  pesquisarCategorias() {
    this.loading = true;
    this.pedidosService.consultarCategorias()
      .then(resultado => {
        this.categorias = resultado;
      })
      .catch(error => {
        this.errorHandlerService.handle(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  pesquisarFormasPagamento() {
    this.loading = true;
    this.pedidosService.consultarFormasPagamento()
      .then(resultado => {
        this.formasPagamento = resultado;

        this.montarListaFormasPagamentoPedido(this.formasPagamento);

      })
      .catch(error => {
        this.errorHandlerService.handle(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  montarListaFormasPagamentoPedido(formasPagamento: Array<FormaPagamento>) {

    this.formasPagamentoPedido = [];

    for (const forma of this.formasPagamento) {
      const formaPedido = new FormaPagamentoPedido();
      formaPedido.formaPagamento = forma;
      formaPedido.forma_pagamento_id = forma.id;
      formaPedido.pedido_id = this.pedido.id;
      this.formasPagamentoPedido.push(formaPedido)
    }

  }

  pesquisarProdutos(categoria: any) {
    console.log('Pesquisar Produtos');
    console.log({ categoria });
    console.log(this.filtroProduto);
    this.loading = true;
    this.categoriaSelecionada = categoria;
    if (this.categoriaSelecionada && this.categoriaSelecionada.id > 0) {
      this.filtroProduto.categoria_id = this.categoriaSelecionada.id;
    } else {
      this.filtroProduto.categoria_id = undefined;
    }
    this.pedidosService.consultarProdutos(this.filtroProduto)
      .then(resultado => {
        // this.totalRegistros = resultado.total;
        // this.produtos = resultado.dados;
        this.produtos = resultado;
      })
      .catch(error => {
        this.errorHandlerService.handle(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  pesquisarAdicionais(categoria_id: number) {
    console.log('Pesquisar Adicionais');
    console.log({ categoria_id });
    console.log(this.filtroAdicional);
    this.loading = true;

    if (categoria_id && categoria_id > 0) {
      this.filtroAdicional.categoria_id = categoria_id;
    } else {
      this.filtroAdicional.categoria_id = undefined;
    }
    this.pedidosService.consultarAdicionais(this.filtroAdicional)
      .then(resultado => {
        // this.totalRegistros = resultado.total;
        // this.produtos = resultado.dados;
        this.adicionais = resultado;
        console.log(this.adicionais);
      })
      .catch(error => {
        console.log('ERROR NO CONSULTAR ADICIONAIS');
        this.errorHandlerService.handle(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  confirmarExclusao(pedido: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este Pedido?',
      accept: () => {
        this.excluir(pedido);
      }
    });
  }

  excluir(pedido: any) {
    this.pedidosService.excluir(pedido.codigo)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Registro excluído com sucesso!' });
      })
      .catch(error => {
        this.errorHandlerService.handle(error);
      });
  }

  hasPermission(permission: string) {
    return this.authService.hasPermission(permission);
  }

  onEnterPress() {
    this.pesquisarProdutos(this.categoriaSelecionada);
  }

  isButtonFinalizarPedidoDisable() {
    return !this.pedido.produtos_pedido || this.pedido.produtos_pedido.length <= 0;
  }

  isButtonFinalizarPagamentoDisable() {
    return this.valorPendente > 0
  }

  cancelarPedido() {
    //perguntar antes
    this.pedido = new Pedido();
    this.produtosSelecionados = [];
    this.produtosPedidoInseridos = [];
  }

  reiniciarTelaPedido() {
    //perguntar antes
    this.zerarPagamento()
    this.pedido = new Pedido();
    this.produtosSelecionados = [];
    this.produtosPedidoInseridos = [];
    this.isTelaPagamento = false;
  }

  iniciarPagamento() {
    //perguntar antes
    this.isTelaPagamento = true;
    this.calcularPagamento();
  }

  cancelarPagamento() {
    //perguntar antes
    this.zerarPagamento()
    this.isTelaPagamento = false;
  }

  zerarPagamento() {
    this.valorPagamento = 0;
    this.valorPendente = 0;
    this.valorTroco = 0;
    this.montarListaFormasPagamentoPedido(this.formasPagamento);
    this.formasPagamentoUtilizadas = [];
    this.pedido.nome_cliente = '';
    this.pedido.contato_cliente = '';
    this.pedido.codigo = 0;
  }



  finalizarPagamento() {
    //perguntar antes
    // this.isTelaPagamento = false;
    console.log('CALCULANDO PAGAMENTO..')
    const retorno = this.calcularPagamento()
    console.log(retorno);

    if (!retorno) {
      this.errorHandlerService.handle("OPS... Deu algo errado por aqui!");
      return;
    }

    if (!retorno.ok) {
      this.errorHandlerService.handle(retorno.msg);
      return
    }

    if (this.pedido) {
      if (this.pedido.nome_cliente) {
        if (this.pedido.codigo && this.pedido.codigo > 0) {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: retorno.msg });

          this.pedido.formas_pagamento_pedido = this.formasPagamentoUtilizadas;
          this.pedido.valor_total = this.valorTotal;
          this.pedido.valor_pagamento = this.valorPagamento;
          this.pedido.troco = this.valorTroco;
          console.log(this.pedido)
          this.salvar();
          return
        }
        this.errorHandlerService.handle("OPS... Informe um código válido para o pedido!");
        return
      }
      this.errorHandlerService.handle("OPS... Informe um nome para o cliente do pedido!");
      return
    }

    this.errorHandlerService.handle("OPS... Algo errado com seu Pedido! Tente Novamente");

  }

  abrirFecharProdutoReview() {
    this.displayModal = !this.displayModal;
  }

  continuarAdicionando(produtoPedido: ProdutoPedido) {
    // console.log('COntinuar Adicionando')
    if (!this.isEdicaoProdutoPedido) {
      console.log('ADICIONANDO O PRODUTO NO PEDIDO')
      produtoPedido.produto_id = produtoPedido.produto.id
      this.produtosPedidoInseridos.push(produtoPedido)
      this.produtosSelecionados.push(produtoPedido.produto)
      this.pedido.produtos_pedido.push(produtoPedido)
    } else {
      console.log('PEDIDO ATUALIZADO')
    }
    console.log(this.pedido.produtos_pedido)
    this.displayModal = false;
  }

  cancelarAdicaoProdutoPedido(produtoPedido: ProdutoPedido) {

    for (var i = 0; i < this.pedido.produtos_pedido.length; i++) {
      if (this.pedido.produtos_pedido[i].produto.id === produtoPedido.produto.id) {
        var spliced = this.pedido.produtos_pedido.splice(i, 1);

        for (var i = 0; i < this.produtosSelecionados.length; i++) {
          if (this.produtosSelecionados[i].id === produtoPedido.produto.id) {
            var spliced2 = this.produtosSelecionados.splice(i, 1);
            this.displayModal = false;
            return
          }
        }

        this.displayModal = false;
        return
      }
    }

    for (var i = 0; i < this.produtosSelecionados.length; i++) {
      if (this.produtosSelecionados[i].id === produtoPedido.produto.id) {
        var spliced3 = this.produtosSelecionados.splice(i, 1);
        this.displayModal = false;
        return
      }
    }

    this.displayModal = false;
  }

  calcularPorQuantidade(produtoPedido: ProdutoPedido) {
    if (produtoPedido && produtoPedido.quantidade && produtoPedido.produto.preco) {
      return produtoPedido.quantidade * produtoPedido.produto.preco;
    }
    return 0
  }

  calcularTotalComAdicionais(produtoPedido: ProdutoPedido) {
    var valor = 0;
    if (produtoPedido && produtoPedido.quantidade && produtoPedido.produto.preco) {
      valor = valor + (produtoPedido.quantidade * produtoPedido.produto.preco);
      if (produtoPedido.adicionais_produto_pedido && produtoPedido.adicionais_produto_pedido.length > 0) {
        for (const adic of produtoPedido.adicionais_produto_pedido) {
          if (adic.preco) {
            valor = valor + parseFloat(adic.preco+'');
          }
        }
      }
    }

    return valor
  }


  calcularTotalPedido(pedido: Pedido) {
    var valor = 0;
    for (const produtoPedido of pedido.produtos_pedido) {

      if (produtoPedido && produtoPedido.quantidade && produtoPedido.produto.preco) {
        valor = valor + (produtoPedido.quantidade * produtoPedido.produto.preco);
        if (produtoPedido.adicionais_produto_pedido && produtoPedido.adicionais_produto_pedido.length > 0) {
          for (const adic of produtoPedido.adicionais_produto_pedido) {
            if (adic.preco) {
              valor = valor + parseFloat(adic.preco+'');
            }
          }
        }
      }
    }

    this.valorTotal = valor;
    return this.valorTotal
  }

  calcularPagamento() {
    var valor = 0;
    console.log("calculando pagamento...")
    console.log(valor)
    for (const pagamento of this.formasPagamentoUtilizadas) {
      console.log("entrou no for...")
      if (pagamento && pagamento.valor) {
        console.log("tem pagamento...")
        if (pagamento.troco) {
          console.log("tem troco...")
          valor = valor + parseFloat(pagamento.valor.toFixed(2)) - parseFloat(pagamento.troco.toFixed(2));
        } else {
          console.log("não tem troco...")
          valor = valor + parseFloat(pagamento.valor.toFixed(2));
        }
      }
    }
    this.valorPagamento = parseFloat(valor.toFixed(2))

    this.valorPendente = (parseFloat(this.valorTotal.toFixed(2)) - parseFloat(this.valorPagamento.toFixed(2)))

    console.log("VALOR RESTANTE")
    console.log(this.valorPendente)
    if (this.valorPendente >= 0) {
      console.log("MAIOR OU IGUAL A ZERO")
      this.valorTroco = 0
      console.log("SEM TROCO")
      console.log(this.valorTroco)
    } else {
      console.log("MENOR QUE ZERO")
      console.log("COM TROCO")
      this.valorTroco = (this.valorPendente * (-1))
      this.valorPendente = 0
      console.log("Troco")
      console.log(this.valorTroco)
      console.log("Restante")
      console.log(this.valorPendente)
    }

    if (this.valorPendente == 0) {
      console.log('CONTA QUITADA...')
      if (this.valorTroco > 0) {
        console.log('TEM TROCO..')
        console.log('DEVOLVA O TROCO... ' + this.valorTroco.toFixed(2))
        return {
          ok: true,
          msg: `LEMBRE DE DEVOLVER O TROCO: R$ ${this.valorTroco.toFixed(2)}`
        }
      }
      console.log('CONTA QUITADA... TUDO OK')
      return {
        ok: true,
        msg: `TUDO OK... OBRIGADO!`
      }
    } else {
      console.log('FALTA DINEHRIO')
      console.log(this.valorPendente.toFixed(2));
      console.log('OPS.. FALTA DINHEIRO... ' + this.valorPendente.toFixed(2))
      return {
        ok: false,
        msg: `OPS.. PAGAMENTO INCOMPLETO... PENDENTE:${this.valorPendente.toFixed(2)} `
      }

    }
    //  return this.valorPagamento
  }

  getResumoDescricao(descricao: string | undefined) {
    if (descricao) {
      return descricao.split(".", 1);
    }
    return '';
  }

  //apagar
  formasChange(event: any) {
    console.log('FORMA EVENT')
    console.log(event)
  }

  //apagar
  alterarValor(forma: FormaPagamentoPedido) {
    console.log('ON CHANGE VALOR')
    console.log(forma)

    console.log('Formas já adicionadas')
    console.log(this.formasPagamentoUtilizadas)

    console.log('BUSCAR entre elas a Alterada')
    for (const formaSelecionada of this.formasPagamentoUtilizadas) {
      if (formaSelecionada.formaPagamento.id == forma.formaPagamento.id) {
        console.log('ENCONTROU')
        if (forma.valor) {
          formaSelecionada.valor = parseFloat(forma.valor.toFixed(2));
        } else {
          console.log('SEM VALOR')
          formaSelecionada.valor = 0
        }

        if (forma.troco) {
          formaSelecionada.troco = parseFloat(forma.troco.toFixed(2));
        } else {
          console.log('SEM TROCO')
          formaSelecionada.troco = 0
        }

        console.log(formaSelecionada)
        this.calcularPagamento();
        return
      }
    }
    console.log('NÂO ENCONTROU')
  }

  isFormaSelecionada(forma: FormaPagamentoPedido) {
    for (const formaSelecionada of this.formasPagamentoUtilizadas) {
      if (formaSelecionada.formaPagamento.id == forma.formaPagamento.id) {
        return true
      }
    }
    return false;
  }

  isFormaSelecionadaIsDinheiro(forma: FormaPagamentoPedido) {
    if (forma.formaPagamento.nome === 'Dinheiro') {
      return true
    }
    return false;
  }

}
