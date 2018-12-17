// usage of a noSQL DB
const express = require('express')
const router = express.Router()
const nosqlHelper = require('../helpers/nosqlHelper')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  console.log('GET',)
  res.send('GET which document')
})  
.get('/:id', async (req, res, next) => {
  let id = req.param('id')
  let doc = await noSQLHelper.getDoc(id)
  console.log('GET', doc)
  res.send(doc)
})
.post('/', async (req, res, next) => {
  let doc = req.body
  let result = await nosqlHelper.saveNewDoc(doc)
  console.log('POST', result)
  res.send(result)
})
.put('/', async (req, res, next) => {
  let doc = req.body
  let result = await nosqlHelper.updateDoc(doc)
  console.log('PUT', result)
  res.send(result)
})
.delete('/', async (req, res, next) => {
  console.log('DELETE which documet?')
  res.send('DELETE which documet?')
})
.delete('/:id', async (req, res, next) => {
  let id = req.param('id')
  let result = await noSQLHelper.deletetDoc(id)
  console.log('DELETE', result)
  res.send(result)
})
module.exports = router