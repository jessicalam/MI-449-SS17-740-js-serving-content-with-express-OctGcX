var express = require('express')
var app = express()
var port = process.env.PORT || 8080

app.use(express.static('assets'))

app.set('view engine', 'ejs')

var objs = {}

createObj({
  link: '/',
  title: 'Home',
  template: 'pages/index'
})

createObj({
  link: '/lurantis',
  title: 'Lurantis',
  template: 'pages/alola',
  type: 'Grass',
  img: 'lurantis.png',
  bulbapedia: 'http://bulbapedia.bulbagarden.net/wiki/Lurantis_(Pok%C3%A9mon)'
})

createObj({
  link: '/rowlet',
  title: 'Rowlet',
  template: 'pages/alola',
  type: 'Grass',
  img: 'rowlet.png',
  bulbapedia: 'http://bulbapedia.bulbagarden.net/wiki/Rowlet_(Pok%C3%A9mon)'
})

createObj({
  link: '/wishiwashi',
  title: 'Wishiwashi',
  template: 'pages/alola',
  type: 'Water',
  img: 'wishiwashi.png',
  bulbapedia: 'http://bulbapedia.bulbagarden.net/wiki/Wishiwashi_(Pok%C3%A9mon)'
})

Object.keys(objs).forEach(function (id) {
  app.get(objs[id].link, function (request, response) {
    response.render(objs[id].template, {
      objs: objs,
      pageinfo: objs[id]
    })
  })
})

app.listen(port)

function createObj (obj) {
  var id = Object.keys(objs).length
  objs[id] = obj
}
