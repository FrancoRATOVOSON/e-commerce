import React from 'react'

import { FormContainer } from 'ui/common'
import { Button, FormInput } from 'ui/components'

// import { useLogin } from '../lib'

export default function Login() {
  // const { errors, handleSubmit, isSubmitting, register } = useLogin()

  return (
    <FormContainer>
      <FormInput
        className="w-full"
        // error={errors.email}
        label="Email"
        type="email"
        // {...register('email')}
      />
      <FormInput
        className="w-full"
        // error={errors.password}
        label="Mot de passe"
        type="password"
        // {...register('password')}
      />
      <div className="flex items-center justify-center w-full mx-4">
        <Button
          // aria-disabled={isSubmitting}
          // onClick={handleSubmit}
          type="submit"
          variant="primary"
        >
          Se connecter
        </Button>
      </div>
    </FormContainer>
  )
}
