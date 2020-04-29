import api from './api';

const UserService = {}

UserService.listAll = async (data) => {
    try {
        const response = await api.get('/user');
        if (response.data == null) {
            return [];
        }
        return response.data;
    } catch (err) {
        console.log("error user list", err);
    }
}
UserService.create = async (data) => {
    try {
        const response = await api.post('/user',
            data
        );
        if (response.data == null) {
            return [];
        }
        return response.data;
    } catch (err) {
        console.log("error user create", err);
    }
}
UserService.delete = async (id) => {
    try {
        const response = await api.delete('/user/' + id);
        if (response.data == null) {
            return [];
        }
        return response.data;
    } catch (err) {
        console.log("error user delete", err);
    }
}

export default UserService;