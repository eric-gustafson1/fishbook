import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Input from '../components/FormElements/Input';
import Button from '../components/FormElements/Button';
import Card from '../components/UIElements/Card';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../components/utils/validators';
import { useForm } from '../components/hooks/form-hook';
import ErrorModal from '../components/UIElements/ErrorModal';
import LoadingSpinner from '../components/UIElements/LoadingSpinner';
import { AuthContext } from '../components/context/auth-context';
import './FormTrip.css';



const UpdateTrip = () => {
    const tripId = useParams().pid;
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [loadedTrip, setLoadedTrip] = useState();
    const history = useHistory();
    const auth = useContext(AuthContext);



    const [formState, InputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        weather: {
            value: '',
            isValid: false
        },
        flies: {
            value: '',
            isValid: false
        },
        date: {
            value: '',
            isValid: false
        }
    }, false);


    useEffect(() => {
        const fetchTrip = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/trips/${tripId}`);

                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.message)
                }
                setLoadedTrip(responseData.trip)

                setFormData({
                    title: {
                        value: responseData.trip.title,
                        isValid: true
                    },
                    description: {
                        value: responseData.trip.description,
                        isValid: true
                    },
                    weather: {
                        value: responseData.trip.weather,
                        isValid: true
                    },
                    flies: {
                        value: responseData.trip.flies,
                    }
                }, true)


            } catch (err) {
                setIsLoading(false)
                setError(err.message)

            }

        }
        fetchTrip()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const tripUpdateSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}/trips/${tripId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    title: formState.inputs.title.value,
                    description: formState.inputs.description.value,
                    weather: formState.inputs.weather.value,
                    flies: formState.inputs.flies.value
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token

                }
            });
            history.push('/' + auth.userId + '/trips')
        } catch (err) {
            setIsLoading(false);
            setError(err.message)

        }


    };

    if (isLoading) {
        return (
            <div className='center'>
                <LoadingSpinner />
            </div>
        )
    }

    if (!loadedTrip && !error) {
        return (
            <div className='center'>
                <Card>
                    <h2>Trip was not found</h2>
                </Card>
            </div>
        )
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
            <ErrorModal error={error} onClear={errorHandler} />
            {!isLoading && loadedTrip && (
                <form className='trip-form' onSubmit={tripUpdateSubmitHandler}>
                    <Input
                        id='title'
                        element='input'
                        type='text'
                        label='Title'
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText='Please enter a title...'
                        onInput={InputHandler}
                        initialValue={loadedTrip.title}
                        initialValid={true}
                    />
                    <Input
                        id='description'
                        element='textarea'
                        label='Description'
                        validators={[VALIDATOR_MINLENGTH(5)]}
                        errorText='Please enter a description...'
                        onInput={InputHandler}
                        initialValue={loadedTrip.description}
                        initialValid={true}
                    />
                    <Input
                        id='weather'
                        element='input'
                        type='text'
                        label='Weather Conditions'
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText='Describe the weather...'
                        onInput={InputHandler}
                        initialValue={loadedTrip.weather}
                        initialValid={true}
                    />
                    <Input
                        id='flies'
                        element='input'
                        type='text'
                        label='Flies Used'
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText='What flies worked...'
                        onInput={InputHandler}
                        initialValue={loadedTrip.flies}
                        initialValid={true}
                    />
                    <Button type='submit' disabled={!formState.isValid} >
                        UPDATE TRIP</Button>
                </form>
            )}
        </>

    )
}

export default UpdateTrip;