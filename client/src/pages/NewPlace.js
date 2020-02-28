import React from 'react';
import Input from '../components/FormElements/Input';
import Button from '../components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../components/utils/validators';
import { useForm } from '../components/hooks/form-hook';
import './FormPlace.css';


const NewPlace = () => {
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
        }
    }, false);


    const placeSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formState.inputs) //send this to the back end
    }

    return (
        <form className='place-form' onSubmit={placeSubmitHandler}>
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
                label='Address'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Enter the nearest town...'
                onInput={InputHandler}
            />
            <Button type='submit' disabled={!formState.isValid} >ADD TRIP</Button>
        </form>
    )

};

export default NewPlace;