export type CustomerInfo = {
  name: string
}

export type CustomerEvent = 
  | { type: 'CONFIRM', value: CustomerInfo }
  | { type: 'CANCEL', value: CustomerInfo }
  | { type: 'COMPLETE', value: CustomerInfo }
  | { type: 'RESET', value: CustomerInfo }
