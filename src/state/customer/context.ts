import { CustomerInfo } from './types'

export interface CustomerContext {
  customerInfo: CustomerInfo
}

export const customerInfoDefault: CustomerInfo = {
  name: '',
  address: '',
  gender: '9'
}

export const customerContextDefault = {
  customerInfo: customerInfoDefault
}
