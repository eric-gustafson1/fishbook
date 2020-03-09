import React, { useState, useEffect } from 'react';
import TripList from '../components/TripList';
import { useParams } from 'react-router-dom';
import ErrorModal from '../components/UIElements/ErrorModal';
import LoadingSpinner from '../components/UIElements/LoadingSpinner';



const UserTrips = () => {
    const userId = useParams().userid;
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadedTrips, setLoadedTrips] = useState();

    useEffect(() => {
        const fetchTrips = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/trips/user/${userId}`);

                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.message)
                }
                setLoadedTrips(responseData.trips);

            } catch (err) {
                setIsLoading(false);
                setError(err.message);
            }
            setIsLoading(false);

        }
        fetchTrips();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const errorHandler = () => {
        setError(null);
    }

    const TripDeletedHandler = (deletedTripId) => {
        setLoadedTrips(prevTrips => prevTrips.filter(trip => trip.id !== deletedTripId))

    }

    return (
        <>
            <ErrorModal error={error} onClear={errorHandler} />
            {isLoading && (
                <div className='center'>
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && loadedTrips && <TripList items={loadedTrips} onDeleteTrip={TripDeletedHandler} />}

        </>
    )
};


export default UserTrips;