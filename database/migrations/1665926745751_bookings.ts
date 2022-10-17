import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'bookings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('phone')
      table.date('start_date')
      table.date('due_date')
      table.string('payment_approval')
      table.enu('status', ['checking', 'success'])
      table.integer('user_id')
      table.integer('room_id')

      table
        .foreign('user_id')
        .references('users.id')
        .onDelete('CASCADE')

      table
      .foreign('room_id')
      .references('rooms.id')
      .onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
