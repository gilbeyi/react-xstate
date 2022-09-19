import { assign } from 'xstate'

import { CustomerContext } from './context'
import { CustomerEvent } from './types'

export const setValue = assign<CustomerContext, CustomerEvent>((_context, event) => {
  return {
    customerInfo: {...event.value}
  }
})
