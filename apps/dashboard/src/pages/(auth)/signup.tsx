import React from 'react'

import { FormContainer } from 'ui/common'
import { Button, FormInput } from 'ui/components'

// import { useSignup } from '../lib'

export default function Signup() {
  // const { errors, handleSubmit, isSubmitting, register } = useSignup()

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
      <FormInput
        className="w-full"
        // error={errors.confPassword}
        label="Confirmer le mot de passe"
        type="password"
        // {...register('confPassword')}
      />
      <div className="flex items-center justify-center w-full mx-4">
        <Button
          // aria-disabled={isSubmitting}
          // onClick={handleSubmit}
          type="submit"
          variant="primary"
        >
          {`S'inscrire`}
        </Button>
      </div>
    </FormContainer>
  )
}
