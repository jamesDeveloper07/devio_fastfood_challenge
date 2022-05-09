'use strict'

class PedidoWsController {
  constructor({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onCall(data) {
    console.log('CHAMOU O PEDIDO_WS')
    console.log({data})
    this.socket.broadcastToAll("call", data);
  }

}

module.exports = PedidoWsController
