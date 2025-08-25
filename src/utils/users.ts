import axios from './axios';

export interface User {
    emailAddress: string;
    firstName: string;
    lastName: string;
    superAdmin: boolean;
}

export interface UsersLookup {
    [id: number]: User;
}

export interface UserPermission extends User {
    id: number;
    teamOwnerList: number[];
}

export async function fetchUsers(): Promise<UsersLookup> {
    const response = await axios.get('http://localhost:8000/users', {
        withCredentials: true,
    });
    const users: UsersLookup = {};

    for (const { id, email_address, first_name, last_name } of response.data) {
        users[id] = {
            emailAddress: email_address,
            firstName: first_name,
            lastName: last_name,
            superAdmin: false,
        };
    }

    return users;
}

export async function fetchUserPriviledge(): Promise<UserPermission> {
    const response = await axios.get(
        'http://localhost:8000/permissions_by_current_user_id'
    );
    const user = response.data['user_info'][0];
console.log('in function: userid is', user.id, 'team owner list is ', user.team_admin_team_ids);
    return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        emailAddress: user.email_address,
        superAdmin: user.super_admin,
        teamOwnerList: user.team_admin_team_ids,
    };
}
