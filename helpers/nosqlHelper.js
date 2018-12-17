const helper = require('./helper')  
const PouchDB = require('pouchdb')
let db = new PouchDB('test_data')
let couch = new PouchDB('http://daniel:rose1844@127.0.0.1:5984/test_data')

// sync local with remote databses
PouchDB.replicate(db, couch, {live: true})
PouchDB.replicate(couch, db, {live: true})

noSQLHelper = {}

// POST
noSQLHelper.saveNewDoc = async doc => {
  try {
    if(typeof doc._id == "undefined") {
      doc._uid = helper.getUUID()
    }
    let result = await db.put(doc)
    return result
  } catch (err) {
    console.error(err)
    return err
  }
}

//PUT
noSQLHelper.updateDoc = async data => { 
  try {
    let currentDoc = await db.get(data._id) 
    data._rev = currentDoc._rev 
    let result = await db.put(data)  
    return result
  } catch(err) { 
    console.error(err)
    return err
  }   
}

//GET
noSQLHelper.getDoc = async id => {
  try {
    let doc = await db.get(id)
    return doc
  } catch (err) {
    console.error(err)
    return err
  }
}

//DELETE
noSQLHelper.deletetDoc = async id =>{
  try {
    let doc = await db.get(id)
    let result = await db.remove(id, doc._rev)
    return result
  }
  catch(err){
    console.error(err)
    return err
  }
}

module.exports = noSQLHelper
