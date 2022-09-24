import { CustomerContext } from './context'

export type CustomerInfo = {
  name: string
  address: string
  gender: string
}

export type CustomerEvent = 
  | { type: 'INIT' }
  | { type: 'CONFIRM' }
  | { type: 'CANCEL' }
  | { type: 'COMPLETE', value: CustomerInfo }
  | { type: 'RESET' }

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
