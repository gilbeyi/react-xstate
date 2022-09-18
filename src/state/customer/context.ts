import { CustomerInfo } from './types'

export interface CustomerContext {
  customerInfo: CustomerInfo
}

export const customerContextDefault = {
  customerInfo: {
    name: ''
  }
}
