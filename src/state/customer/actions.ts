import { assign } from 'xstate'

import { CustomerContext, customerInfoDefault } from './context'
import { CustomerEvent } from './types'

export const setValue = assign<CustomerContext, CustomerEvent>((context, event) => {
  if (event.type !== 'COMPLETE') return context
  return {
    customerInfo: {...event.value}
  }
})

export const resetValue = assign<CustomerContext, CustomerEvent>((_context, _event) => {
  return {
    customerInfo: {...customerInfoDefault}
  }
})
