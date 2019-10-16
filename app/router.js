'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  console.log(controller)
  console.log(controller.home.index)
  router.get('/', controller.home.index)
}
