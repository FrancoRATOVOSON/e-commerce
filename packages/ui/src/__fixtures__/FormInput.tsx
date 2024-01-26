import React, { useState } from 'react'

import { FormInput } from '../components'

function FormInputFixture() {
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (value.length < 3) setError('Value must be longer than 3')
    else setError(undefined)
  }

  return (
    <div className="w-52">
      <FormInput
        description="A text form field fixture, type something in to see what happen"
        error={error ? { message: error } : undefined}
        label="Form Label"
        name="input"
        onChange={handleChange}
        type="text"
        value={value}
      />
    </div>
  )
}

export default <FormInputFixture />
