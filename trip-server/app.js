// 引入资源文件
var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var looger = require('morgan')

// 引入 index.js 路由配置文件
var indexRouter = require('./routes/index')

// 引入 user.js 路由配置文件
var userRouter = require('./routes/user')