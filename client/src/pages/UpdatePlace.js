import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../components/FormElements/Input';
import Button from '../components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../components/utils/validators';
import { useForm } from '../components/hooks/form-hook';
import './FormPlace.css';


const TEMP_PLACES = [
    {
        id: 'p1',
        title: 'Eagle River',
        description: 'Easy access and beautiful river',
        image: 'https://www.coloradoflyfishingreports.com/co-fly-fishing-blog/wp-content/uploads/2015/03/CO_Rainbow_Trout_March-1024x593.jpg',
        address: 'Gypsum, CO',
        creator: 'u1',
        location: {
            lat: 39.653170,
            lng: -106.913686
        }
    },
    {
        id: 'p2',
        title: 'Eagle River',
        description: 'Easy access and beautiful river',
        image: 'https://www.coloradoanglingcompany.com/wp-content/uploads/2018/03/Eagle-River-Trout-Spring-2018.jpg',
        address: 'Gypsum, CO',
        creator: 'u2',
        location: {
            lat: 39.653170,
            lng: -106.913686
        }
    },
    {
        id: 'p3',
        title: 'Eagle River',
        description: 'Easy access and beautiful river',
        image: 'https://eagleoutside.com/wp-content/uploads/2015/06/Eagle-River-2.jpg',
        address: 'Gypsum, CO',
        creator: 'u3',
        location: {
            lat: 39.653170,
            lng: -106.913686
        }
    }
]


const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().pid;

    const [formState, InputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false);

    const identifiedPlace = TEMP_PLACES.find(place => place.id === placeId)

    useEffect(() => {
        setFormData({
            title: {
                value: identifiedPlace.title,
                isValid: true
            },
            description: {
                value: identifiedPlace.description,
                isValid: true
            }
        }, true)
        setIsLoading(false);
    }, [setFormData, identifiedPlace]);

    const placeUpdateSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formState.inputs);

    };

    if (!identifiedPlace) {
        return (
            <div className='center'>
                <h2>Trip was not found</h2>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className='center'>
                <h2>Loading...</h2>
            </div>
        )
    }

    return (

        <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
            <Input
                id='title'
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a title...'
                onInput={InputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id='description'
                element='textarea'
                label='Description'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Please enter a description...'
                onInput={InputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type='submit' disabled={!formState.isValid} >
                UPDATE TRIP</Button>
        </form>

    )
}

export default UpdatePlace;