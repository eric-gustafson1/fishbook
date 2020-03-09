import React from 'react';
import Card from './UIElements/Card';
import TripItem from './TripItem';
import Button from './FormElements/Button';
import './TripList.css';

const TripList = (props) => {
    if (props.items.length === 0) {
        return <div className='trip-list center'>
            <Card>
                <h2>No trips found...</h2>
                <Button to='/trips/new'>Log a Trip</Button>
            </Card>

        </div>
    }

    return <ul className='trip-list'>
        {props.items.map(trip => <TripItem
            key={trip.id}
            id={trip.id}
            image={trip.image}
            title={trip.title}
            date={trip.date}
            weather={trip.weather}
            flies={trip.flies}
            description={trip.description}
            address={trip.address}
            creatorId={trip.creator}
            coordinates={trip.location}
            onDelete={props.onDeleteTrip}

        />)}
    </ul>

}

export default TripList;