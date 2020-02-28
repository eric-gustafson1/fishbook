import React from 'react';
import UsersList from '../components/UsersList';
import pic from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Eric',
            image: pic,
            places: 5
        },
        {
            id: 'u2',
            name: 'Jon',
            image: pic2,
            places: 5
        },
        {
            id: 'u3',
            name: 'John',
            image: pic3,
            places: 5
        }
    ];

    return <UsersList items={USERS} />
};

export default Users;