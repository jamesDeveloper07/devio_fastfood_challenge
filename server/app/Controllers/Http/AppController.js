'use strict'

class AppController {
  index(){
    return 'HELLO FASTFOOD WORLD: VALIDAÇÂO LOGADO'
  }

  roleAdminValidation(){
    return 'HELLO FASTFOOD WORLD: VALIDAÇÂO LOGADO e ROLE ADMINISTRADOR'
  }

  roleCozinValidation(){
    return 'HELLO FASTFOOD WORLD: VALIDAÇÂO LOGADO e ROLE COZINHEIRO'
  }
}

module.exports = AppController
