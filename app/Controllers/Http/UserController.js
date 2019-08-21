//const Mail = use('Mail');
const User = use('App/Models/User');

class UserController {
  async index ({response}) {
    let users = await User.all()
    return response.json(users)
  }

  async show ({params, response}) {
    const user = await User.find(params.id)

    return response.json(user)
  }

  async store ({request, response}) {
    const userInfo = request.only(['username', 'password', 'name', 'lastname', 'age', 'id_position', 'id_depto'])

    const user = new User()
    user.username = userInfo.username
    user.password = userInfo.password
    user.name = userInfo.lastname
    user.age = userInfo.age
    user.id_position = userInfo.id_position
    user.id_depto = userInfo.id_depto

    await user.save()

    return response.status(201).json(user)
  }

  async update ({params, request, response}) {
    const userInfo = request.only(['username', 'password', 'name', 'lastname', 'age', 'id_position', 'id_depto'])

    const user = await User.find(params.id)
    if (!book) {
      return response.status(404).json({data: 'Resource not found'})
    }
    user.username = userInfo.username
    user.password = userInfo.password
    user.name = userInfo.lastname
    user.age = userInfo.age
    user.id_position = userInfo.id_position
    user.id_depto = userInfo.id_depto

    await user.save()

    return response.status(200).json(user)
  }

  async delete ({params, response}) {
    const user = await User.find(params.id)
    if (!user) {
      return response.status(404).json({data: 'Resource not found'})
    }
    await user.delete()

    return response.status(204).json(null)
  }
  
}

module.exports = UserController;
