'use client'

import React from 'react'
import { Button, FormInput } from 'ui'
import { Form } from '../components'
import { useLogin } from '../lib'

export default function Login() {
  const { register, handleSubmit, errors, isSubmitting } = useLogin()

  return (
    <Form action={handleSubmit}>
      <FormInput label='Email' type='email' className='w-full' {...register('email')}/>
      {errors.email?.message && <p>{errors.email.message}</p>}
      <FormInput label='Mot de passe' type='password' className='w-full' {...register('password')}/>
      {errors.password?.message && <p>{errors.password.message}</p>}
      <div className='flex items-center justify-center w-full mx-4'>
        <Button variant='Primary' type='submit' aria-disabled={isSubmitting}>
          Se connecter
        </Button>
      </div>
    </Form>
  )
}
