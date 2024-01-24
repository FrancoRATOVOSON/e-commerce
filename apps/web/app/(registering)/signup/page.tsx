'use client'

import React from 'react'
import { Button, FormInput } from 'ui'
import { ErrorMessage } from '@hookform/error-message'
import { Form } from '../components'
import { useSignup } from '../lib'

export default function Signup() {
  const { register, handleSubmit, errors, isSubmitting } = useSignup()

  return (
    <Form action={handleSubmit}>
      <FormInput
      label='Email'
      type='email'
      className='w-full'
      ErrorMessage={<ErrorMessage name='email' errors={errors} />}
      {...register('email')}/>
      <FormInput
      label='Mot de passe'
      type='password'
      className='w-full'
      ErrorMessage={<ErrorMessage name='password' errors={errors} />}
      {...register('password')}/>
      <FormInput
      label='Confirmer le mot de passe'
      type='password'
      className='w-full'
      ErrorMessage={<ErrorMessage name='confPassword' errors={errors} />}
      {...register('confPassword')}/>
      <div className='flex items-center justify-center w-full mx-4'>
        <Button variant='Primary' type='submit' className='w-full' aria-disabled={isSubmitting}>
          {`S'inscrire`}
        </Button>
      </div>
    </Form>
  )
}
