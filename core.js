const {resolve} = require('path')
const {readFileSync} = require('fs')
const {safeLoad} = require('js-yaml')

const yamlPath = resolve(__dirname, 'core.yaml')
const yamlString = readFileSync(yamlPath, {encoding: 'utf8'})

module.exports = safeLoad(yamlString)
