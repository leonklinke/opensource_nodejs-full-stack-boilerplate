import api from './api';

const UserService = {}

UserService.get = async (data) => {
    try {
        const response = await api.post('/user/list',
            ...data
        );
        if (response.data == null) {
            return [];
        }
        return response.data;
    } catch (err) {
        console.log("error user list", err);
    }
}
UserService.add = async (data) => {
    try {
        const response = await api.post('/user/add',
            ...data
        );
        if (response.data == null) {
            return [];
        }
        return response.data;
    } catch (err) {
        console.log("error user add", err);
    }
}
UserService.delete = async (data) => {
    try {
        const response = await api.post('/user/delete',
            { id_user: parseInt(data.id_user) }
        );
        if (response.data == null) {
            return [];
        }
        return response.data;
    } catch (err) {
        console.log("error user delete", err);
    }
}

export default UserService;