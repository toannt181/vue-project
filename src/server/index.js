const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
const path = require('path')

const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer({
  /* options */
})

const createApp = require('/path/to/built-server-bundle.js')

server.get('*', (req, res) => {
  const context = { url: req.url }

  createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    })
  })
})

server.listen(8080)
console.log('SERVER RUN ON 8080')
