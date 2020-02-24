import React from 'react';
import UsersList from '../components/UsersList';
import pic from './EricHeadShot.jpg'

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Eric Gustafson',
            image: pic,
            places: 5
        }
    ];

    return <UsersList items={USERS} />
};

export default Users;