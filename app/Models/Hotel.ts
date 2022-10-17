import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Hotel extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public name: string
  
  @column()
  public description: string
  
  @column()
  public image: string
  
  @column()
  public location: string
  
  @column()
  public latitude: string
  
  @column()
  public longitude: string
  
  @column()
  public telephone: number
  
  @column()
  public checkin: string
  
  @column()
  public checkout: string
  
  @column()
  public user_id: number
  
  @column()
  public province_id: number
  
  @column()
  public city_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
