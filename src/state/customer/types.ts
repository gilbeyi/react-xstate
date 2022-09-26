import { CustomerContext } from './context'

export type CustomerInfo = {
  name: string
  address: string
  gender: string
}

export type CustomerEvent = 
  | { type: 'INIT' }
  | { type: 'CONFIRM', value: CustomerInfo }
  | { type: 'CANCEL' }
  | { type: 'COMPLETE', value: CustomerInfo }
  | { type: 'RESET' }

export type CustomerState =
  | {
      value: 'initialize',
      context: CustomerContext
    }
  | {
      value: 'edit',
      context: CustomerContext
    }
  | {
      value: 'confirm',
      context: CustomerContext
    }
  | {
      value: 'regist',
      context: CustomerContext
    }
  | {
      value: 'completed',
      context: CustomerContext
    }
  | {
      value: 'failure',
      context: CustomerContext
    }
