import React from 'react';
import Input from '../components/FormElements/Input';
import Button from '../components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../components/utils/validators';
import { useForm } from '../components/hooks/form-hook';
import './FormTrip.css';


const NewTrip = () => {
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
        }
    }, false);


    const tripSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formState.inputs) //send this to the back end
    }

    return (
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
            <Button type='submit' disabled={!formState.isValid} >ADD TRIP</Button>
        </form>
    )

};

export default NewTrip;