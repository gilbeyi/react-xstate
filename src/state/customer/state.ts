import { createMachine } from 'xstate'

import { CustomerEvent, CustomerState } from './types'
import { CustomerContext, customerContextDefault } from './context'
import { setValue, resetValue } from './actions'

export const customerMachine = createMachine<
  CustomerContext,
  CustomerEvent,
  CustomerState
>(
  {
    id: 'customer',
    description: 'customer information',
    initial: 'initialize',
    context: {...customerContextDefault},
    states: {
      initialize: {
        on: {
          INIT: {
            target: 'edit',
            actions: 'resetValue'
          }
        }
      },
      edit: {
        on: {
          CONFIRM: {
            target: 'confirm'
          }
        }
      },
      confirm: {
        on: {
          COMPLETE: {
            target: 'completed',
            actions: 'setValue'
          },
          CANCEL: {
            target: 'edit'
          }
        }
      },
      completed: {
        on: {
          RESET: { 
            target: 'edit',
            actions: 'resetValue'
          }
        }
      }
    }
  },
  {
    actions: {
      setValue,
      resetValue
    }
  }
)
