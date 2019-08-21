'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PositionSchema extends Schema {
  up () {
    this.create('positions', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()      
      table.timestamps()
    })
  }

  down () {
    this.drop('positions')
  }
}

module.exports = PositionSchema
