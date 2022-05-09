export class Login {
  usuario: string | undefined;
  senha: string | undefined;
}


export class Categoria {
  id: number | undefined;
  nome: string | undefined;
}

export class CategoriaFiltro {
  nome?: string;
  pagina = 0;
  itensPorPagina = 5;
}


export class Produto {
  id: number | undefined;
  nome: string | undefined;
  descricao: string | undefined;
  categoria_id: number | undefined;
  categoria = new Categoria();
  preco: number | undefined;
  image_url: string | undefined;
  status: string = 'ativo';
  created_at: Date | undefined;
  updated_at: Date | undefined;
  deleted_at: Date | undefined;
}


export class ProdutoFiltro {
  descricao?: string;
  categoria_id?: number;
  pagina = 0;
  itensPorPagina = 15;
}

export class FormaPagamento {
  id: number | undefined;
  nome: string | undefined;
  status: string = 'ativo';
  created_at: Date | undefined;
  updated_at: Date | undefined;
  deleted_at: Date | undefined;
}

export class FormaPagamentoPedido {
  id: number | undefined;
  pedido_id: number | undefined;
  pedido = new Pedido();
  forma_pagamento_id: number | undefined;
  formaPagamento = new FormaPagamento();
  valor: number | undefined;
  troco: number | undefined;
  created_at: Date | undefined;
  updated_at: Date | undefined;
  deleted_at: Date | undefined;
}

export class ProdutoPedido {
  id: number | undefined;
  pedido_id: number | undefined;
  pedido = new Pedido();
  produto_id: number | undefined;
  produto = new Produto();
  quantidade: number | undefined = 1;
  observacao: string | undefined;
  adicionais_produto_pedido: Array<Adicional> = [];
  created_at: Date | undefined;
  updated_at: Date | undefined;
  deleted_at: Date | undefined;
}

export class Pedido {
  id: number | undefined;
  codigo: number | undefined;
  nome_cliente: string | undefined;
  contato_cliente: string | undefined;
  status: string = 'ativo';
  user_id: number | undefined;
  valor_total: number | undefined;
  valor_pagamento: number | undefined;
  troco: number | undefined;
  created_at: Date | undefined;
  ready_at: Date | undefined;
  paid_at: Date | undefined;
  delivered_at: Date | undefined;
  updated_at: Date | undefined;
  deleted_at: Date | undefined;

  produtos_pedido: Array<ProdutoPedido> = [];
  formas_pagamento_pedido: Array<FormaPagamentoPedido> = [];

  valorTotal: number | undefined;
}


export class Adicional {
  id: number | undefined;
  nome: string | undefined;
  descricao: string | undefined;
  categoria_id: number | undefined;
  categoria = new Categoria();
  preco: number | undefined;
  image_url: string | undefined;
  status: string = 'ativo';
  created_at: Date | undefined;
  updated_at: Date | undefined;
  deleted_at: Date | undefined;
}


export class AdicionalFiltro {
  descricao?: string;
  categoria_id?: number;
  pagina = 0;
  itensPorPagina = 15;
}

