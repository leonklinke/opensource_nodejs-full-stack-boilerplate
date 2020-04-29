'use strict'

const User = use("App/Models/User");

class UserController {
    async create({ request }) {
        const data = request.only(["name", "email", "password"]);

        const user = await User.create(data);

        return user;
    }
    async listAll() {
        const user = await User.all()

        return user;
    }
    async delete({ params }) {
        const user = await User.findOrFail(params.id);
        await user.delete();

    }

}

module.exports = UserController
