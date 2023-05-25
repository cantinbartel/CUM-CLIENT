import { User } from '../types/user';
import { backendUrl } from '../utils';

/* GET ALL USERS */
export const getUsers = async(jwt: string) => {
    try {
        const response = await fetch(`${backendUrl}/api/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}` 
            }
        });
        const users = await response.json();
        console.log('USERS', users);
        return users;
    } catch(error) {
        console.log(error);
    }
};