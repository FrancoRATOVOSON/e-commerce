import React from 'react'

import { Form, Link as UILink } from '../../components'
import { cn } from '../../utils'

interface DecoratorProps {
  children: React.ReactNode
  pathName: string
  linkComponent?: (props: {
    [key: string]: any
    children: React.ReactNode
    href: string
  }) => React.JSX.Element
}

const LOGIN = 'Se connecter'
const SIGNUP = `S'inscrire`

function FormWrapper({ children, linkComponent, pathName }: DecoratorProps) {
  const bottomText =
    pathName === '/login' ? `Vous êtes nouveau ? ` : `Déjà membre ? `
  const pageLabel = pathName === '/login' ? LOGIN : SIGNUP
  const pageAction = pathName === '/login' ? SIGNUP : LOGIN

  const Link = linkComponent || UILink

  return (
    <div className="flex flex-col items-center justify-start gap-10">
      <h1 className="text-2xl font-medium">{pageLabel}</h1>
      {children}
      <p>
        {bottomText}
        <Link href={pathName === '/login' ? '/signup' : '/login'}>
          {pageAction}
        </Link>
      </p>
    </div>
  )
}

const FormContainer = React.forwardRef<
  HTMLFormElement,
  React.FormHTMLAttributes<HTMLFormElement>
>(({ className, ...props }, ref) => (
  <Form className={cn('space-y-7 w-72', className)} ref={ref} {...props} />
))

FormContainer.displayName = 'FormContainer'

export { FormContainer, FormWrapper }
