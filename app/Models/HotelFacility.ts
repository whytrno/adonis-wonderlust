import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class HotelFacility extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public hotel_id: number

  @column()
  public facility_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
