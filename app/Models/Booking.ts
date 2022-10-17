import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Booking extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public phone: number

  @column()
  public start_date: string

  @column()
  public due_date: string

  @column()
  public payment_approval: string

  @column()
  public status: string

  @column()
  public user_id: number

  @column()
  public room_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
