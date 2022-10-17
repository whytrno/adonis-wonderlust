import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
    public async index({ response }: HttpContextContract) {
        const users = await User.all()

        if(users.length != 0){
            return response.status(200).json({
                code: 200,
                status: 'success',
                data: users
            })
        }else {
            return response.status(500).json({
                code: 500,
                status: 'error',
                message: 'There is no data'
            })
        }
    }
}
