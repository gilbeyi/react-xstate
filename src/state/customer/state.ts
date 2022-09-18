import { createMachine } from 'xstate'

import { CustomerEvent } from './types'
import { CustomerContext, customerContextDefault } from './context'
import { setValue } from './actions'

export const customerMachine = createMachine<
  CustomerContext,
  CustomerEvent
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
            target: 'confirm',
            actions: 'setValue'
          }
        }
      },
      confirm: {
        on: {
          COMPLETE: {
            target: 'completed'
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
