import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Produto, ProdutoFiltro, AdicionalFiltro, Pedido } from './../core/model';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  categoriaUrl: string;
  formaPagamentoUrl: string;
  produtoUrl: string;
  adicionalUrl: string;
  pedidoUrl: string;

  constructor(private http: HttpClient, private datePipe: DatePipe) {
    this.categoriaUrl = `${environment.apiUrl}/common/categoria`;
    this.formaPagamentoUrl = `${environment.apiUrl}/common/forma_pagamento`;
    this.produtoUrl = `${environment.apiUrl}/common/produto`;
    this.adicionalUrl = `${environment.apiUrl}/common/adicional`;
    this.pedidoUrl = `${environment.apiUrl}/common/pedido`;
  }

  consultarCategorias(): Promise<any> {
    let params = new HttpParams();

    params = params.set('page', 0)
    params = params.set('size', 5)

    return this.http.get(`${this.categoriaUrl}`, {
      params
    })
      .toPromise()
      .then((response: any) => {
        console.log('RESPONSE CATEGORIAS')
        console.log({ response })
        return response
      })
  }

  consultarFormasPagamento(): Promise<any> {
    let params = new HttpParams();

    params = params.set('page', 0)
    params = params.set('size', 5)

    return this.http.get(`${this.formaPagamentoUrl}`, {
      params
    })
      .toPromise()
      .then((response: any) => {
        console.log('RESPONSE FORMAS')
        console.log({ response })
        return response
      })
  }

  consultarProdutos(filtro: ProdutoFiltro): Promise<any> {
    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString())
    params = params.set('size', filtro.itensPorPagina.toString())

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao)
    }

    if (filtro.categoria_id) {
      params = params.set('categoria_id', filtro.categoria_id);
    }

    return this.http.get(`${this.produtoUrl}`, {
      params
    })
      .toPromise()
      .then((response: any) => {
        console.log('RESPONSE PRODUTOS')
        console.log({ response })
        return response
      })
  }


  consultarAdicionais(filtro: AdicionalFiltro): Promise<any> {
    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString())
    params = params.set('size', filtro.itensPorPagina.toString())

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao)
    }

    if (filtro.categoria_id) {
      params = params.set('categoria_id', filtro.categoria_id);
    }

    return this.http.get(`${this.adicionalUrl}`, {
      params
    })
      .toPromise()
      .then((response: any) => {
        console.log('RESPONSE ADICIONAIS')
        console.log({ response })
        return response
      })
  }

  consultarPedidos(status: string): Promise<any> {
    let params = new HttpParams();

    if (status) {
      params = params.set('status', status)
    }

    return this.http.get(`${this.pedidoUrl}`, {
      params
    })
      .toPromise()
      .then((response: any) => {
        console.log('RESPONSE PEDIDOS')
        console.log({ response })
        return response
      })
  }

  adicionar(pedido: Pedido): Promise<Pedido | undefined> {
    console.log('Ghegou no SERVICE ADICIONAR')
    console.log(pedido)
    return this.http.post<Pedido>(`${this.pedidoUrl}`, pedido)
      .toPromise()
      .then(response => response)
      .catch(erro => {
        console.log("NO ERRO DO SERVICE")
        console.log(erro)
        return erro;
      })
  }

  avancarPedido(pedido: Pedido): Promise<Pedido | undefined> {
    return this.http.get<Pedido>(`${this.pedidoUrl}/${pedido.id}/avancar`)
      .toPromise()
      .then(response => response)
  }

  regredirPedido(pedido: Pedido): Promise<Pedido | undefined> {
    return this.http.get<Pedido>(`${this.pedidoUrl}/${pedido.id}/regredir`)
      .toPromise()
      .then(response => response)
  }

  cancelarPedido(pedido: Pedido): Promise<Pedido | undefined> {
    return this.http.get<Pedido>(`${this.pedidoUrl}/${pedido.id}/cancelar`)
      .toPromise()
      .then(response => response)
  }

  atualizar(pedido: Pedido): Promise<Pedido | undefined> {
    return this.http.put<Pedido>(`${this.pedidoUrl}/${pedido.id}`, pedido)
      .toPromise()
      .then(response => response)
  }


  excluir(id: number): Promise<void | null> {
    return this.http.delete(`${this.pedidoUrl}/${id}`)
      .toPromise()
      .then(() => null)
  }

}
