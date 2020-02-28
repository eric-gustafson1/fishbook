import React, { useState, useContext } from 'react';
import Card from '../components/UIElements/Card';
import Input from '../components/FormElements/Input';
import Button from '../components/FormElements/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../components/utils/validators'
import { useForm } from '../components/hooks/form-hook';
import { AuthContext } from '../components/context/auth-context'
import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
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
                    name: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid)
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    }
                }, false)
        }
        setIsLoginMode(predMode => !predMode)
    }

    const authSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formState.inputs)
        auth.login();
    }

    return (
        <Card className='authentication'>
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                {!isLoginMode &&
                    <Input
                        element='input'
                        id='name'
                        type='text'
                        label='Enter a Username'
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText='Enter a Username'
                        onInput={inputHandler}
                    />
                }

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
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText='Password must be at least 5 characters'
                    onInput={inputHandler}
                />
                <Button
                    type='submit'
                    disabled={!formState.isValid}
                    onSubmit={authSubmitHandler}
                >
                    {isLoginMode ? 'LOGIN' : 'SIGNUP'}
                </Button>
            </form>
            <Button
                inverse
                onClick={switchModeHandler}
            >
                SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
            </Button>
        </Card>
    )
}

export default Auth;