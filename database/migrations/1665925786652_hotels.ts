import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'hotels'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.text('description')
      table.string('image')
      table.text('location')
      table.string('latitude')
      table.string('longitude')
      table.string('telephone')
      table.time('checkin')
      table.time('checkout')
      table.integer('user_id')
      table.integer('province_id')
      table.integer('city_id')

      table
        .foreign('user_id')
        .references('users.id')
        .onDelete('CASCADE')
      table
        .foreign('province_id')
        .references('provinces.id')
        .onDelete('CASCADE')
      table
        .foreign('city_id')
        .references('cities.id')
        .onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
