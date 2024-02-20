'use client'

import React from 'react'

import { Button, FormInput } from 'ui/components'

import { Form } from '../components'
import { useSignup } from '../lib'

export default function Signup() {
  const { errors, handleSubmit, isSubmitting, register } = useSignup()

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
      <FormInput
        className="w-full"
        error={errors.confPassword}
        label="Confirmer le mot de passe"
        type="password"
        {...register('confPassword')}
      />
      <div className="flex items-center justify-center w-full mx-4">
        <Button aria-disabled={isSubmitting} type="submit">
          {`S'inscrire`}
        </Button>
      </div>
    </Form>
  )
}
