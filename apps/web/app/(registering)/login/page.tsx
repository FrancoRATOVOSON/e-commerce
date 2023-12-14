'use client'

import React from 'react'
import { Button, FormInput } from 'ui'
import { Form } from '../components'

export default function Login() {
  return (
    <Form>
      <FormInput label='Email' type='email' className='w-full'/>
      <FormInput label='Mot de passe' type='password' name='password' className='w-full'/>
      <div className='flex items-center justify-center w-full mx-4'>
        <Button type='Primary' buttonType='submit'>Se connecter</Button>
      </div>
    </Form>
  )
}
