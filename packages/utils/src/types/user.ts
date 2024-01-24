export interface LoginFormData {
  email: string
  password: string
}

export interface SignupFormData extends LoginFormData {
  confPassword: string
}

export interface ShopperCredentials {
  email: string
  password: string
}

export interface LogedShopper {
  id: number
  login: string
}