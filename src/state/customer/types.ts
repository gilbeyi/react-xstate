import { CustomerContext } from './context'

export type CustomerInfo = {
  name: string
  address: string
}

export type CustomerEvent = 
  | { type: 'CONFIRM', value: CustomerInfo }
  | { type: 'CANCEL', value: CustomerInfo }
  | { type: 'COMPLETE', value: CustomerInfo }
  | { type: 'RESET', value: CustomerInfo }

export type CustomerState =
  | {
      value: 'edit',
      context: CustomerContext
    }
  | {
      value: 'confirm',
      context: CustomerContext
    }
  | {
      value: 'completed',
      context: CustomerContext
    }
