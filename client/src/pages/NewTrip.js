import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../components/FormElements/Input';
import Button from '../components/FormElements/Button';
import ErrorModal from '../components/UIElements/ErrorModal';
import LoadingSpinner from '../components/UIElements/LoadingSpinner';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../components/utils/validators';
import { useForm } from '../components/hooks/form-hook';
import { AuthContext } from '../components/context/auth-context';
import ImageUpload from '../components/FormElements/ImageUpload';
import './FormTrip.css';

const NewTrip = () => {
    const auth = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formState, InputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        address: {
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
        },
        image: {
            value: null,
            isValid: false
        }
    }, false);


    const history = useHistory();

    const tripSubmitHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append('title', formState.inputs.title.value)
        formData.append('description', formState.inputs.description.value)
        formData.append('address', formState.inputs.address.value)
        formData.append('weather', formState.inputs.weather.value)
        formData.append('flies', formState.inputs.flies.value)
        formData.append('date', formState.inputs.date.value)
        formData.append('image', formState.inputs.image.value)
        // formData.append('creator', auth.userId)

        console.log(process.env.REACT_APP_BACKEND_URL)
        try {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}/trips`, {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: 'Bearer ' + auth.token
                }
            })
            // return the user to starting page after logging a trip
            history.push('/');
        } catch (err) {
            setIsLoading(false);
            setError(err.message || 'Something went wrong, try again.')

        }
        setIsLoading(false);
    };

    const errorHandler = () => {
        setError(null);
    };


    return (
        <>
            <ErrorModal error={error} onClear={errorHandler} />
            {isLoading && <LoadingSpinner asOverlay />}
            <form className='trip-form' onSubmit={tripSubmitHandler}>
                <Input
                    id='title'
                    element='input'
                    type='text'
                    label='Title'
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText='Enter a title...'
                    onInput={InputHandler}
                />
                <Input
                    id='description'
                    element='textarea'
                    label='Description'
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText='Enter a description...'
                    onInput={InputHandler}
                />
                <Input
                    id='address'
                    element='input'
                    label='Nearest Town'
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText='Enter the nearest town...'
                    onInput={InputHandler}
                />
                <Input
                    id='weather'
                    element='input'
                    label='Weather Conditions'
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText='Describe the weather...'
                    onInput={InputHandler}
                />
                <Input
                    id='flies'
                    element='input'
                    label='Flies Used'
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText='What flies worked...'
                    onInput={InputHandler}
                />
                <Input
                    id='date'
                    element='input'
                    label='Trip Date'
                    type='date'
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText='Enter the date...'
                    onInput={InputHandler}
                />
                <ImageUpload id='image' onInput={InputHandler} errorText="Please provide an image..." />
                <Button type='submit' disabled={!formState.isValid} >ADD TRIP</Button>
            </form>
        </>
    );
};

export default NewTrip;