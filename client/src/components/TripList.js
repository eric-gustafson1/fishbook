import React from 'react';
import Card from './UIElements/Card';
import TripItem from './TripItem';
import Button from './FormElements/Button';
import './TripList.css';

const TripList = ({ items }) => {
    if (items.length === 0) {
        return <div className='trip-list center'>
            <Card>
                <h2>No trips found...</h2>
                <Button to='/trips/new'>Log a Trip</Button>
            </Card>

        </div>
    }

    return <ul className='trip-list'>
        {items.map(trip => <TripItem
            key={trip.id}
            id={trip.id}
            image={trip.image}
            title={trip.title}
            description={trip.description}
            address={trip.address}
            creatorId={trip.creator}
            coordinates={trip.location}

        />)}
    </ul>

}

export default TripList;