import React from 'react';
import Card from './UIElements/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = ({ items }) => {
    if (items.length === 0) {
        return <div className='place-list center'>
            <Card>
                <h2>No trips found...</h2>
                <button>Log a Trip</button>
            </Card>

        </div>
    }

    return <ul className='place-list'>
        {items.map(place => <PlaceItem
            key={place.id}
            id={place.id}
            image={place.image}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}

        />)}
    </ul>

}

export default PlaceList;