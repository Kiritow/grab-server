const koa = require('koa')
const koaRouter = require('koa-router')
const koaBodyParser = require('koa-bodyparser')
const koaJson = require('koa-json')
const mysql = require('mysql')
const LuaJSON = require('lua-json')

const kwebapp = new koa()

kwebapp.use(koaBodyParser())
kwebapp.use(koaJson())

const router = new koaRouter()

kwebapp.use(router.routes()).use(router.allowedMethods())

kwebapp.listen(8080)
