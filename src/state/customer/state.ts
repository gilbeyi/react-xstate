import { assign, createMachine, send } from 'xstate'

import { CustomerEvent } from './types'
import { CustomerContext, customerContextDefault } from './context'

export const customerMachine = createMachine<
  CustomerContext,
  CustomerEvent
>(
  {
    id: 'customer',
    description: 'customer information',
    initial: 'input',
    context: {...customerContextDefault},
    states: {
      input: {
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
            target: 'input'
          }
        }
      },
      completed: {
        on: {
          RESET: { 
            target: 'input',
            actions: 'setValue'
          }
        }
      }
    }
  },
  {
    actions: {
      setValue: assign((_context, event) => {
        return {
          customerInfo: {...event.value}
        }
      })
    }
  }
)
