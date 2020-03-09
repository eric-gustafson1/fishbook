import React, { useEffect, useState } from 'react';
import UsersList from '../components/UsersList';
import ErrorModal from '../components/UIElements/ErrorModal';
import LoadingSpinner from '../components/UIElements/LoadingSpinner';

const Users = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [loadedUsers, setLoadedUsers] = useState();


    useEffect(() => {
        const sendRequest = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`);

                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.message);
                }
                setLoadedUsers(responseData.users);
            } catch (err) {
                setIsLoading(false);
                setError(err.message);
            }
            setIsLoading(false);
        };
        sendRequest();
    }, []);

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
            <ErrorModal error={error} onClear={errorHandler} />
            {isLoading && (
                <div className="center">
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
        </>
    );
};

export default Users;