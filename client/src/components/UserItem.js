import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../components/UIElements/Avatar';
import Card from '../components/UIElements/Card';
import './UserItem.css'

const UserItem = ({ id, image, name, tripCount }) => {
    return (
        <li className='user-item'>
            <Card className='user-item__content'>
                <Link to={`/${id}/trips`} >
                    <div className='user-item__image'>
                        <Avatar image={`${process.env.REACT_APP_ASSET_URL}/${image}`} alt={name} />
                    </div>
                    <div className='user-item__info'>
                        <h2>{name}</h2>
                        <h3>{tripCount} {tripCount === 1 ? 'Trip' : 'Trips'}</h3>
                    </div>
                </Link>
            </Card>
        </li>
    )

};

export default UserItem;