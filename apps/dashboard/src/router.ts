// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/customer/:id`
  | `/customer/:id/:order`
  | `/customers`
  | `/login`
  | `/overview`
  | `/products`
  | `/settings`
  | `/signup`

export type Params = {
  '/customer/:id': { id: string }
  '/customer/:id/:order': { id: string; order: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
