'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments('id').notNullable().unique() 
      table.string('username', 80).notNullable().unique()      
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('age', 2).notNullable()
      table.string('name', 20).notNullable()
      table.string('lastname', 100).notNullable()
      table.integer('id_position', 2).unsigned().references('id').inTable('position');
      table.integer('id_depto', 3).unsigned().references('id').inTable('depto');
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
