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

export const verifyPassword = async(email: string, password: string) => {

    try {

        const data = {
            email,
            password
        }

        const response = await fetch(`${backendUrl}/api/users/verifyPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        const verification = await response.json();
        console.log('VERIFICATION', verification);
        return verification;
    } catch(error) {
        console.log(error);
    }

};