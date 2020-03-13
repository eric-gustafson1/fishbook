import React, { useState, useContext } from 'react';
import Card from '../components/UIElements/Card';
import Input from '../components/FormElements/Input';
import Button from '../components/FormElements/Button';
import ErrorModal from '../components/UIElements/ErrorModal';
import LoadingSpinner from '../components/UIElements/LoadingSpinner';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../components/utils/validators'
import { useForm } from '../components/hooks/form-hook';
import { AuthContext } from '../components/context/auth-context';
import ImageUpload from '../components/FormElements/ImageUpload';
import { useHistory } from 'react-router-dom';
import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }

    }, false);

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined,
                    image: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid);
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    },
                    image: {
                        value: null,
                        isValid: false
                    }
                },
                false
            );
        }
        setIsLoginMode(prevMode => !prevMode);
    };

    const authSubmitHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        if (isLoginMode) {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    })
                });

                const responseData = await response.json();
                if (!response.ok) {
                    throw new Error(responseData.message);
                }
                setIsLoading(false);
                auth.login(responseData.userId, responseData.token);
            } catch (err) {
                setIsLoading(false);
                setError(err.message || 'Something went wrong, try again.')
            }

        } else {
            try {
                const formData = new FormData();
                formData.append('email', formState.inputs.email.value)
                formData.append('name', formState.inputs.name.value)
                formData.append('password', formState.inputs.password.value)
                formData.append('image', formState.inputs.image.value)

                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/signup`, {
                    body: formData,
                    method: 'POST'
                });

                const responseData = await response.json();
                if (!response.ok) {
                    throw new Error(responseData.message);
                }
                setIsLoading(false);
                auth.login(responseData.userId, responseData.token);
                history.push('/');

            } catch (err) {
                setIsLoading(false);
                setError(err.message || 'Something went wrong, try again.')
            }
        }
    };

    const errorHandler = () => {
        setError(null);
    }

    const history = useHistory();

    return (
        <>
            <ErrorModal error={error} onClear={errorHandler} />
            <Card className='authentication'>
                {isLoading && <LoadingSpinner asOverlay />}
                <h2>Login Required</h2>
                <hr />
                <form onSubmit={authSubmitHandler}>
                    {!isLoginMode && (
                        <Input
                            element='input'
                            id='name'
                            type='text'
                            label='Enter a Username'
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText='Enter a Username of 6 characters or longer'
                            onInput={inputHandler}
                        />
                    )}

                    {!isLoginMode && <ImageUpload center id={'image'} onInput={inputHandler} errorText="Please provide an image..." />}

                    <Input
                        element='input'
                        id='email'
                        type='email'
                        label='Email'
                        validators={[VALIDATOR_EMAIL()]}
                        errorText='Enter a valid email address'
                        onInput={inputHandler}
                    />

                    <Input
                        element='input'
                        id='password'
                        type='password'
                        label='Password'
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        errorText='Password must be at least 6 characters'
                        onInput={inputHandler}
                    />
                    <Button type='submit' disabled={!formState.isValid}>
                        {isLoginMode ? 'LOGIN' : 'SIGNUP'}
                    </Button>
                </form>
                <Button inverse onClick={switchModeHandler}>
                    SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
                </Button>
            </Card>
        </>
    );
};

export default Auth;