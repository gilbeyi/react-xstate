import { createMachine } from 'xstate'

import { CustomerEvent, CustomerState } from './types'
import { CustomerContext, customerContextDefault } from './context'
import { setValue } from './actions'

export const customerMachine = createMachine<
  CustomerContext,
  CustomerEvent,
  CustomerState
>(
  {
    id: 'customer',
    description: 'customer information',
    initial: 'edit',
    context: {...customerContextDefault},
    states: {
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
            actions: 'setValue'
          }
        }
      }
    }
  },
  {
    actions: {
      setValue
    }
  }
)
