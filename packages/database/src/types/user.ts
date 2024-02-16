import { Shopper } from '../client'

export type ShopperData = Omit<Shopper, 'password'>

export type ShopperInput = Omit<Shopper, 'id'> & { confPassword?: string }
