import React from 'react';
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap';

export function SignUpForm(props) {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        props.cbSubmit(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Name</h3>
            <input
                name='name'
                type='text'
                placeholder='Ailrial Vostholt'
                ref={register({
                    required: true,
                    maxLength: 50
                })} />
            {errors.name && errors.name.type === "required" && "Please enter a name"}
            {errors.name && errors.name.type === "maxLength" && "Please keep name under 50 characters"}
            <h3>Email</h3>
            <input
                name='email'
                type='text'
                placeholder='DM4ever@dnd.com'
                ref={register({
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })} />
            {errors.email && errors.email.type === "required" && "Please enter an email"}
            {errors.email && errors.email.type === "pattern" && "Please enter a real email"}
            <h3>Password</h3>
            <input
                name='password'
                type='text'
                ref={register({
                    required: true,
                    minLength: 6,
                    maxLength: 24
                })} />
            {errors.password && errors.password.type === "required" && "Please enter a password"}
            {errors.password && errors.password.type === "minLength" && "Please enter a longer password"}
            {errors.password && errors.password.type === "maxLength" && "Please enter a shorter password"}
            <h3>Account Type</h3>
            <select
                id="acctType"
                name="acctType"
                ref={register({
                    required: true
                })}> 
                <option value='Dungeon Master' >Dungeon Master</option>
                <option value='Player Character' >Player Character</option>
            </select>


            <button role='submit'>Submit</button>
        </form>
    )
}