// some useful functions
const crypto = require('crypto')

let helper = {}

// returns the 8-4-4-4-12 format
helper.getUUID = () => {
  let numbers = []
  numbers.push(_rndUUIDString(8))
  numbers.push(_rndUUIDString(4))
  numbers.push(_rndUUIDString(4))
  numbers.push(_rndUUIDString(4))
  numbers.push(_rndUUIDString(12))
  return numbers.join('-')
}

helper.rndStringAll = (strLength) => {
  const characterList = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYX'
  let str = ''
  for(let i=0; i<strLength; i++){
    str +=  characterList.charAt(Math.floor(Math.random() * characterList.length))
  }
  return str
}

helper.rndInteger = (strLength) => {
  const intList = '1234567890'
  let str = ''
  for(let i=0; i<strLength; i++){
    str +=  intList.charAt(Math.floor(Math.random() * intList.length))
  }
  return str
}

_rndUUIDString = (strLength) => {
  const characterList = '1234567890abcdef'
  let str = ''
  for(let i=0; i<strLength; i++){
    str +=  characterList.charAt(Math.floor(Math.random() * characterList.length))
  }
  return str
}

// create a SHA256 hash useful for passwords
helper.hashString = (str, key='shhseeecret23451') => {
    return crypto.createHmac('sha256', key).update(str).digest('hex')
}

module.exports = helper 
