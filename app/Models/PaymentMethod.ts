import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PaymentMethod extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public bank_name: string

  @column()
  public bank_number: number

  @column()
  public bank_owner: string

  @column()
  public hotel_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
