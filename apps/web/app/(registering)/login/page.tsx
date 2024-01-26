'use client'

import React from 'react'

import { Button, FormInput } from 'ui'

import { Form } from '../components'
import { useLogin } from '../lib'

export default function Login() {
  const { errors, handleSubmit, isSubmitting, register } = useLogin()

  return (
    <Form action={() => handleSubmit()}>
      <FormInput
        className="w-full"
        error={errors.email}
        label="Email"
        type="email"
        {...register('email')}
      />
      <FormInput
        className="w-full"
        error={errors.password}
        label="Mot de passe"
        type="password"
        {...register('password')}
      />
      <div className="flex items-center justify-center w-full mx-4">
        <Button aria-disabled={isSubmitting} type="submit" variant="primary">
          Se connecter
        </Button>
      </div>
    </Form>
  )
}
