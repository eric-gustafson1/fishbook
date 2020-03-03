import React from 'react';
import UserItem from './UserItem';
import Card from '../components/UIElements/Card';
import './UsersList.css';

const UsersList = ({ items }) => {
    if (items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No users found...</h2>
                </Card>

            </div>
        );
    }

    return (
        <ul className='users-list'>
            {items.map(user => {
                return <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    tripCount={user.trips}
                />
            })}
        </ul>
    );
};

export default UsersList;