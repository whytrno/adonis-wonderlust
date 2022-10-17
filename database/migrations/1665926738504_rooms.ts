import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'rooms'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.enu('room_type', ['standart', 'superior', 'deluxe'])
      table.integer('capacity')
      table.integer('price')
      table.integer('total_room')
      table.integer('hotel_id')

      table
        .foreign('hotel_id')
        .references('hotels.id')
        .onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
