'use strict'

const Controller = require('egg').Controller

class LoginController extends Controller {
  async login() {
    const { ctx } = this
    ctx.body = 'hi, egg'
  }
}

module.exports = LoginController
