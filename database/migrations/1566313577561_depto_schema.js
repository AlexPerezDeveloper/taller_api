'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeptoSchema extends Schema {
  up () {
    this.create('deptos', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()      
      table.timestamps()
    })
  }

  down () {
    this.drop('deptos')
  }
}

module.exports = DeptoSchema
