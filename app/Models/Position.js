'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Position extends Model {
            
    static get table () {
        return 'positions'
    }

    static get primaryKey () {
        return 'id'
    }
}

module.exports = Position
